const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "";
messageTwo.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  messageOne.textContent = "Loading...";
  fetch(
    `http://api.weatherstack.com/current?access_key=141f3a24dd50cf8e2ae55aee163cab47&query=${location}&units=f`
  ).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        // messageOne.textContent =
        messageOne.textContent = data.error.info;
      } else {
        messageOne.textContent =
          data.location.name + ", " + data.location.country;
        messageTwo.textContent = `${data.current.weather_descriptions}. It is currently ${data.current.temperature} degrees. It feels like ${data.current.feelslike} degrees out.`;
      }
    });
  });
});
