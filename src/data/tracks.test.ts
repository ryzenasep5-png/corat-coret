import { describe, expect, it } from 'vitest'
import { tracks } from './tracks'

describe('playlist halaman 2', () => {
  it('memiliki 18 lagu tanpa duplikat', () => {
    expect(tracks).toHaveLength(18)
    expect(new Set(tracks.map((track) => track.id)).size).toBe(18)
  })

  it('semua lagu memiliki video ID terverifikasi dan tautan pencarian', () => {
    for (const track of tracks) {
      expect(track.videoId).toBeTruthy()
      expect(track.searchLink).toContain('youtube.com/results')
    }
  })
})
