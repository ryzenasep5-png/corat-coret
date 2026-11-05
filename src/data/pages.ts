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
  {
    id: 5,
    title: 'Kalender Dia',
    emoji: '🎂',
    accent: '#fff1c9',
    doodles: ['heart', 'star', 'smiley'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Ada satu tanggal yang nggak pernah kukelewat nulis: 01 Februari.',
      },
      {
        type: 'calendar',
        monthLabel: 'Februari 2027',
        days: 28,
        startDay: 0,
        marked: [
          { day: 1, label: 'ulang tahun dia 🎂', style: 'ring' },
          { day: 14, label: 'valentine 💘', style: 'heart' },
        ],
      },
      {
        type: 'quote',
        text: 'Ada tanggal yang nggak perlu diingatkan. Dia cukup ditandain lingkaran di kalender — biar semua orang tahu hari itu spesial.',
      },
    ],
  },
  {
    id: 6,
    title: 'Gelangnya Lucu Ya',
    emoji: '🤍',
    accent: '#e5ddff',
    doodles: ['heart', 'squiggle', 'smiley'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Gelangnya lucu ya? Kamu masih simpen nggak?',
      },
      {
        type: 'photo',
        src: '/photos/foto-gelang.jpg',
        caption: 'masih kusimpen 🤍',
        alt: 'Foto gelang kenangan yang sudah polos hitam',
      },
      {
        type: 'curhat',
        text: 'Aku masih nyimpen. Walaupun stikernya udah nggak ada — sekarang cuma polos item, karena sering banget kupake.',
      },
      {
        type: 'joke',
        text: 'Saking sering kupake, stikernya sampai menyerah duluan. Maaf ya, gelang. Kamu terlalu sayang buat cuma duduk manis di laci.',
      },
      {
        type: 'quote',
        text: 'Ada benda kecil yang jadi saksi: dipakai terus setiap hari, bukan disimpan rapi di dalam laci.',
      },
    ],
  },
  {
    id: 7,
    title: 'Title Global Pertama',
    emoji: '🏆',
    accent: '#fff1c9',
    doodles: ['star', 'arrow', 'smiley'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Aku masih inget pas pertama kali kamu dapet title global. Aku seneng banget, hehe.',
      },
      {
        type: 'photo',
        src: '/photos/foto-title-global.jpg',
        caption: 'title global pertamanya dia 🏆',
        alt: 'Foto momen title global pertama',
      },
      {
        type: 'curhat',
        text: 'Rasanya hatiku tenang banget. Kayak semua jerih payah kamu akhirnya kebayar — dan aku ikut ngerasain senengnya.',
      },
      {
        type: 'joke',
        text: 'Aku nggak ikut main, tapi rasanya ikut menang. Dari bangku penonton: kamu keren banget, dan sekarang semua orang tahu.',
      },
      {
        type: 'quote',
        text: 'Saat kamu menang, hatiku ikut tenang — seolah bagian kecil dari aku juga dihargai dunia.',
      },
    ],
  },
  {
    id: 8,
    title: '3 Mei 2026',
    emoji: '🕊️',
    accent: '#e5ddff',
    doodles: ['cloud', 'moon', 'squiggle'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: '3 Mei 2026. Catatan terakhir kamu yang masih bisa kubaca.',
      },
      {
        type: 'chat',
        text: '…',
        date: '3 Mei 2026',
      },
      {
        type: 'emptylines',
        label: 'setelah itu…',
      },
      {
        type: 'quote',
        text: '685 hari. Andai kita nggak pernah putus, itu yang bakal kita rasain sekarang, Wid.',
      },
      {
        type: 'curhat',
        text: 'Kosong. Nggak ada apa-apa lagi. :)',
      },
    ],
  },
  ...Array.from({ length: TOTAL_PAGES - 8 }, (_, index) => emptyPage(index + 9)),
]

export function getPage(id: number): NotebookPage | undefined {
  return pages.find((page) => page.id === id)
}
