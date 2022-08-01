// en este fichero limitamos lo que nosotros poremos introducir en la base de datos
// y que no podamos meter cualquier cosa en cualquier elemento
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiaryEntry{
  id: number
  date: String
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
