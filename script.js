// ! Website dark/light theme
const themeContainer = document.querySelector(".theme-btn");
const moonBtn = document.querySelector(".fa-moon");
const sunBtn = document.querySelector(".fa-sun");

const savedTheme = localStorage.getItem("dark-theme");
const savedIcon = localStorage.getItem("dark-theme");

if (savedIcon == "true") {
  moonBtn.classList.add("d-none");
  sunBtn.classList.add("d-block");
}
if (savedIcon == "false") {
  moonBtn.classList.remove("d-none");
  sunBtn.classList.add("d-none");
  sunBtn.classList.remove("d-block");
}
if (savedTheme == "true") {
  document.body.classList.add("dark-theme");
}
if (savedTheme == "false") {
  document.body.classList.remove("dark-theme");
}

themeContainer.addEventListener("click", () => {
  moonBtn.classList.toggle("d-none");
  sunBtn.classList.toggle("d-block");

  document.body.classList.toggle("dark-theme");

  localStorage.setItem("dark-theme", getCurrentTheme());
  localStorage.setItem("theme-btn", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? true : false;

const getCurrentIcon = () =>
  themeContainer.childNodes[3].classList.contains("d-block") ? true : false;
