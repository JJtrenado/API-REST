"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// parseamos y validamos todos los datos (esto sirve para que no metan datos incorrectos desde fuera)
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const parseVisibility = (VisibilityFromRequest) => {
    if (!isString('VisibilityFromRequest') || !isVisibility('VisibilityFromRequest')) {
        throw new Error('Incorrect or missing visibility');
    }
    return VisibilityFromRequest;
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
exports.default = toNewDiaryEntry;
