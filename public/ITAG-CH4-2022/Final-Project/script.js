
let weather = {
  //apiKey: "1f80bc0ff79bc73bf19741f5ece818c8",
  fetchWeather: function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.678177&lon=-73.944160&appid=1f80bc0ff79bc73bf19741f5ece818c8&units=metric')
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  
  displayWeather: function(data) {

    
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity,  } = data.main;
    const { speed} = data.wind;

    document.querySelector(".speed").innerText = "Wind:"+ speed + "km/h";
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".city").innerText = name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%"; 
  }
  }

weather.fetchWeather()

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}