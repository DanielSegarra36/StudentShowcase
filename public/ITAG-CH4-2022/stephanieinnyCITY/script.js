async function getCoordinates(){
  let userInput = document.getElementById("userInput").value;
  userInput = userInput.replaceAll(" ", "%20");
  const URL = "https://api.geoapify.com/v1/geocode/search?text=" + userInput + "&format=json&apiKey=694d91a1176b48e4839dc502f11d4d02";
  console.log(URL);
  let data = await fetch(URL);
  let response = await data.json();
  console.log(response);
  data = response.results;
  console.log(data);
  let lat = "";
  let lon = "";
  let output = document.getElementById("output");
  /*let innerHTML="";*/
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    lat = data[i].lat;
    lon = data[i].lon;
    output.innerHTML += "<p class= content'>Latitude: " + lat + ", Longitude: " + lon + "</p>";
  }
}


/*window.addEventListener("load", function() {
  document.body.style.backgroundColor = "#b0d1d9"; document.getElementById("heading").style.color = "#9c7d5f";
  let contentDiv = document.getElementsByClassName("content-div"); 
  for (let i = 0; i < contentDiv.length; i++) {
    contentDiv = [i].style.height = "200px";
    contentDiv[i].style.width = "200px";
    contentDiv[i].style.border = "solid 1px black";
  }
});*/


