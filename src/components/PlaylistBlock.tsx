import { AnimatePresence, motion } from 'motion/react'
import { ExternalLink, Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { useState } from 'react'
import { usePlayer } from '../context/player'
import { tracks } from '../data/tracks'
import type { Track } from '../data/tracks'

function formatTime(seconds: number) {
  const safe = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, '0')}`
}

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
        className={`flex w-full items-center gap-3 rounded-xl border-2 px-3 py-2 text-left transition ${
          isCurrent
            ? 'border-rose/50 bg-blush/60'
            : 'border-ink/10 bg-white/55 hover:border-rose/35 hover:bg-blush/35'
        }`}
      >
        <span className="flex w-7 shrink-0 items-center justify-center">
          {isPlaying ? <EqualizerBars active /> : <Play size={14} className={isCurrent ? 'text-rose' : 'text-inksoft'} />}
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

export default function PlaylistBlock({ title, subtitle }: { title: string; subtitle?: string }) {
  const player = usePlayer()
  const [collapsed, setCollapsed] = useState(false)
  const progress = player.duration > 0 ? (player.time / player.duration) * 100 : 0

  return (
    <div className="my-5">
      <div className="text-center">
        <p className="font-scribble text-3xl font-bold text-ink">{title}</p>
        {subtitle ? <p className="mt-1 font-hand text-base text-inksoft">{subtitle}</p> : null}
      </div>

      {/* Mini player */}
      <div className="mt-4 rounded-2xl border-2 border-dashed border-ink/20 bg-butter/55 px-4 py-3">
        <div className="flex items-center justify-between gap-2 font-hand text-sm text-inksoft">
          <span className="min-w-0 truncate">
            {player.current ? (
              <>
                <span className="text-ink">{player.current.title}</span> · {player.current.artist}
              </>
            ) : (
              'Pencet lagunya, nanti nyanyi sendiri di sini 🎵'
            )}
          </span>
          <span className="shrink-0 tabular-nums">
            {formatTime(player.time)} / {formatTime(player.duration)}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <input
            type="range"
            min={0}
            max={player.duration || 1}
            step={1}
            value={Math.min(player.time, player.duration || 1)}
            onChange={(event) => player.seek(Number(event.target.value))}
            className="h-1 flex-1 cursor-pointer accent-[#e27396]"
            aria-label="Posisi lagu"
          />
          <span className="block h-1.5 w-1.5 shrink-0 rounded-full" style={{ width: `${Math.max(3, progress)}px` }} aria-hidden="true" />
        </div>

        <div className="mt-2 flex items-center justify-center gap-4">
          <button type="button" className="text-ink transition hover:text-rose" onClick={player.previous} aria-label="Lagu sebelumnya">
            <SkipBack size={18} />
          </button>
          <button
            type="button"
            onClick={player.togglePlay}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-rose text-white shadow-md shadow-rose/30 transition hover:brightness-105"
            aria-label={player.playing ? 'Jeda' : 'Putar'}
          >
            {player.playing ? <Pause size={19} /> : <Play size={19} className="ml-0.5" />}
          </button>
          <button type="button" className="text-ink transition hover:text-rose" onClick={player.next} aria-label="Lagu berikutnya">
            <SkipForward size={18} />
          </button>
        </div>

        <AnimatePresence>
          {player.failed ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-2 text-center">
              <button
                type="button"
                onClick={() => player.current && player.openOnYouTube(player.current)}
                className="inline-flex items-center gap-1.5 rounded-full border border-rose/40 bg-white/70 px-3 py-1 font-hand text-sm text-rose"
              >
                <ExternalLink size={13} /> Lagu ini nggak bisa diputar di sini — buka di YouTube
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
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
