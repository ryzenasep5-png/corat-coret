import { AnimatePresence, motion } from 'motion/react'
import { ExternalLink, SkipBack, SkipForward } from 'lucide-react'
import { useState } from 'react'
import { usePlayer } from '../context/player'
import { tracks } from '../data/tracks'
import type { Track } from '../data/tracks'

function EqualizerBars({ active }: { active: boolean }) {
  return (
    <span className="flex h-4 items-end justify-center gap-[2px]" aria-hidden="true">
      {[0, 1, 2].map((bar) => (
        <span
          key={bar}
          className="eq-bar w-[3px] rounded-full bg-rose"
          style={{
            height: active ? '100%' : '30%',
            animationDelay: `${bar * 0.16}s`,
            animationDuration: `${0.7 + bar * 0.12}s`,
            animationPlayState: active ? 'running' : 'paused',
          }}
        />
      ))}
    </span>
  )
}

function TrackRow({ track, index }: { track: Track; index: number }) {
  const player = usePlayer()
  const isCurrent = player.current?.id === track.id
  const isPlaying = isCurrent && player.playing

  return (
    <li>
      <button
        type="button"
        onClick={() => player.playTrack(track)}
        aria-pressed={isCurrent}
        className={`flex w-full items-center gap-3 rounded-xl border-2 px-3 py-2 text-left transition ${
          isCurrent
            ? 'border-rose/50 bg-blush/60'
            : 'border-ink/10 bg-white/55 hover:border-rose/35 hover:bg-blush/35'
        }`}
      >
        <span className="flex w-7 shrink-0 items-center justify-center">
          {isPlaying ? <EqualizerBars active /> : <span className="font-hand text-sm text-inksoft">▶</span>}
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block truncate font-hand text-lg leading-tight ${isCurrent ? 'text-rose' : 'text-ink'}`}>
            {track.title}
          </span>
          <span className="block truncate font-hand text-sm text-inksoft/90">{track.artist}</span>
        </span>
        <span className="w-6 shrink-0 text-center font-hand text-sm text-inksoft/60">{String(index + 1).padStart(2, '0')}</span>
      </button>
    </li>
  )
}

function YouTubePlayer({ track, autoplay, onError }: { track: Track; autoplay: boolean; onError: () => void }) {
  if (!track.videoId) return null
  const origin = typeof window === 'undefined' ? '' : window.location.origin
  const query = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: '1',
    enablejsapi: '1',
    modestbranding: '1',
    playsinline: '1',
    rel: '0',
  })
  if (origin) query.set('origin', origin)

  return (
    <iframe
      key={track.id}
      src={`https://www.youtube-nocookie.com/embed/${track.videoId}?${query.toString()}`}
      title={`${track.title} — ${track.artist}`}
      className="youtube-player mt-3 w-full rounded-xl"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
      loading="eager"
      referrerPolicy="strict-origin-when-cross-origin"
      onError={onError}
    />
  )
}

export function PersistentMusicPlayer({ visible }: { visible: boolean }) {
  const player = usePlayer()
  const [frameErrorFor, setFrameErrorFor] = useState<string | null>(null)
  const frameError = frameErrorFor === player.current?.id

  if (!player.current) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -4 }}
      className={`persistent-player w-full max-w-2xl ${visible ? '' : 'persistent-player-hidden'}`}
      aria-hidden={!visible}
    >
      <div className={visible ? 'flex items-center justify-between gap-2 font-hand text-sm text-inksoft' : 'hidden'}>
        <span className="min-w-0 truncate">
          <span className="text-ink">{player.current.title}</span> · {player.current.artist}
        </span>
        <span className="shrink-0 text-rose">tetap nyala 🎵</span>
      </div>
      {!frameError ? (
        <YouTubePlayer
          track={player.current}
          autoplay={player.playing}
          onError={() => setFrameErrorFor(player.current?.id ?? null)}
        />
      ) : null}
      <div className={visible ? 'mt-2 flex flex-wrap items-center justify-center gap-2' : 'hidden'}>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white/70 px-3 py-1 font-hand text-sm text-ink transition hover:border-rose/40 hover:text-rose"
          onClick={player.previous}
        >
          <SkipBack size={14} /> Sebelumnya
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white/70 px-3 py-1 font-hand text-sm text-ink transition hover:border-rose/40 hover:text-rose"
          onClick={player.next}
        >
          Berikutnya <SkipForward size={14} />
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full border border-rose/40 bg-white/70 px-3 py-1 font-hand text-sm text-rose transition hover:bg-blush/50"
          onClick={() => player.openOnYouTube(player.current!)}
        >
          <ExternalLink size={13} /> Buka YouTube
        </button>
      </div>
      <p className={visible ? 'mt-2 text-center font-hand text-xs text-inksoft/80' : 'hidden'}>
        {frameError ? 'Player-nya nggak mau muncul di sini — tombol YouTube tetap bisa dipakai.' : 'Player ini tetap ada saat pindah halaman.'}
      </p>
    </motion.div>
  )
}

export default function PlaylistBlock({ title, subtitle }: { title: string; subtitle?: string }) {
  const player = usePlayer()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="my-5">
      <div className="text-center">
        <p className="font-scribble text-3xl font-bold text-ink">{title}</p>
        {subtitle ? <p className="mt-1 font-hand text-base text-inksoft">{subtitle}</p> : null}
      </div>

      <div className="mt-4 rounded-2xl border-2 border-dashed border-ink/20 bg-butter/55 px-4 py-5 text-center">
        {player.current ? (
          <p className="font-hand text-base text-inksoft">Lagu sedang diputar di player atas — pindah halaman juga tetap lanjut 🤍</p>
        ) : (
          <>
            <p className="font-hand text-lg text-ink">Pilih salah satu lagu di bawah 🎵</p>
            <p className="mt-1 font-hand text-sm text-inksoft">Player YouTube-nya akan muncul di atas dan tetap nyala saat kamu pindah halaman.</p>
          </>
        )}
      </div>

      <div className="mt-3 text-center">
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          className="font-hand text-sm text-inksoft underline decoration-dotted underline-offset-4 transition hover:text-rose"
        >
          {collapsed ? '▶ Lihat semua 18 lagu' : '▼ Tutup daftar lagu'}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {!collapsed ? (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 max-h-72 space-y-2 overflow-y-auto pr-1"
            style={{ scrollbarWidth: 'thin' }}
          >
            {tracks.map((track, index) => (
              <TrackRow key={track.id} track={track} index={index} />
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
