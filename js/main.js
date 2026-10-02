import { getCoordinates, getWeatherData } from './api.js';
import { showLoading, hideLoading, showError, hideError, showWeatherResult } from './ui.js';
import { getWeatherDescription, getWeatherIcon } from './weatherCode.js';

const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const city = cityInput.value.trim();
  if (!city) {
    showError('Masukkan nama kota');
    return;
  }

  try {
    showLoading();
    hideError();

    const coordinates = await getCoordinates(city);
    const currentWeather = await getWeatherData(coordinates.latitude, coordinates.longitude);

    if (!currentWeather || typeof currentWeather.temperature === 'undefined') {
      throw new Error('Data cuaca tidak tersedia untuk kota ini');
    }

    const weatherCode = currentWeather.weatherCode ?? currentWeather.weathercode;
    showWeatherResult({
      cityName: coordinates.name || city,
      temperature: currentWeather.temperature,
      feelsLike: currentWeather.feelsLike,
      humidity: currentWeather.humidity,
      windSpeed: currentWeather.windSpeed ?? currentWeather.windspeed,
      weatherIcon: getWeatherIcon(weatherCode),
      weatherDescription: getWeatherDescription(weatherCode),
    });
  } catch (error) {
    showError(error.message || 'Terjadi kesalahan yang tidak diketahui');
  } finally {
    hideLoading();
  }
});
