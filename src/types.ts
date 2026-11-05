export type BlockType = 'note' | 'joke' | 'quote' | 'list' | 'fact' | 'couple' | 'stamp' | 'playlist' | 'curhat' | 'photo'

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
