import type { NotebookPage } from '../types'

export const TOTAL_PAGES = 30

const emptyPage = (id: number): NotebookPage => ({
  id,
  title: '',
  emoji: '✏️',
  accent: '#fffdf6',
  doodles: ['squiggle'],
  status: 'kosong',
  blocks: [],
})

export const pages: NotebookPage[] = [
  {
    id: 1,
    title: 'Our Little Story',
    emoji: '❣️',
    accent: '#ffd9e3',
    doodles: ['heart', 'star', 'moon', 'couple'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Jam 01:42 malam, dunia udah pada tidur… eh, dua orang ini malah resmi jadian. 🤭',
      },
      {
        type: 'couple',
        left: 'Maulana Firdaus',
        right: 'Widi Nurul Rizki',
      },
      {
        type: 'fact',
        label: 'Hari jadi "kita"',
        value: '22 Desember 2024 · pukul 01:42',
      },
      {
        type: 'stamp',
        text: '22 · 12 · 2024',
        sub: '01:42 malam',
      },
      {
        type: 'joke',
        text: 'Katanya jadian tengah malam biar bintang-bintang ikut jadi saksi. Masalahnya jam 01:42 bintangnya udah ngantuk juga. Tapi kabarnya mereka tetap melirik sebentar.',
      },
      {
        type: 'quote',
        text: 'Semua kisah punya bab pertama. Yang ini, bab pertamanya ditulis tengah malam.',
      },
      {
        type: 'list',
        title: 'Fakta-fakta receh',
        items: [
          'Desember itu musim hujan — jadi sejak hari pertama mereka memang siap basah-basahan.',
          '01:42 resmi masuk daftar jam paling disayang.',
          'Dua nama: Maulana Firdaus & Widi Nurul Rizki.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Lagu-Lagu Kita',
    emoji: '🎶',
    accent: '#cde9ff',
    doodles: ['star', 'squiggle', 'heart'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: '18 lagu yang bisa diputar langsung di halaman ini. Nggak perlu buka YouTube — tinggal pencet. (Kecuali internetnya lagi ngambek.)',
      },
      {
        type: 'playlist',
        title: 'Putar di sini 🎵',
        subtitle: 'Semua lagu resmi, diputar lewat YouTube di dalam halaman.',
      },
    ],
  },
  ...Array.from({ length: TOTAL_PAGES - 2 }, (_, index) => emptyPage(index + 3)),
]

export function getPage(id: number): NotebookPage | undefined {
  return pages.find((page) => page.id === id)
}
