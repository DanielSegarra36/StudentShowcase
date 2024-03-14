/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* ConstructionCurr js*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

window.setMobileTable = function(selector) {
  // if (window.innerWidth > 600) return false;
  const tableEl = document.querySelector(selector);
  const thEls = tableEl.querySelectorAll('thead th');
  const tdLabels = Array.from(thEls).map(el => el.innerText);
  tableEl.querySelectorAll('tbody tr').forEach( tr => {
    Array.from(tr.children).forEach( 
      (td, ndx) =>  td.setAttribute('label', tdLabels[ndx])
    );
  });
}

fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%2520York?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=M3MKU6KVCDJF8KZBQ7TGHM2TT&options=beta&contentType=json", {
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
