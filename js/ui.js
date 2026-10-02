const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('errorMessage');
const weatherResult = document.getElementById('weatherResult');
const cityNameElement = document.getElementById('cityName');
const temperatureElement = document.getElementById('temperature');
const feelsLikeElement = document.getElementById('feelsLike');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('windSpeed');
const weatherIconElement = document.getElementById('weatherIcon');
const weatherDescriptionElement = document.getElementById('weatherDescription');

export function showLoading() {
  loadingElement.classList.remove('hidden');
  errorElement.classList.add('hidden');
  weatherResult.classList.add('hidden');
}

export function hideLoading() {
  loadingElement.classList.add('hidden');
}

export function hideError() {
  errorElement.textContent = '';
  errorElement.classList.add('hidden');
}

export function showError(message) {
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
  weatherResult.classList.add('hidden');
}

export function showWeatherResult(data) {
  weatherResult.classList.remove('hidden');
  cityNameElement.textContent = data.cityName;
  temperatureElement.textContent = `${data.temperature}°C`;
  feelsLikeElement.textContent = `${data.feelsLike ?? '-'}°C`;
  humidityElement.textContent = `${data.humidity ?? '-'}%`;
  windSpeedElement.textContent = `${data.windSpeed} km/h`;
  weatherIconElement.textContent = data.weatherIcon;
  weatherDescriptionElement.textContent = data.weatherDescription;
}
