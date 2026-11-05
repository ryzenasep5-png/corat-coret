const PREFIX = 'corat-coret'

export function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(`${PREFIX}:${key}`)
    if (raw === null) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function writeJSON<T>(key: string, value: T): boolean {
  try {
    const serialized = JSON.stringify(value)
    if (serialized === undefined) return false
    window.localStorage.setItem(`${PREFIX}:${key}`, serialized)
    return true
  } catch {
    return false
  }
}
