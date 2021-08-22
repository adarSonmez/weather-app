const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';
const app = document.getElementById('app');
const form = document.getElementById('form');
const search = document.getElementById('search');
const cityElement = document.getElementById('city');
const countryElement = document.getElementById('country');
const longitudeElement = document.getElementById('longitude');
const latitudeElement = document.getElementById('latitude');
const temperature = document.getElementById('temperature');
const iconImg = document.getElementById('iconImg');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const feels = document.getElementById('feels');
const visibility = document.getElementById('visibility');
const pressure = document.getElementById('pressure');
const windSpeed = document.getElementById('windSpeed');

window.onload = () => {
  search.focus();
  navigator.geolocation.getCurrentPosition((position) => {
    const LAT = position.coords.latitude;
    const LON = position.coords.longitude;
    const API_COORDS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

    getWeatherByCoords(API_COORDS);
  });
};

form.onsubmit = (e) => {
  e.preventDefault();

  const CITY = search.value;
  const API_SEARCH = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

  // latest method for asynchronous code
  async function getWeatherBySearch() {
    try {
      const response = await fetch(API_SEARCH);
      const respData = await response.json();
      changeDOM(respData);
    } catch (err) {
      window.alert(
        'Make sure you typed the correct location. If you are sure, check your internet connection.'
      );
    }
  }

  getWeatherBySearch()
    .then(() => {
      search.value = '';
      app.style.opacity = '1';
    })
    .catch((err) => console.log(err.message));
};

// promises for asynchronous code
function getWeatherByCoords(API) {
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((respData) => {
      changeDOM(respData);
      console.log(respData);
    })
    .then(() => (app.style.opacity = '1'))
    .catch(() => window.alert('Please check your internet connection.'));
}

function changeDOM(r) {
  cityElement.textContent = r.name;
  countryElement.textContent = r.sys.country;
  temperature.textContent = Math.floor(r.main.temp - 273);
  description.textContent = r.weather[0].description;
  iconImg.src = `http://openweathermap.org/img/wn/${r.weather[0].icon}@2x.png`;
  humidity.textContent = r.main.humidity + '%';
  feels.textContent = Math.floor(r.main.feels_like - 273) + '°C';
  visibility.textContent = r.visibility + ' m';
  pressure.textContent = r.main.pressure + ' hPa';
  longitudeElement.textContent = r.coord.lon;
  latitudeElement.textContent = r.coord.lat;
  windSpeed.textContent = r.wind.speed + ' m/s';
}
