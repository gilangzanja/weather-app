import { GEOCODING_API_URL, WEATHER_API_BASE_URL } from './config.js';

export async function getCoordinates(city) {
  const url = `${GEOCODING_API_URL}?name=${encodeURIComponent(city)}&count=1&language=id&format=json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Gagal mengambil data koordinat');
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('Kota tidak ditemukan');
  }

  const location = data.results[0];
  return {
    name: location.name,
    longitude: Number(location.longitude),
    latitude: Number(location.latitude),
  };
}

export async function getWeatherData(latitude, longitude) {
  const currentFields = [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'weather_code',
    'wind_speed_10m',
  ].join(',');
  const url = `${WEATHER_API_BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=${currentFields}&wind_speed_unit=kmh&timezone=auto`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Gagal mengambil data cuaca');
  }

  const data = await response.json();
  const current = data.current;

  if (current) {
    return {
      temperature: current.temperature_2m,
      feelsLike: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      weatherCode: current.weather_code,
      windSpeed: current.wind_speed_10m,
    };
  }

  return data.current_weather || null;
}
