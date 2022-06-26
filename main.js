const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

const faviconTag = document.getElementById("faviconTag_home");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = "/Images/Dark_Icon.svg";
  else faviconTag.href = "/Images/Light_Icon.svg";
};

changeFavicon();

setInterval(changeFavicon, 1000);