import { beforeEach, describe, expect, it } from 'vitest'
import { readJSON, writeJSON } from './storage'

describe('penyimpanan lokal buku catatan', () => {
  beforeEach(() => window.localStorage.clear())

  it('menyimpan dan membaca halaman terakhir', () => {
    writeJSON('lastPage', 7)
    expect(readJSON('lastPage', 1)).toBe(7)
  })

  it('mengembalikan fallback saat data rusak', () => {
    window.localStorage.setItem('corat-coret:lastPage', 'bukan-json{')
    expect(readJSON('lastPage', 1)).toBe(1)
  })
})
