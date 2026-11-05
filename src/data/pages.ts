import type { NotebookPage } from '../types'

export const TOTAL_PAGES = 18

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
        src: 'photos/foto-kedua-kali.jpg',
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
        src: 'photos/foto-gelang.jpg',
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
        src: 'photos/foto-title-global.jpg',
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
  {
    id: 9,
    title: 'Kalau Kamu Mau Bahagia',
    emoji: '🤍',
    accent: '#ffd9e3',
    doodles: ['heart', 'cloud', 'squiggle'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Wid, kalau kamu mau mulai hubungan baru sama orang lain, silakan.',
      },
      {
        type: 'curhat',
        text: 'Sekarang udah banyak pria yang deket sama kamu. Tinggal kamu buka hati. Nggak semua cowok brengsek kayak aku.',
      },
      {
        type: 'curhat',
        text: 'Kali aja setelah sama aku, kamu bisa bahagia terus sama cowok barumu. Udah banyak yang kita pelajarin selama dua tahun ini.',
      },
      {
        type: 'curhat',
        text: 'Aku juga lagi belajar ikhlas buat lihat kamu nanti post sama cowok baru. Kemarin kamu sempat ganti PP, terus post dua foto — walaupun akhirnya satu kamu hapus. Aku tahu kamu lagi deket sama cowok, mungkin ada cowok yang bikin kamu penasaran, kayak dulu kamu bikin aku penasaran. Atau mungkin kamu baru save nomor cowok, Wid.'
      },
      {
        type: 'quote',
        text: 'Jujur, aku ikhlas banget kok. Beneran.',
      },
    ],
  },
  {
    id: 10,
    title: 'Andai Masih Ada Kesempatan',
    emoji: '🕯️',
    accent: '#e5ddff',
    doodles: ['moon', 'heart', 'arrow'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Selama beberapa hari ini aku nyesel atas apa yang aku lakuin ke kamu dulu.',
      },
      {
        type: 'curhat',
        text: 'Andai aku masih punya kesempatan, aku bakal selalu berharap kesempatan itu datang lagi. Padahal udah banyak kesempatan yang kamu kasih ke aku.',
      },
      {
        type: 'curhat',
        text: 'Tapi kalau kesempatan itu masih ada, aku bakal berubah dengan sungguh-sungguh. Aku bakal selalu ada buat kamu.',
      },
      {
        type: 'curhat',
        text: 'Pas terakhir kita putus, aku juga nyesel. Padahal waktu itu aku nggak bisa nemenin kamu, tapi aku malah bersikap begitu. Rasanya aku mau nangis kalau inget.',
      },
      {
        type: 'curhat',
        text: 'Aku selalu berdoa, andai aku dikasih kesempatan, aku mau memperbaiki semuanya. Tapi aku sadar, kamu mungkin nggak bakal kasih aku kesempatan lagi. Aku bahkan masih beresin masalah yang sebelumnya, dan semuanya tetap berjalan sampai sekarang.',
      },
      {
        type: 'quote',
        text: 'Wid, semisalnya aku diberi kesempatan, walaupun aku harus diumpetin, aku nggak masalah. Asal aku masih bisa sama kamu.',
      },
    ],
  },
  {
    id: 11,
    title: 'Andai Waktu Bisa Berhenti',
    emoji: '⏳',
    accent: '#cde9ff',
    doodles: ['moon', 'heart', 'cloud'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Andai waktu bisa berhenti, aku bakal minta berhenti di saat pertama kali meet sama kamu.',
      },
      {
        type: 'curhat',
        text: 'Di sana rasanya aku bangga banget, senang banget. Semua perasaan campur aduk jadi satu.',
      },
      {
        type: 'curhat',
        text: 'Pas pertama kali jemput kamu ke rumah, kamu wangi. Sangat wangi. Sampai sekarang aku masih inget wangi itu, dan kadang pengin menciumnya lagi.',
      },
      {
        type: 'quote',
        text: 'Setiap kali inget wangi itu, rasanya hatiku jadi tenang banget.',
      },
    ],
  },
  {
    id: 12,
    title: 'Maaf untuk Semua yang Telah Terjadi',
    emoji: '🤍',
    accent: '#ffd9e3',
    doodles: ['heart', 'cloud', 'squiggle'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Maaf ya, Wid. Untuk semua yang udah terjadi.',
      },
      {
        type: 'curhat',
        text: 'Aku tahu, banyak hubungan yang rusak selama ini karena aku. Waktu sama kamu pun, aku masih jadi orang yang sama — banyak salahnya, banyak kurangnya.',
      },
      {
        type: 'curhat',
        text: 'Makasih udah bikin aku sadar. Dari kamu, aku jadi ngerti kalau aku harus beresin diri dan memperbaiki hidupku.',
      },
      {
        type: 'quote',
        text: 'Aku nggak bisa balikin semua yang rusak, tapi aku masih bisa mulai beresin diri.',
      },
    ],
  },
  {
    id: 13,
    title: 'Terima Kasih Pernah Ada',
    emoji: '🌈',
    accent: '#fff1c9',
    doodles: ['star', 'heart', 'smiley'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Karena kamu pernah ada di hidupku, hidupku jadi jauh lebih berwarna.',
      },
      {
        type: 'curhat',
        text: 'Bahkan waktu sama kamu, aku bisa lupain semua mantanku. Rasanya fokusku cuma kamu, dan itu bikin aku bahagia banget.',
      },
      {
        type: 'curhat',
        text: 'Makasih ya, pernah jadi bagian paling hangat di hidupku. Aku mungkin nggak selalu bisa menjaganya, tapi aku nggak akan lupa rasanya.',
      },
      {
        type: 'quote',
        text: 'Kamu itu jantungku, Wid. Hehehe.',
      },
    ],
  },
  {
    id: 14,
    title: 'Kalau Suatu Saat Kita Bertemu',
    emoji: '🕊️',
    accent: '#cde9ff',
    doodles: ['moon', 'cloud', 'arrow'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Kalau suatu saat kita bertemu lagi, aku cuma mau bilang makasih banyak.',
      },
      {
        type: 'curhat',
        text: 'Makasih atas semua yang pernah kamu kasih ke aku. Aku bakal jalanin hidup ini dengan lebih serius dan lebih menghargai semuanya.',
      },
      {
        type: 'curhat',
        text: 'Aku mau menganggap ini kesempatan terakhirku buat memperbaiki hidup, supaya nanti nggak terus-terusan punya penyesalan.',
      },
      {
        type: 'quote',
        text: 'Kalau nanti kita cuma jadi dua orang yang pernah saling kenal, semoga kamu tetap ingat: aku pernah benar-benar berterima kasih karena pernah bertemu kamu.',
      },
    ],
  },
  {
    id: 15,
    title: 'Aku Harap Kamu Bahagia',
    emoji: '🪽',
    accent: '#e5ddff',
    doodles: ['heart', 'flower', 'cloud'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Mulailah lembaran baru lagi sama seseorang yang bisa bikin kamu bahagia.',
      },
      {
        type: 'curhat',
        text: 'Aku tahu, aku udah nggak pantas lagi buat kamu. Walaupun aku masih mau, kamu juga mungkin nggak bakal pernah nerima aku lagi.',
      },
      {
        type: 'curhat',
        text: 'Jujur, rasanya aku rela ngelakuin apa aja asal kamu bisa balik ke aku. Tapi aku nggak bisa maksa perasaan orang lain.',
      },
      {
        type: 'curhat',
        text: 'Jadi hiduplah, terbanglah. Walaupun nanti kamu sama yang lain, aku ikhlas. Sebentar lagi mungkin kamu bakal jadian sama cowok baru — semoga dia bisa jaga kamu.',
      },
      {
        type: 'quote',
        text: 'Aku harap kamu bahagia, walaupun bahagianya bukan lagi sama aku. Hehe.',
      },
    ],
  },
  {
    id: 16,
    title: '.....',
    emoji: '🌫️',
    accent: '#e5ddff',
    doodles: ['cloud', 'squiggle', 'moon'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Aku nggak tahu, Wid.',
      },
      {
        type: 'curhat',
        text: 'Rasanya aku nyesel pernah mencintai seseorang sedalam itu. Tapi aku juga nyesel kenapa dulu aku mencintai sedalam itu kalau akhirnya aku sendiri yang ngerusak semuanya.',
      },
      {
        type: 'quote',
        text: 'Aku punya cinta yang besar, tapi lupa kalau cinta juga harus dijaga.',
      },
    ],
  },
  {
    id: 17,
    title: 'Halaman Terakhir dan Selamat Tinggal',
    emoji: '✉️',
    accent: '#fff1c9',
    doodles: ['heart', 'moon', 'star'],
    status: 'ready',
    blocks: [
      {
        type: 'note',
        text: 'Ini pesan terakhirku, Wid.',
      },
      {
        type: 'curhat',
        text: 'Makasih udah bikin aku belajar tentang arti cinta, setia, hubungan, dan hidup. Semua itu aku pelajari dari kamu.',
      },
      {
        type: 'curhat',
        text: 'Kamu first experience yang pernah bikin aku bahagia banget. Kalau suatu saat kamu udah nggak punya siapa-siapa lagi, aku bakal selalu nerima kamu.',
      },
      {
        type: 'curhat',
        text: 'Di hatiku ada satu slot yang nggak bisa digantikan: kamu. Tapi sekarang, mulailah lembaran baru sama cowok baru. Jangan takut kalau nanti disakitin lagi — mungkin cowok barumu nggak begituuuu.',
      },
      {
        type: 'curhat',
        text: 'Saat kamu baca semua ini, mungkin aku udah benar-benar pergi dari hidupmu. WhatsApp-ku mungkin cuma ceklis satu. Kalau mau hubungin aku, kamu bisa pakai nomor mamahmu — nomor itu masih kupin, walaupun sekarang diblokir. Heeh.',
      },
      {
        type: 'quote',
        text: 'I love you, Wid. See you. Maaf atas semua yang terjadi.',
      },
    ],
  },
  {
    id: 18,
    title: 'Kamu Mau Balikan Sama Aku?',
    emoji: '😌',
    accent: '#ffd9e3',
    doodles: ['heart', 'smiley', 'squiggle'],
    status: 'ready',
    blocks: [
      {
        type: 'question',
        prompt: 'Kamu mau balikan sama aku?',
        noLabel: 'No',
        response: 'Aku udah tahu jawabannya, makanya tombol yes aku hilangin 😌',
      },
      {
        type: 'note',
        text: 'by ryzen — semua ini dibuat oleh cinta terakhirku 🤍',
      },
    ],
  },
]

export function getPage(id: number): NotebookPage | undefined {
  return pages.find((page) => page.id === id)
}
