import { describe, expect, it } from 'vitest'
import { getPage, pages, TOTAL_PAGES } from './pages'

describe('buku catatan 30 halaman', () => {
  it('memiliki tepat 30 halaman dengan id unik berurutan', () => {
    expect(TOTAL_PAGES).toBe(30)
    expect(pages).toHaveLength(30)
    expect(pages.map((page) => page.id)).toEqual(Array.from({ length: 30 }, (_, index) => index + 1))
  })

  it('halaman 1 berisi cerita yang diminta', () => {
    const first = getPage(1)
    expect(first?.status).toBe('ready')
    expect(first?.title).toContain('Little Story')
    const couple = first?.blocks.find((block) => block.type === 'couple')
    if (couple?.type === 'couple') {
      expect(couple.left).toBe('Maulana Firdaus')
      expect(couple.right).toBe('Widi Nurul Rizki')
    }
    const fact = first?.blocks.find((block) => block.type === 'fact')
    if (fact?.type === 'fact') {
      expect(fact.value).toContain('22 Desember 2024')
      expect(fact.value).toContain('01:42')
    }
  })

  it('halaman 2 berisi playlist lagu', () => {
    const second = getPage(2)
    expect(second?.status).toBe('ready')
    expect(second?.blocks.some((block) => block.type === 'playlist')).toBe(true)
  })

  it('halaman 3 berisi curhat malam', () => {
    const third = getPage(3)
    expect(third?.status).toBe('ready')
    const texts = third?.blocks.filter((block) => block.type === 'curhat').map((block) => (block as { text: string }).text).join(' ') ?? ''
    expect(texts).toContain('Spotify')
    expect(texts).toContain('kamar cowok lain')
    expect(texts).toContain('nyesel')
  })

  it('halaman 4 berisi foto kenangan pertemuan kedua', () => {
    const fourth = getPage(4)
    expect(fourth?.status).toBe('ready')
    const photo = fourth?.blocks.find((block) => block.type === 'photo')
    if (photo?.type === 'photo') {
      expect(photo.src).toBe('/photos/foto-kedua-kali.jpg')
    }
    const texts = fourth?.blocks.map((block) => (block as { text?: string }).text ?? '').join(' ') ?? ''
    expect(texts).toContain('cowok pertama')
    expect(texts).toContain('ke rumah')
  })

  it('halaman 5 berisi kalender dengan tanda 1 Februari', () => {
    const fifth = getPage(5)
    expect(fifth?.status).toBe('ready')
    const calendar = fifth?.blocks.find((block) => block.type === 'calendar')
    if (calendar?.type === 'calendar') {
      expect(calendar.days).toBe(28)
      expect(calendar.marked.some((mark) => mark.day === 1 && mark.style === 'ring')).toBe(true)
    }
  })

  it('halaman 6 sampai 30 masih berstatus kosong', () => {
    for (const page of pages.slice(5)) {
      expect(page.status).toBe('kosong')
      expect(page.blocks).toEqual([])
    }
  })
})
