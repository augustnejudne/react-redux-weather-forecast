import axios from 'axios';
const API_KEY = '819e49a9e6d3e1f6d89b6b09f2b00b9f';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},ph`;
  const response = axios.get(URL);
  return {
    type: FETCH_WEATHER,
    payload: response
  };
}