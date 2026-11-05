import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { tracks } from '../data/tracks'
import type { Track } from '../data/tracks'
import { PlayerContext, type PlayerApi } from './player'

type YouTubeWindow = Window & {
  YT?: typeof YT
  onYouTubeIframeAPIReady?: () => void
}

let apiPromise: Promise<typeof YT> | null = null

function loadYouTubeApi(): Promise<typeof YT> {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'))
  const youtubeWindow = window as YouTubeWindow
  if (youtubeWindow.YT?.Player) return Promise.resolve(youtubeWindow.YT)
  if (apiPromise) return apiPromise

  apiPromise = new Promise((resolve, reject) => {
    let settled = false
    let pollId: number | undefined
    let timeoutId: number | undefined

    const cleanup = () => {
      if (pollId !== undefined) window.clearInterval(pollId)
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }

    const finish = () => {
      if (settled) return
      if (youtubeWindow.YT?.Player) {
        settled = true
        cleanup()
        resolve(youtubeWindow.YT)
      }
    }

    const fail = (error: Error) => {
      if (settled) return
      settled = true
      cleanup()
      apiPromise = null
      reject(error)
    }

    const previousReady = youtubeWindow.onYouTubeIframeAPIReady
    youtubeWindow.onYouTubeIframeAPIReady = () => {
      previousReady?.()
      finish()
    }

    pollId = window.setInterval(finish, 50)
    timeoutId = window.setTimeout(() => fail(new Error('YouTube IFrame API timeout')), 15_000)

    if (!document.getElementById('corat-coret-yt-api')) {
      const script = document.createElement('script')
      script.id = 'corat-coret-yt-api'
      script.src = 'https://www.youtube.com/iframe_api'
      script.async = true
      script.onerror = () => fail(new Error('Gagal memuat YouTube IFrame API'))
      document.head.appendChild(script)
    }
  })

  return apiPromise
}

export default function PlayerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Track | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const playerRef = useRef<YT.Player | null>(null)
  const holderRef = useRef<HTMLDivElement | null>(null)
  const readyRef = useRef(false)
  const cancelledRef = useRef(false)
  const pendingRef = useRef<{ track: Track; play: boolean } | null>(null)
  const stateRef = useRef({ current, playing })

  useEffect(() => {
    stateRef.current = { current, playing }
  })

  const loadTrack = useCallback((track: Track, shouldPlay: boolean) => {
    setCurrent(track)
    setFailed(false)
    setTime(0)
    setDuration(0)
    pendingRef.current = { track, play: shouldPlay }
    const player = playerRef.current
    if (!player || !readyRef.current || !track.videoId) return
    if (shouldPlay) player.loadVideoById(track.videoId)
    else player.cueVideoById(track.videoId)
  }, [])

  const playTrack = useCallback((track: Track) => loadTrack(track, true), [loadTrack])

  const indexFor = useCallback(
    (track: Track | null) => (track ? tracks.findIndex((item) => item.id === track.id) : -1),
    [],
  )

  const next = useCallback(() => {
    const index = indexFor(stateRef.current.current)
    const target = tracks[(index + 1 + tracks.length) % tracks.length]
    if (target) loadTrack(target, true)
  }, [indexFor, loadTrack])

  const previous = useCallback(() => {
    const player = playerRef.current
    if (player && readyRef.current && player.getCurrentTime() > 4) {
      player.seekTo(0, true)
      return
    }
    const index = indexFor(stateRef.current.current)
    const target = tracks[(index - 1 + tracks.length) % tracks.length]
    if (target) loadTrack(target, true)
  }, [indexFor, loadTrack])

  const togglePlay = useCallback(() => {
    const player = playerRef.current
    const song = stateRef.current.current ?? tracks[0]
    if (!song) return
    if (!stateRef.current.current) setCurrent(song)
    pendingRef.current = { track: song, play: true }
    if (!player || !readyRef.current) return
    if (stateRef.current.playing) player.pauseVideo()
    else if (song.videoId) player.playVideo()
  }, [])

  const seek = useCallback((seconds: number) => {
    if (!playerRef.current || !readyRef.current) return
    playerRef.current.seekTo(seconds, true)
    setTime(seconds)
  }, [])

  const openOnYouTube = useCallback((track: Track) => {
    const url = track.videoId ? `https://www.youtube.com/watch?v=${track.videoId}` : track.searchLink
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  useEffect(() => {
    cancelledRef.current = false
    loadYouTubeApi()
      .then((YTNamespace) => {
        if (cancelledRef.current || !holderRef.current) return
        playerRef.current = new YTNamespace.Player(holderRef.current, {
          width: '1',
          height: '1',
          playerVars: { autoplay: 0, controls: 0, playsinline: 1, rel: 0, origin: window.location.origin },
          events: {
            onReady: (event) => {
              readyRef.current = true
              setReady(true)
              const pending = pendingRef.current
              if (pending?.track.videoId) {
                if (pending.play) event.target.loadVideoById(pending.track.videoId)
                else event.target.cueVideoById(pending.track.videoId)
                pendingRef.current = null
              }
            },
            onStateChange: (event) => {
              if (event.data === 1) {
                setPlaying(true)
                setFailed(false)
                setDuration(event.target.getDuration() || 0)
              } else if (event.data === 2 || event.data === 5) {
                setPlaying(false)
              } else if (event.data === 0) {
                setPlaying(false)
                next()
              }
            },
            onError: () => {
              setFailed(true)
              setPlaying(false)
            },
          },
        })
      })
      .catch(() => {
        if (!cancelledRef.current) setFailed(true)
      })
    return () => {
      cancelledRef.current = true
      readyRef.current = false
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [next])

  useEffect(() => {
    const timer = window.setInterval(() => {
      const player = playerRef.current
      if (!player || !readyRef.current) return
      setTime(player.getCurrentTime?.() ?? 0)
      const total = player.getDuration?.() ?? 0
      if (total > 0) setDuration(total)
    }, 500)
    return () => window.clearInterval(timer)
  }, [])

  const value = useMemo<PlayerApi>(
    () => ({
      current,
      playing,
      ready,
      failed,
      time,
      duration,
      playTrack,
      togglePlay,
      next,
      previous,
      seek,
      openOnYouTube,
    }),
    [current, playing, ready, failed, time, duration, playTrack, togglePlay, next, previous, seek, openOnYouTube],
  )

  return (
    <PlayerContext.Provider value={value}>
      {children}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
          left: '-9999px',
        }}
      >
        <div ref={holderRef} />
      </div>
    </PlayerContext.Provider>
  )
}
