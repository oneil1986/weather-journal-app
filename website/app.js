/* Global Variables */
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const city = document.getElementById("city");

// Personal API Key for OpenWeatherMap API
const apiKey = "&APPID=e3d02ea1a9fad9177d217738809587cd";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", preformAction);

/* Function called by event listener */
function preformAction(event) {
  const newCity = city.value;
  const weather = getWeather(baseUrl, newCity, apiKey).then(function(data) {
    postData("/weather", data);
  });
}

/* Function to GET Web API Data*/
const getWeather = async (baseUrl, city, apiKey) => {
  const response = await fetch(baseUrl + city + apiKey);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  });

  try {
    const newData = response.json();
    console.log(newData);
    return newData;
  } catch (err) {
    console.log("Error", err);
  }
};

/* Function to GET Project Data */
