import { createContext, useContext } from 'react'
import type { Track } from '../data/tracks'

export interface PlayerApi {
  current: Track | null
  playing: boolean
  ready: boolean
  failed: boolean
  time: number
  duration: number
  playTrack: (track: Track) => void
  togglePlay: () => void
  next: () => void
  previous: () => void
  seek: (seconds: number) => void
  openOnYouTube: (track: Track) => void
}

export const PlayerContext = createContext<PlayerApi | null>(null)

export function usePlayer(): PlayerApi {
  const context = useContext(PlayerContext)
  if (!context) throw new Error('usePlayer harus dipakai di dalam PlayerProvider')
  return context
}
