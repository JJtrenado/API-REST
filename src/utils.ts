import { NewDiaryEntry, Weather, Visibility } from './types'

// parseamos y validamos todos los datos (esto sirve para que no metan datos incorrectos desde fuera)

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const parseVisibility = (VisibilityFromRequest: any): Visibility => {
  if (!isString('VisibilityFromRequest') || !isVisibility('VisibilityFromRequest')) {
    throw new Error('Incorrect or missing visibility')
  }
  return VisibilityFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)

  }

  return newEntry
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

export default toNewDiaryEntry
