//en este fichero limitamos lo que nosotros poremos introducir en la base de datos
//y que no podamos meter cualquier cosa en cualquier elemento

export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface diaryEntry{
  id: number,
  date: String,
  weather: Weather, 
  visibility: Visibility,
  comment: string
}
