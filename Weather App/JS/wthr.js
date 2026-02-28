const apiKey = '36986e29395777bdc6f38facb7678089';

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', getWeather);

  const input = document.getElementById('city-input');
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      getWeather();
    }
  });
});

function getWeather() {
  const city = document.getElementById('city-input').value.trim();
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      updateWeatherUI(data);
    })
    .catch(err => {
      alert(err.message);
    });
}

function updateWeatherUI(data) {
  const result = document.getElementById('weather-result');
  result.classList.remove('d-none');

  document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById('description').textContent = data.weather[0].description.toUpperCase();
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
