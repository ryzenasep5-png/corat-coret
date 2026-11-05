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

  it('halaman 2 sampai 30 masih berstatus kosong', () => {
    for (const page of pages.slice(1)) {
      expect(page.status).toBe('kosong')
      expect(page.blocks).toEqual([])
    }
  })
})
