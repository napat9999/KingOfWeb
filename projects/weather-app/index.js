// ใช้ Open-Meteo (ฟรี ไม่ต้องใช้ API key) แทน OpenWeatherMap ที่ key หมดอายุแล้ว
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

// แปลง WMO weather code เป็นคำอธิบาย + ไอคอน
const WEATHER_CODES = {
  0: ["clear sky", "☀️"],
  1: ["mainly clear", "🌤️"],
  2: ["partly cloudy", "⛅"],
  3: ["overcast", "☁️"],
  45: ["fog", "🌫️"],
  48: ["rime fog", "🌫️"],
  51: ["light drizzle", "🌦️"],
  53: ["drizzle", "🌦️"],
  55: ["dense drizzle", "🌧️"],
  56: ["freezing drizzle", "🌧️"],
  57: ["freezing drizzle", "🌧️"],
  61: ["light rain", "🌦️"],
  63: ["rain", "🌧️"],
  65: ["heavy rain", "🌧️"],
  66: ["freezing rain", "🌧️"],
  67: ["freezing rain", "🌧️"],
  71: ["light snow", "🌨️"],
  73: ["snow", "🌨️"],
  75: ["heavy snow", "❄️"],
  77: ["snow grains", "🌨️"],
  80: ["light showers", "🌦️"],
  81: ["showers", "🌧️"],
  82: ["violent showers", "⛈️"],
  85: ["snow showers", "🌨️"],
  86: ["heavy snow showers", "❄️"],
  95: ["thunderstorm", "⛈️"],
  96: ["thunderstorm with hail", "⛈️"],
  99: ["thunderstorm with hail", "⛈️"],
};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value.trim();
  if (cityValue) getWeatherData(cityValue);
});

function showMessage(message) {
  weatherDataEl.querySelector(".icon").innerHTML = "";
  weatherDataEl.querySelector(".temperature").textContent = "";
  weatherDataEl.querySelector(".description").textContent = message;
  weatherDataEl.querySelector(".details").innerHTML = "";
}

async function getWeatherData(cityValue) {
  try {
    showMessage("Loading...");

    // 1) หาพิกัดของเมือง
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityValue)}&count=1`
    );
    if (!geoResponse.ok) throw new Error("Geocoding failed");
    const geoData = await geoResponse.json();
    if (!geoData.results || geoData.results.length === 0) {
      showMessage(`City "${cityValue}" not found`);
      return;
    }
    const { latitude, longitude, name, country } = geoData.results[0];

    // 2) ดึงสภาพอากาศปัจจุบัน
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
        `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code` +
        `&wind_speed_unit=ms`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    const current = data.current;

    const [description, icon] = WEATHER_CODES[current.weather_code] || ["unknown", "🌡️"];
    const details = [
      `Feels like: ${Math.round(current.apparent_temperature)}°C`,
      `Humidity: ${current.relative_humidity_2m}%`,
      `Wind speed: ${current.wind_speed_10m} m/s`,
    ];

    weatherDataEl.querySelector(".icon").innerHTML =
      `<span style="font-size:64px;line-height:1" role="img" aria-label="${description}">${icon}</span>`;
    weatherDataEl.querySelector(".temperature").textContent =
      `${Math.round(current.temperature_2m)}°C`;
    weatherDataEl.querySelector(".description").textContent =
      `${description} — ${name}${country ? ", " + country : ""}`;
    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    console.log(error);
    showMessage("An error happened, please try again later");
  }
}
