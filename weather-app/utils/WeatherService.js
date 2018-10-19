import { KEY } from './WeatherKey';

const WEATHER_API = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_IMG_URL = 'http://openweathermap.org/img/w';

function fetchCurrentWeather(city) {
  const URL = `${WEATHER_API}/weather?q=${city}&units=metric&appid=${KEY}`;
  return new Promise((resolve, reject) => {
    fetch(URL).then(function(response) {
      return response.json();
    }).then(function(json) {
      resolve({
        description: json.weather[0].description,
        temperature: json.main.temp
      });
    }).catch(error => reject(error));
  });
}

class WeatherService {

  findCurrentWeather(city) {
    return fetchCurrentWeather(city);
  }

}

const weatherService = new WeatherService();

export default weatherService;
