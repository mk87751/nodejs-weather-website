const request = require("postman-request");

const geocode = (location, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(location) +
    ".json?access_token=pk.eyJ1IjoibWs4Nzc1MSIsImEiOiJjbG1tNHVxcGkwZnQwMmx0YmprZGhtaG9sIn0.LiY5GQ-hLSxsk8AOratskA&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location service.");
    } else if (body.features.length === 0) {
      callback("Unable to find Location. Try another search.");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
