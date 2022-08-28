const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoieW91c3NlZjEwMSIsImEiOiJjbDc1aDlzejUwMnBtM25tbzBrbG45eng0In0.cyw7LHqNeCQB6LdRDJ89PQ&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unabel to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("There is no Features", undefined);
    } else {
      callback(undefined, {
        lat: body.features[0].center[1],
        lon: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
