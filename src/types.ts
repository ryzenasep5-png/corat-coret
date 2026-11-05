export type BlockType = 'note' | 'joke' | 'quote' | 'list' | 'fact' | 'couple' | 'stamp' | 'playlist' | 'curhat' | 'photo' | 'calendar' | 'chat' | 'emptylines' | 'question'

export interface NoteBlock {
  type: 'note'
  text: string
}

export interface JokeBlock {
  type: 'joke'
  text: string
}

export interface QuoteBlock {
  type: 'quote'
  text: string
  author?: string
}

export interface ListBlock {
  type: 'list'
  title: string
  items: string[]
}

export interface FactBlock {
  type: 'fact'
  label: string
  value: string
}

export interface CoupleBlock {
  type: 'couple'
  left: string
  right: string
}

export interface StampBlock {
  type: 'stamp'
  text: string
  sub?: string
}

export interface PlaylistBlock {
  type: 'playlist'
  title: string
  subtitle?: string
}

export interface CurhatBlock {
  type: 'curhat'
  text: string
}

export interface PhotoBlock {
  type: 'photo'
  src: string
  caption?: string
  alt?: string
}

export interface CalendarMark {
  day: number
  label: string
  style: 'ring' | 'heart'
}

export interface CalendarBlock {
  type: 'calendar'
  monthLabel: string
  days: number
  marked: CalendarMark[]
  startDay?: number
}

export interface ChatBlock {
  type: 'chat'
  text: string
  date: string
}

export interface EmptyLinesBlock {
  type: 'emptylines'
  label: string
}

export interface QuestionBlock {
  type: 'question'
  prompt: string
  noLabel: string
  response: string
}

export type PageBlock =
  | NoteBlock
  | JokeBlock
  | QuoteBlock
  | ListBlock
  | FactBlock
  | CoupleBlock
  | StampBlock
  | PlaylistBlock
  | CurhatBlock
  | PhotoBlock
  | CalendarBlock
  | ChatBlock
  | EmptyLinesBlock
  | QuestionBlock

export type DoodleKey = 'heart' | 'star' | 'moon' | 'smiley' | 'squiggle' | 'arrow' | 'flower' | 'cloud' | 'couple'

export interface NotebookPage {
  id: number
  title: string
  emoji: string
  accent: string
  doodles: DoodleKey[]
  status: 'ready' | 'kosong'
  blocks: PageBlock[]
}
