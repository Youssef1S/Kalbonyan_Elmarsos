const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=141f3a24dd50cf8e2ae55aee163cab47&query=${
    (lat, lon)
  }&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const data = body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature}. It feels like ${data.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
