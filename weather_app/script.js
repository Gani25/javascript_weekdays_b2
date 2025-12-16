const daysSelect = document.getElementById("days");
for (let i = 1; i <= 14; i++) {
  const o = document.createElement("option");
  o.value = i;
  o.textContent = i;
  daysSelect.appendChild(o);
}

const themeToggle = document.getElementById("themeToggle");
const sun = document.getElementById("sunIcon");
const moon = document.getElementById("moonIcon");
const toggleLabel = document.getElementById("toggleLabel");

function updateToggleVisuals(isDark) {
  if (isDark) {
    sun.style.display = "inline-block";
    moon.style.display = "none";
    toggleLabel.textContent = "Light";
  } else {
    moon.style.display = "inline-block";
    sun.style.display = "none";
    toggleLabel.textContent = "Dark";
  }
}

const saved = localStorage.getItem("theme") || "light";

sun.style.display = "none";
moon.style.display = "inline-block";
toggleLabel.textContent = "Dark";

if (saved === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.checked = true;
  updateToggleVisuals(true);
} else {
  updateToggleVisuals(false);
}

document.getElementById("themeToggleWrap").addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    updateToggleVisuals(false);
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    updateToggleVisuals(true);
  }
});

const wrap = document.getElementById("themeToggleWrap");
wrap.tabIndex = 0;
wrap.addEventListener("keyup", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    wrap.click();
  }
});

window.__WEATHER_UI = {
  cityInput: document.getElementById("city"),
  daysInput: document.getElementById("days"),
  weatherRoot: document.getElementById("forecastContainer"),
  loader: document.getElementById("loader"),
};

// LOGIC FOR API CALL

async function getFlag(country) {
  const flagURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  let data;
  let flagImage;
  try {
    data = await axios.get(flagURL);

    console.log(data);
    flagImage = data.data[0].flags.png;
  } catch (error) {
    console.log("ERROR = ", error);
  }
  return flagImage || "fallback.png";
}

const apiKey = "bcd772c692ee42b1adb101143251009";
let baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;
const searchCity = localStorage.getItem("userCity");
const forecastDays = localStorage.getItem("userForecast");

// Getting HTML DOM Elements
const loader = document.getElementById("loader");
const emptyState = document.getElementById("emptyState");
const dataContainer = document.querySelector("#dataContainer");

// reading form Errors
const cityError = document.getElementById("cityError");
const daysError = document.getElementById("daysError");

// reading form data
const cityData = document.querySelector("#city");
const daysData = document.querySelector("#days");

// reading form to target submit event
const weatherForm = document.querySelector("#weatherForm");

// current Location
const currentLocationButton = document.getElementById("currentLocationBtn");

if (searchCity && forecastDays) {
  getWeatherUpdate(searchCity, forecastDays);
}
function isCityValid(cityValue) {
  if (!cityValue) {
    cityError.style.display = "block";
    return false;
  }
  cityError.style.display = "none";
  return true;
}
function isDaysValid(daysValue) {
  if (!daysValue) {
    daysError.style.display = "block";
    return false;
  }
  daysError.style.display = "none";
  return true;
}

async function getWeatherUpdate(searchQuery, forecastDays) {
  localStorage.setItem("userCity", searchQuery);
  localStorage.setItem("userForecast", forecastDays);
  loader.style.display = "block";
  dataContainer.innerHTML = "";
  emptyState.style.display = "none";
  try {
    let apiURL = `${baseURL}&q=${searchQuery}&days=${forecastDays}`;

    let apiResponse = await axios.get(apiURL);
    let apiData = apiResponse.data;

    let flagURL = await getFlag(apiData.location.country);

    console.log(flagURL);

    let date = new Date(apiData.location.localtime_epoch * 1000);
    console.log(apiData);

    const dateFormat = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    if (cityData.value.trim() === "") {
      cityData.value = apiData.location.name;
    } else {
      let searchValue = searchQuery.split(",");
      if (
        Number.isNaN(Number(searchValue[0])) &&
        Number.isNaN(Number(searchValue[1]))
      ) {
        console.log(Number(searchValue[0]));
        console.log(Number(searchValue[1]));
        cityData.value = searchQuery;
      } else {
        cityData.value = apiData.location.name;
      }
    }

    // cityData.value =
    //   cityData.value.trim() === "" ? apiData.location.name : searchQuery;

    daysData.value = forecastDays;
    let weatherInfo = `
  <div class="weather-top">
    <img class="flag" src="${flagURL}" alt="Country Flag Image">
    <div>
      <div style="font-weight:bold;">${apiData.location.name}, ${apiData.location.region}, ${apiData.location.country}</div>
      <div class="small">${dateFormat} • ${apiData.current.condition.text}</div>
    </div>
  </div>
  <p class="temp">${apiData.current.temp_c} ℃</p>
  <div class="small">Wind: ${apiData.current.wind_mph} m/h • Humidity: ${apiData.current.humidity}% • Cloud: ${apiData.current.cloud}%</div>
  <div class="info">
    <div class="pill">Feels: ${apiData.current.feelslike_c} ℃</div>
    <div class="pill">Pressure: ${apiData.current.pressure_mb} mb</div>
    <div class="pill">UV: ${apiData.current.uv}</div>
  </div>
  <h3 style="margin-top:12px;margin-bottom:8px">Forecast</h3>
  <div class="forecast" id="forecastContainer">
  </div>
  `;

    dataContainer.innerHTML = weatherInfo;

    // for forecast display
    let forecastContainer = document.querySelector("#forecastContainer");
    apiData.forecast.forecastday.forEach((day) => {
      let item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `
      <div class="date">${day.date}</div>
      <div >${day.day.condition.text}</div>
      <div >Max: ${day.day.maxtemp_c} ℃, Min: ${day.day.mintemp_c} ℃</div>
      <img alt="Weather Icon" src="https:${day.day.condition.icon}">
      `;

      forecastContainer.appendChild(item);
    });

    loader.style.display = "none";
  } catch (error) {
    // Show ERROR UI
    loader.style.display = "none";
    dataContainer.innerHTML = `
    <div style="text-align:center; padding:16px">
      <img src="error.png" alt="Error Image">
      <p style="color:red; font-weight:600;">Error Fetching Data! Try Again</p>
    </div>
    `;
  }
}

// submit event target
weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let cityValid = isCityValid(cityData.value.trim());
  let daysValid = isDaysValid(daysData.value.trim());

  if (cityValid && daysValid) {
    getWeatherUpdate(cityData.value.trim(), daysData.value.trim());
  } else {
    emptyState.style.display = "flex";
    // dataContainer.style.display = "none";
    dataContainer.innerHTML = "";
  }
});

currentLocationButton.addEventListener("click", () => {
  let daysValid = isDaysValid(daysData.value.trim());

  if (!daysValid) {
    emptyState.style.display = "flex";
    dataContainer.innerHTML = "";
    return;
  } else {
    // current location -> client
    isCityValid("No Check");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // console.log(position);
          // console.log(position.coords.latitude);
          // console.log(position.coords.longitude);
          getWeatherUpdate(
            `${position.coords.latitude},${position.coords.longitude}`,
            daysData.value.trim()
          );
        },
        () => {
          alert("Please allow location");
        }
      );
    } else {
      alert("Location is not supported");
    }
  }
});
