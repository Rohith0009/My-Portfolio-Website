const greeting = document.querySelector(".greeting");
login = localStorage.getItem("login");

window.onload = () => {
  if (login == "false") {
    location.href = "login.html";
  }
};

const logOut = document.querySelector(".logout");

logOut.onclick = () => {
  sessionStorage.clear();
  location.reload();
};

const home = document.querySelector(".home");

home.onclick = () => {
  sessionStorage.clear();
  location.reload();
  windows.location = "/index.html";
};