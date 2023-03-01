var text = "";
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

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  if (keyPressed == "65") {
    text = "A";
  }
  if (keyPressed == "68") {
    text = text + "D";
  }
  if (keyPressed == "77") {
    text = text + "M";
  }
  if (keyPressed == "73") {
    text = text + "I";
  }
  if (keyPressed == "78") {
    text = text + "N";
    if (text == "ADMIN"){
      console.log("Login successful");
      window.location = "/admin/home.html";
      localStorage.setItem("login", "false");
    }
    else{
      text = ""
    }
  }
}

var c = document.getElementById("canv");
var $ = c.getContext("2d");

var col = function (x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1, 1);
};
var R = function (x, y, t) {
  return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
};

var G = function (x, y, t) {
  return Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
};

var B = function (x, y, t) {
  return Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));
};

var t = 0;

var run = function () {
  for (x = 0; x <= 35; x++) {
    for (y = 0; y <= 35; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }
  t = t + 0.03;
  window.requestAnimationFrame(run);
};

run();





