// let cityName = document.querySelector(".city-name");
let citySearch = document.querySelector(".city-search");
let searchBtn = document.querySelector(".btn");
let weatherimg = document.querySelector(".weatherimg");
let music = document.querySelector(".music");

const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const apiKey = "8e74737832107baf6fa055359f97dde9";

async function checkWeather(cityname) {

    const response = await fetch(api + cityname + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".cityname").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = data.main.temp + "C";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        if (data.weather[0].main === "Clear") {
            weatherimg.src = "sunny.png"
            music.src = "none"
        }
        else if (data.weather[0].main === "Clouds") {
            weatherimg.src = "cloudy.png"
            music.src = "Kurtlar_Vadisi_Pusu_-_128_Bolum_Yeni_muzik_-_www.BiG.AZ.mp3"
        }
        else if (data.weather[0].main === "Rain") {
            weatherimg.src = "rainy.png"
        }
        else if (data.weather[0].main === "Mist") {
            weatherimg.src = "mist.png"
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherimg.src = "drizzle.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".invalid").style.display = "none";
    }

}
checkWeather();

searchBtn.addEventListener("click", () => {
    checkWeather(citySearch.value);
})

