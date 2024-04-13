const apiKey = "e62a70c5f0f52a2e1ae9ca2f6a802633";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtb = document.querySelector('.search button');

const weaterIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        let data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == 'Clouds') {
            weaterIcon.src = './images/clouds.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weaterIcon.src = './images/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weaterIcon.src = './images/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weaterIcon.src = './images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weaterIcon.src = './images/mist.png';
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }

}

searchBtb.addEventListener('click', () => {
    checkWeather(searchBox.value);
});