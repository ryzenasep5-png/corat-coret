export type BlockType = 'note' | 'joke' | 'quote' | 'list' | 'fact' | 'couple'

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

export type PageBlock = NoteBlock | JokeBlock | QuoteBlock | ListBlock | FactBlock | CoupleBlock

export type DoodleKey = 'heart' | 'star' | 'moon' | 'smiley' | 'squiggle' | 'arrow' | 'flower' | 'cloud'

export interface NotebookPage {
  id: number
  title: string
  emoji: string
  accent: string
  doodles: DoodleKey[]
  status: 'ready' | 'kosong'
  blocks: PageBlock[]
}
