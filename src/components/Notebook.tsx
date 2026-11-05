import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { getPage, pages, TOTAL_PAGES } from '../data/pages'
import type { PageBlock } from '../types'
import { readJSON, writeJSON } from '../lib/storage'
import Doodles from './Doodles'
import PlaylistBlock from './PlaylistBlock'
import CalendarBlock from './CalendarBlock'

const LAST_PAGE_KEY = 'lastPage'

const BLOCK_META: Record<PageBlock['type'], { icon: string; label: string }> = {
  note: { icon: '📝', label: 'Catatan kecil' },
  joke: { icon: '😆', label: 'Bercanda dikit' },
  quote: { icon: '✨', label: '' },
  list: { icon: '⭐', label: '' },
  fact: { icon: '📅', label: '' },
  couple: { icon: '💞', label: '' },
  stamp: { icon: '', label: '' },
  playlist: { icon: '🎧', label: '' },
  curhat: { icon: '🌧️', label: '' },
  photo: { icon: '', label: '' },
  calendar: { icon: '', label: '' },
  chat: { icon: '', label: '' },
  emptylines: { icon: '', label: '' },
}

function Tape({ color, side }: { color: string; side: 'left' | 'right' }) {
  return (
    <div
      className={`sheet-corner ${side}`}
      style={{ background: `linear-gradient(90deg, ${color}cc, ${color}66)`, clipPath: 'polygon(2% 0, 98% 8%, 100% 100%, 0 92%)' }}
      aria-hidden="true"
    />
  )
}

