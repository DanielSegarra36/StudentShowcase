fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%2520York?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=7J454YR53QD4WFQALAT3MXVKF&options=beta&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => response.json())
	.then(weatherData => {
		console.log(weatherData);
		
		const weatherDate = weatherData.currentConditions.feelslike
		document.querySelector('.feels-like').innerHTML = weatherDate
		console.log(weatherDate);

		const weatherTemp = weatherData.currentConditions.temp
		document.querySelector('.weather-temp').innerHTML = weatherTemp
		console.log(weatherTemp);

		const weatherImg = document.createElement('img')
		const imgFilename = weatherData.currentConditions.icon
		const imgSrc = 'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/' + imgFilename + '.png'
		weatherImg.src = imgSrc
		document.querySelector('.weather-box').appendChild(weatherImg)
})
