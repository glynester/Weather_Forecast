import axios from 'axios';

// const API_KEY = process.env.REACT_APP_API_KEY; // Doesn't work
import {REACT_APP_API_KEY} from '../../.env'; // Fudged because env variables not working.
const API_KEY = REACT_APP_API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);  // Behaves like jquery's ajax method. This returns a promise. 
  console.log('Request:', request);   // Request: Promise { <state>: "pending" }
  // We're returning the promise as the payload.
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

// action creators always have to return an action. And an action is an object which always, always, always has to have a type.


// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}