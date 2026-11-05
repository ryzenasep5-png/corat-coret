import type { DoodleKey } from '../types'

type DoodleProps = {
  className?: string
}

function HeartDoodle({ className = '' }: DoodleProps) {
  return (
    <svg width="46" height="44" viewBox="0 0 46 44" className={className}>
      <path
        d="M23 39S4 27.5 4 15.4C4 9 8.8 4.6 14.6 4.6c3.6 0 6.7 1.9 8.4 4.7 1.7-2.8 4.8-4.7 8.4-4.7C37.2 4.6 42 9 42 15.4 42 27.5 23 39 23 39Z"
        fill="#ff9db4"
        stroke="#e27396"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M13 20.5c1.6-2.6 4-3.4 6-2.2" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}

function StarDoodle({ className = '' }: DoodleProps) {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" className={className}>
      <path
        d="M22 6l3.6 9.2 9.9 0.6-7.6 6.4 2.5 9.6-8.4-5.4-8.4 5.4 2.5-9.6-7.6-6.4 9.9-0.6Z"
        fill="#ffe08a"
        stroke="#d9a13f"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="28.5" cy="27.5" r="1.6" fill="#3b3550" />
      <path d="M22 31c-2 0-3.5 1.2-4.2 2.8" fill="none" stroke="#d9a13f" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function MoonDoodle({ className = '' }: DoodleProps) {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" className={className}>
      <path d="M28 6a19 19 0 1 0 12 33.4A16 16 0 0 1 28 6Z" fill="#cde9ff" stroke="#7ba7cc" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M10 32c1.3 1 2.9 1.5 4.6 1.5M15 12.5c0.9 1.4 2.4 2.3 4 2.3" fill="none" stroke="#7ba7cc" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function SmileyDoodle({ className = '' }: DoodleProps) {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" className={className}>
      <circle cx="23" cy="23" r="19" fill="#fff1c9" stroke="#d9a13f" strokeWidth="2.4" />
      <circle cx="16.4" cy="19" r="2.4" fill="#3b3550" />
      <circle cx="29.6" cy="19" r="2.4" fill="#3b3550" />
      <path d="M15.5 28.5c2.3 3.4 5.4 5 7.5 5s5.2-1.6 7.5-5" fill="none" stroke="#3b3550" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="12.5" cy="12.5" r="3.2" fill="#ff9db4" opacity="0.85" />
    </svg>
  )
}

function SquiggleDoodle({ className = '' }: DoodleProps) {
  return (
    <svg width="70" height="24" viewBox="0 0 70 24" className={className}>
      <path d="M3 14c6-9 12 9 18 0s12 9 18 0 12 9 18 0 6-6 10-3" fill="none" stroke="#8f84a8" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function ArrowDoodle({ className = '' }: DoodleProps) {
  return (
    <svg width="74" height="46" viewBox="0 0 74 46" className={className}>
      <path d="M6 8c22 10 38 10 56 0" fill="none" stroke="#e27396" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M52 1.5c0 4 5 5.5 9 6.5M52 14.5c0-4 5-5.5 9-6.5" fill="none" stroke="#e27396" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function FlowerDoodle({ className = '' }: DoodleProps) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className={className}>
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse key={angle} cx="24" cy="15" rx="6.5" ry="10.5" fill="#ffd9e3" stroke="#e27396" strokeWidth="2" transform={`rotate(${angle} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="5.5" fill="#ffe08a" stroke="#d9a13f" strokeWidth="2" />
    </svg>
  )
}

function CloudDoodle({ className = '' }: DoodleProps) {
  return (
    <svg width="60" height="38" viewBox="0 0 60 38" className={className}>
      <path d="M15 32a9.5 9.5 0 0 1-1.2-18.9A13 13 0 0 1 39 11a11 11 0 0 1 7 20H15Z" fill="#e8f4ff" stroke="#7ba7cc" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M22 27c1.4 1 3 1.5 4.7 1.5M29 18c1 .9 2.2 1.4 3.5 1.4" fill="none" stroke="#7ba7cc" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

const DOODLE_MAP: Record<DoodleKey, (props: DoodleProps) => React.JSX.Element> = {
  heart: HeartDoodle,
  star: StarDoodle,
  moon: MoonDoodle,
  smiley: SmileyDoodle,
  squiggle: SquiggleDoodle,
  arrow: ArrowDoodle,
  flower: FlowerDoodle,
  cloud: CloudDoodle,
}

const SPOTS: Record<DoodleKey, { left: string; top: string; rotate: number; anim: 'doodle-wiggle' | 'doodle-float' }> = {
  heart: { left: '-4%', top: '6%', rotate: -14, anim: 'doodle-wiggle' },
  star: { left: '6%', top: '-3%', rotate: 12, anim: 'doodle-float' },
  moon: { left: '78%', top: '-4%', rotate: -10, anim: 'doodle-wiggle' },
  smiley: { left: '74%', top: '8%', rotate: 8, anim: 'doodle-float' },
  squiggle: { left: '10%', top: '-2.5%', rotate: -3, anim: 'doodle-wiggle' },
  arrow: { left: '60%', top: '-3%', rotate: 16, anim: 'doodle-float' },
  flower: { left: '-3%', top: '12%', rotate: -12, anim: 'doodle-wiggle' },
  cloud: { left: '70%', top: '4%', rotate: -6, anim: 'doodle-float' },
}

export default function Doodles({ keys }: { keys: DoodleKey[] }) {
  const picked = keys.slice(0, 4)
  return (
    <>
      {picked.map((key, index) => {
        const Doodle = DOODLE_MAP[key]
        const spot = SPOTS[key]
        return (
          <div
            key={`${key}-${index}`}
            className={`doodle ${spot.anim}`}
            style={{ left: spot.left, top: spot.top, transform: `rotate(${spot.rotate}deg)`, animationDelay: `${index * 0.7}s` }}
          >
            <Doodle />
          </div>
        )
      })}
    </>
  )
}
