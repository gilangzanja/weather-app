const WEATHER_DESCRIPTIONS = {
  0: 'Cerah',
  1: 'Sebagian cerah',
  2: 'Berawan',
  3: 'Mendung',
  45: 'Berkabut',
  48: 'Berkabut dengan embun beku',
  51: 'Gerimis ringan',
  53: 'Gerimis sedang',
  55: 'Gerimis lebat',
  56: 'Gerimis dingin ringan',
  57: 'Gerimis dingin lebat',
  61: 'Hujan ringan',
  63: 'Hujan sedang',
  65: 'Hujan lebat',
  66: 'Hujan dingin ringan',
  67: 'Hujan dingin lebat',
  71: 'Salju ringan',
  73: 'Salju sedang',
  75: 'Salju lebat',
  77: 'Butiran salju',
  80: 'Hujan lokal ringan',
  81: 'Hujan lokal sedang',
  82: 'Hujan lokal lebat',
  85: 'Salju ringan berskala',
  86: 'Salju lebat berskala',
  95: 'Badai',
  96: 'Badai dengan hujan es ringan',
  99: 'Badai dengan hujan es lebat',
};

export function getWeatherDescription(code) {
  return WEATHER_DESCRIPTIONS[code] || 'Cuaca tidak tersedia';
}

export function getWeatherIcon(code) {
  if (code === 0) return '☀️';
  if (code === 1) return '🌤️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code >= 51 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '❄️';
  if (code >= 80 && code <= 82) return '🌦️';
  if (code === 85 || code === 86) return '🌨️';
  if (code >= 95 && code <= 99) return '⛈️';
  return '🌡️';
}
