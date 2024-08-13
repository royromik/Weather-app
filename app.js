// const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");



address = process.argv[2]

if (!address) {

    console.log("Please provide a correct address");

} else {

    geocode(address, (error, data) => {
        if (error) {
            return console.log(error);
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }

            console.log(data.location);
            console.log(forecastData);
        })
    })
}
