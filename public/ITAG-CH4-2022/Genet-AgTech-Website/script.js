let weather = {
  apiKey: "71e5735eb9b376183a15f8d84f86d0d4",
  fetchWeather: function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.826149&lon=-73.920273&units=imperial&appid=71e5735eb9b376183a15f8d84f86d0d4")
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity} = data.main;
    console.log(name,icon,description,temp,humidity);
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%"; 
  }
  }

  weather.fetchWeather()