const greeting = document.querySelector(".greeting");
login = localStorage.getItem("login");

window.onload = () => {
  if (login == "false") {
    location.href = "login.html";
  }
};

const logOut = document.querySelector(".logout");

logOut.onclick = () => {
  localStorage.setItem("login", "false");
  location.href = "/admin/login.html";
};

function home() {
  location.href = "/index.html";
};
