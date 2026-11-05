import { trackSeeds } from './track-ids'

export interface Track {
  id: string
  title: string
  artist: string
  videoId: string | null
  searchLink: string
}

function makeId(title: string): string {
  return `lagu-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

export const tracks: Track[] = trackSeeds.map((seed) => ({
  id: makeId(seed.title),
  title: seed.title,
  artist: seed.artist,
  videoId: seed.videoId,
  searchLink: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${seed.artist} ${seed.title} Official`)}`,
}))