function Block({ block }: { block: PageBlock }) {
  const meta = BLOCK_META[block.type]

  if (block.type === 'playlist') {
    return <PlaylistBlock title={block.title} subtitle={block.subtitle} />
  }

  if (block.type === 'curhat') {
    return (
      <div className="block-curhat my-4 px-4 py-3">
        <p className="font-hand text-[1.2rem] leading-relaxed text-ink">{block.text}</p>
      </div>
    )
  }

  if (block.type === 'calendar') {
    return (
      <CalendarBlock monthLabel={block.monthLabel} days={block.days} marked={block.marked} startDay={block.startDay} />
    )
  }

  if (block.type === 'chat') {
    return (
      <div className="my-5">
        <div className="chat-bubble">
          <p className="font-hand text-xl text-ink">{block.text}</p>
        </div>
        <p className="mt-1.5 pl-2 font-hand text-xs text-inksoft/80">{block.date}</p>
      </div>
    )
  }

  if (block.type === 'emptylines') {
    return (
      <div className="emptylines my-5">
        <div className="space-y-3">
          <span className="block h-px w-3/4 bg-ink/15" />
          <span className="block h-px w-2/3 bg-ink/10" />
          <span className="block h-px w-1/2 bg-ink/8" />
          <span className="block h-px w-1/3 bg-ink/5" />
        </div>
        <p className="mt-3 font-hand text-base text-inksoft/80 italic">{block.label}</p>
      </div>
    )
  }

  if (block.type === 'photo') {
    return (
      <figure className="block-photo my-6">
        <img src={block.src} alt={block.alt ?? block.caption ?? 'Foto kenangan'} loading="lazy" />
        {block.caption ? <figcaption className="font-hand text-lg text-inksoft">{block.caption}</figcaption> : null}
      </figure>
    )
  }

  if (block.type === 'stamp') {
    return (
      <div className="my-5 flex justify-center">
        <div className="block-stamp -rotate-6 px-6 py-2 text-center">
          <p className="font-hand text-xl leading-none text-rose">{block.text}</p>
          {block.sub ? <p className="mt-1 font-hand text-sm text-rose/80">{block.sub}</p> : null}
        </div>
      </div>
    )
  }

  if (block.type === 'couple') {
    return (
      <div className="my-5 flex items-center justify-center gap-3 text-center">
        <p className="font-hand text-2xl text-ink sm:text-3xl">{block.left}</p>
        <span className="text-3xl text-rose" aria-label="dan">❣️</span>
        <p className="font-hand text-2xl text-ink sm:text-3xl">{block.right}</p>
      </div>
    )
  }

  if (block.type === 'quote') {
    return (
      <div className="block-quote my-5 px-4 py-3">
        <p className="font-scribble text-2xl leading-snug text-ink italic sm:text-3xl">“{block.text}”</p>
        {block.author ? <p className="mt-1 font-hand text-sm text-inksoft">— {block.author}</p> : null}
      </div>
    )
  }

  if (block.type === 'fact') {
    return (
      <div className="block-fact my-4 px-4 py-3 text-center">
        <p className="text-[11px] tracking-[0.28em] text-inksoft uppercase">{block.label}</p>
        <p className="mt-1 font-hand text-2xl text-ink">{block.value}</p>
      </div>
    )
  }

  if (block.type === 'list') {
    return (
      <div className="block-list my-4 px-4 py-3">
        <p className="mb-2 flex items-center gap-2 font-hand text-lg text-ink">{meta.icon} {block.title}</p>
        <ul className="space-y-1.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-2 font-hand text-[1.05rem] leading-snug text-ink/90">
              <span aria-hidden="true">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const className = block.type === 'note' ? 'block-note' : block.type === 'joke' ? 'block-joke' : 'block-note'

  return (
    <div className={`${className} my-4 px-4 py-3`}>
      <p className="mb-1 flex items-center gap-2 text-[11px] tracking-[0.22em] text-inksoft uppercase">
        <span aria-hidden="true">{meta.icon}</span> {meta.label}
      </p>
      <p className="font-hand text-[1.15rem] leading-snug text-ink">{block.text}</p>
    </div>
  )
}

function EmptyPage({ id }: { id: number }) {
  return (
    <div className="empty-page">
      <p className="scribble">halaman ini masih kosong…</p>
      <p className="mt-4 font-hand text-xl text-inksoft">
        Kasihan ya, dia masih menunggu giliran diisi. <span className="whitespace-nowrap">😢</span>
      </p>
      <p className="mt-2 font-hand text-base text-inksoft/80">
        (Halaman {id} dari {TOTAL_PAGES} — sebentar lagi ada yang nulis di sini, janji.)
      </p>
    </div>
  )
}

export default function Notebook() {
  const [pageId, setPageId] = useState(() => readJSON(LAST_PAGE_KEY, 1))
  const [direction, setDirection] = useState(0)

  const page = getPage(pageId) ?? pages[0]

  useEffect(() => {
    writeJSON(LAST_PAGE_KEY, pageId)
  }, [pageId])

  const goTo = useCallback(
    (target: number) => {
      const clamped = Math.min(TOTAL_PAGES, Math.max(1, target))
      if (clamped === pageId) return
      setDirection(clamped > pageId ? 1 : -1)
      setPageId(clamped)
    },
    [pageId],
  )

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goTo(pageId + 1)
      if (event.key === 'ArrowLeft') goTo(pageId - 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goTo, pageId])

  return (
    <main className="notebook">
      <header className="pt-2 text-center">
        <h1 className="font-scribble text-4xl font-bold text-ink sm:text-5xl">
          Corat-Coret <span className="inline-block -rotate-6" aria-hidden="true">✎</span>
        </h1>
        <p className="mt-1 font-hand text-lg text-inksoft">
          Buku catatan {TOTAL_PAGES} halaman. Sebagian lucu, sebagian curhat, semuanya asli.
        </p>
      </header>

      <div className="flex w-full max-w-2xl items-center justify-between gap-3">
        <button type="button" className="nav-arrow" onClick={() => goTo(pageId - 1)} disabled={pageId <= 1} aria-label="Halaman sebelumnya">
          <ArrowLeft size={19} />
        </button>
        <div className="flex flex-col items-center gap-2">
          <p className="font-hand text-lg text-ink">
            Halaman <span className="text-rose">{pageId}</span> / {TOTAL_PAGES}
          </p>
          <div className="flex max-w-[46vw] flex-wrap justify-center gap-1.5 sm:max-w-md">
            {pages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className={`page-dot ${item.id === pageId ? 'active' : ''} ${item.status === 'ready' ? 'filled' : ''}`}
                aria-label={`Ke halaman ${item.id}`}
              />
            ))}
          </div>
        </div>
        <button type="button" className="nav-arrow" onClick={() => goTo(pageId + 1)} disabled={pageId >= TOTAL_PAGES} aria-label="Halaman berikutnya">
          <ArrowRight size={19} />
        </button>
      </div>

      <div className="flip-viewport">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={page.id}
            initial={{ opacity: 0, rotateY: direction * 70, scale: 0.98 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: direction * -70, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <article className="sheet" style={{ background: `repeating-linear-gradient(0deg, transparent 0 31px, rgba(90,78,130,0.09) 31px 32px), linear-gradient(180deg, ${page.accent}55, #fffdf6 26%, #fbf6ec)` }}>
              <Tape color={page.accent} side="left" />
              <Tape color={page.accent} side="right" />
              <div className="spiral" aria-hidden="true" />
              <Doodles keys={page.doodles} />

              <div className="relative z-10">
                {page.status === 'kosong' ? (
                  <EmptyPage id={page.id} />
                ) : (
                  <>
                    <p className="text-center text-[11px] tracking-[0.35em] text-inksoft uppercase">
                      Halaman {page.id}
                    </p>
                    <h2 className="mt-2 text-center font-scribble text-4xl font-bold text-ink sm:text-5xl">
                      {page.title} <span aria-hidden="true">{page.emoji}</span>
                    </h2>
                    <div className="mx-auto mt-1 h-[3px] w-24 rounded-full" style={{ background: page.accent }} aria-hidden="true" />
                    <div className="mx-auto mt-4 max-w-lg">
                      {page.blocks.map((block, index) => (
                        <Block key={index} block={block} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="pb-2 text-center">
        <p className="font-hand text-sm text-inksoft/90">
          Geser halaman pakai tombol panah, atau tekan <kbd className="rounded border border-ink/20 bg-white/60 px-1.5">←</kbd>{' '}
          <kbd className="rounded border border-ink/20 bg-white/60 px-1.5">→</kbd> di keyboard.
        </p>
      </footer>
    </main>
  )
}
