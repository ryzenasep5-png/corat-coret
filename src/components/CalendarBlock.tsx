import type { CalendarMark } from '../types'

const WEEKDAYS = ['Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb', 'Mg']

function RingCircle() {
  return (
    <svg
      className="pointer-events-none absolute -inset-1.5 h-[calc(100%+12px)] w-[calc(100%+12px)]"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="20"
        cy="20"
        rx="17"
        ry="14.5"
        stroke="#e27396"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="4 5"
        transform="rotate(-8 20 20)"
      />
    </svg>
  )
}

function HeartMark() {
  return (
    <svg className="absolute -top-1.5 right-0 h-4 w-4" viewBox="0 0 24 24" fill="#ff9db4" aria-hidden="true">
      <path d="M12 20.5S3 14.6 3 8.9C3 5.9 5.3 3.8 8 3.8c1.8 0 3.3 0.9 4 2.3 0.7-1.4 2.2-2.3 4-2.3 2.7 0 5 2.1 5 5.1 0 5.7-9 11.6-9 11.6Z" />
    </svg>
  )
}

export default function CalendarBlock({
  monthLabel,
  days,
  marked,
}: {
  monthLabel: string
  days: number
  marked: CalendarMark[]
}) {
  const marksByDay = new Map(marked.map((mark) => [mark.day, mark]))

  return (
    <div className="block-calendar my-6">
      <div className="flex items-center justify-between px-1">
        <p className="font-scribble text-2xl font-bold text-ink">{monthLabel}</p>
        <span className="text-lg" aria-hidden="true">🗓️</span>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((day) => (
          <p key={day} className="py-1 font-hand text-xs text-inksoft/80">{day}</p>
        ))}
        {Array.from({ length: days }, (_, index) => index + 1).map((day) => {
          const mark = marksByDay.get(day)
          return (
            <div
              key={day}
              className={`cal-cell relative flex aspect-square flex-col items-center justify-center rounded-lg font-hand text-base ${
                mark ? 'bg-blush/80 text-rose' : 'text-ink/80'
              }`}
            >
              {mark?.style === 'ring' ? <RingCircle /> : null}
              {mark?.style === 'heart' ? <HeartMark /> : null}
              <span className={mark?.style === 'ring' ? 'font-bold' : ''}>{day}</span>
              {mark ? <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-hand text-[9px] whitespace-nowrap text-rose">{mark.label}</span> : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}
