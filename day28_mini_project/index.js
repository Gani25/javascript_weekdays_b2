const changeThemeButton = document.querySelector("#toggleBtn");
const body = document.querySelector("body");

let darkMode = localStorage.getItem("themePreference") === "true";

function changeTheme() {
  if (darkMode) {
    body.classList.add("dark");
    changeThemeButton.innerHTML = '<i class="fa-solid fa-sun sun"></i>';
  } else {
    body.classList.remove("dark");
    changeThemeButton.innerHTML = '<i class="fa-solid fa-moon moon"></i>';
  }
}

changeThemeButton.addEventListener("click", () => {
  darkMode = !darkMode; // false
  localStorage.setItem("themePreference", darkMode);
  changeTheme();
});

changeTheme();
