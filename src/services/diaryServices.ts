import { diaryEntry } from '../types'
import diaryData from './diaries.json' // para que esto funcione tenemos que añadir en tsconfij.json: "resolveJsonModule": true,

const diaries: diaryEntry[] = diaryData as diaryEntry[]

export const getEntries = (): diaryEntry[] => diaries

export const addEntriy = (): undefined => undefined
