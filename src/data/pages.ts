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
    doodles: ['heart', 'star', 'moon', 'squiggle'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Cerita ini dimulai pukul 01:42 malam — saat dunia sudah tidur, tapi dua orang ini belum. (Dasar, jam segitu malah jadian.)',
      },
      {
        type: 'couple',
        left: 'Maulana Firdaus',
        right: 'Widi Nurul Rizki',
      },
      {
        type: 'fact',
        label: 'Jadian',
        value: '22 Desember 2024 · pukul 01:42',
      },
      {
        type: 'joke',
        text: 'Katanya orang jadian tengah malam biar bintang-bintang ikut jadi saksi. Masalahnya jam 01:42 bintangnya juga udah ngantuk. Tapi katanya mereka tetap melirik.',
      },
      {
        type: 'quote',
        text: 'Semua kisah punya bab pertama. Yang ini, bab pertamanya ditulis tengah malam.',
      },
      {
        type: 'list',
        title: 'Fakta kecil dari halaman ini',
        items: [
          'Desember itu musim hujan — jadi sejak hari pertama mereka memang siap basah-basahan.',
          '01:42 resmi masuk daftar jam paling disayang.',
          'Dua nama: Maulana Firdaus & Widi Nurul Rizki.',
        ],
      },
    ],
  },
  ...Array.from({ length: TOTAL_PAGES - 1 }, (_, index) => emptyPage(index + 2)),
]

export function getPage(id: number): NotebookPage | undefined {
  return pages.find((page) => page.id === id)
}
