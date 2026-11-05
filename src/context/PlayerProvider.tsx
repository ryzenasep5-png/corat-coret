import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { tracks } from '../data/tracks'
import type { Track } from '../data/tracks'
import { PlayerContext, type PlayerApi } from './player'

export default function PlayerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Track | null>(null)
  const [playing, setPlaying] = useState(false)

  const playTrack = useCallback((track: Track) => {
    setCurrent(track)
    setPlaying(true)
  }, [])

  const indexFor = useCallback(
    (track: Track | null) => (track ? tracks.findIndex((item) => item.id === track.id) : -1),
    [],
  )

  const next = useCallback(() => {
    const index = indexFor(current)
    const target = tracks[(index + 1 + tracks.length) % tracks.length]
    if (target) playTrack(target)
  }, [current, indexFor, playTrack])

  const previous = useCallback(() => {
    const index = indexFor(current)
    const target = tracks[(index - 1 + tracks.length) % tracks.length]
    if (target) playTrack(target)
  }, [current, indexFor, playTrack])

  const openOnYouTube = useCallback((track: Track) => {
    const url = track.videoId ? `https://www.youtube.com/watch?v=${track.videoId}` : track.searchLink
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  const value = useMemo<PlayerApi>(
    () => ({ current, playing, playTrack, next, previous, openOnYouTube }),
    [current, playing, playTrack, next, previous, openOnYouTube],
  )

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}
