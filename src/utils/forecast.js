const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=11b9ce4aedefc5ac48db23a25c65e054&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Weather server.");
    } else if (body.error) {
      callback("Unable to find Location.");
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is Currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
