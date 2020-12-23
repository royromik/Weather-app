const request = require("request");

// const api_key = 'cDhDrYHY4h0McVf59sPFQZPGpbNrY5r9'
const api_key = '608127d1a98887cc95cec603b09437ff'

// const url = `https://api.climacell.co/v3/locations?apikey=${api_key}`;
// const url = `https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.423`
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=22.468766&lon=88.396375&units=metric&appid=${api_key}`

request({url: url, json: true}, (error, response) => {
    const data = response.body;
    console.log(`it is currently ${data.current.temp} degrees out. There is ${data.current.humidity}% humidity.`);
})