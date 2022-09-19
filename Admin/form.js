login = localStorage.getItem("login");

// form loading animation

const form = [...document.querySelector(".form").children];

form.forEach((item, i) => {
  setTimeout(() => {
    item.style.opacity = 1;
  }, i * 100);
});

window.onload = () => {
  if (login == "true") {
    location.href = "/admin/home.html";
  }
};

const home = document.querySelector(".home");

home.onclick = () => {
  windows.location = "/index.html";
};

require("dotenv").config();


const name = process.env.NAME;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
console.log(name + email + password);

