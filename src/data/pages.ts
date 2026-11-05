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
  {
    id: 3,
    title: 'Catatan Malam Ini',
    emoji: '🌧️',
    accent: '#cde9ff',
    doodles: ['cloud', 'moon', 'squiggle'],
    status: 'ready',
    blocks: [
      {
        type: 'curhat',
        text: 'Beberapa hari ini hatiku hancur banget. Mungkin apa yang aku rasain, kamu juga ngerasain. Atau mungkin nggak. Aku nggak pernah tahu.',
      },
      {
        type: 'curhat',
        text: 'Jujur, sakitnya kerasa banget. Aku sampai mau nyerah beberapa kali.',
      },
      {
        type: 'curhat',
        text: 'Kamarku jadi sepi. Cuma ada lantunan lagu dari Spotify yang kupasang, biar kesepian itu nggak terlalu nyaring bunyinya.',
      },
      {
        type: 'curhat',
        text: 'Dulu selalu ada suara kamu yang ngisi kekosongan kamarku. Sekarang udah nggak ada.',
      },
      {
        type: 'curhat',
        text: 'Mungkin sekarang kamu ngisi kekosongan kamar cowok lain. Aku nggak bisa bohong — itu terus kepikiran.',
      },
      {
        type: 'curhat',
        text: 'Jujur makasih banget. Kamu udah bikin aku nyesel banget atas apa yang dulu aku lakuin.',
      },
      {
        type: 'note',
        text: 'ditulis malam ini, pelan-pelan. ✍️',
      },
    ],
  },
  {
    id: 4,
    title: 'Foto Kedua Kita',
    emoji: '📸',
    accent: '#ffd9e3',
    doodles: ['heart', 'star', 'smiley'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Aku masih inget hari itu. Ini foto kedua kalinya kita ketemu.',
      },
      {
        type: 'photo',
        src: '/photos/foto-kedua-kali.jpg',
        caption: 'kedua kalinya kita meet 🤍',
        alt: 'Foto kenangan pertemuan kedua',
      },
      {
        type: 'curhat',
        text: 'Rasanya seneng banget, jujur. Aku ngerasa dihargain pas pertama kali ketemu kamu — dan yang kedua kalinya juga.',
      },
      {
        type: 'curhat',
        text: 'Terus aku seneng banget pas tau kalau aku cowok pertama yang kamu bawa ke rumah. Itu rasanya istimewa banget.',
      },
    ],
  },
  ...Array.from({ length: TOTAL_PAGES - 4 }, (_, index) => emptyPage(index + 5)),
]

export function getPage(id: number): NotebookPage | undefined {
  return pages.find((page) => page.id === id)
}
