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

  let data = await axios.get(flagURL);
  return data.data[0].flags.png;
}

const apiKey = "bcd772c692ee42b1adb101143251009";
let baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;
const searchCity = "Turkey";
const forecastDays = 3;
async function getWeatherUpdate(searchQuery, forecastDays) {
  let apiURL = `${baseURL}&q=${searchQuery}&days=${forecastDays}`;

  let apiResponse = await axios.get(apiURL);
  let apiData = apiResponse.data;

  let flagURL = await getFlag(apiData.location.country);

  console.log(flagURL);

  console.log(apiData);
}

getWeatherUpdate(searchCity, forecastDays);
