const greeting = document.querySelector(".greeting");

window.onload = () => {
  if (!sessionStorage.name) {
    location.href = "admin/public/login.html";
  } else {
    greeting.innerHTML = `hello ${sessionStorage.name}`;
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