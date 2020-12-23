const request = require("request");

// const api_key = 'cDhDrYHY4h0McVf59sPFQZPGpbNrY5r9'
const api_key = '608127d1a98887cc95cec603b09437ff'

// const url = `https://api.climacell.co/v3/locations?apikey=${api_key}`;
// const url = `https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.423`
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=22.468766&lon=88.396375&units=metric&appid=${api_key}`

request({url: url, json: true}, (error, response) => {
    const data = response.body;
    if(error){
        console.log("unable to connect to the geocoing services api")
    } else if(data.message || data.error){
        console.log("Unable to find the location")
    } else{
    console.log(`it is currently ${data.current.temp} degrees out. There is ${data.current.humidity}% humidity.`);
    }
})

const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Kolkata.json?access_token=pk.eyJ1Ijoicm95cm9taWsiLCJhIjoiY2tqMHozd2gzMGQ3NTJ6cXRlNHJ6Nm5jdyJ9.QUf8guX-Y97YroHCVUsOFQ&limit=1'

request({ url: geocode_url, json: true }, (error, response) => {
    const data = response.body;
    if(error){
        console.log("unable to connect to the geocoing services api")
    } else if(data.message || data.error || data.features.length == 0){
        console.log("Unable to find the location")
    } else{
        const latitude = data.features[0].center[1];
        const longitude = data.features[0].center[0]
        console.log(latitude,longitude);
    }
})