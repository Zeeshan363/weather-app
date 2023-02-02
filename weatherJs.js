let input = document.getElementById("input").addEventListener("change", (e) => {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=fa483ded1218dd03ebf95edb7e6f9609`;
  weatherUpdate(url);
  e.target.value("");
});

var name_city, description, degree;

let weatherUpdate = async (url) => {
  //   these two lines are important... first fetch() to variable and then variable.json();
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  if (data.cod === "404") {
    alert("enter valid city name");
  } else {
    name_city = data.name;
    description = data.weather[0].description;
    degree = data.main.temp;

    // formula is Celsius = kelvin - 273
    let celcuis = degree - 273;

    // getting the html to output values
    let name_display = document.getElementsByClassName("city")[0];
    let details = document.getElementById("details");
    let current_temp = document.getElementsByClassName("current_temp")[0];
    name_display.innerHTML = `${name_city}`;
    details.innerHTML = `${description}`;
    current_temp.innerHTML = `${"&deg;"} ${celcuis.toFixed(2)}`;
  }
};
