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

function home() {
  location.href = "/index.html";
};

var name = "Rohith M";
var email = "rohithmerala@gmail.com";
var password = "rohithadmin9876";

function logiin() {
  t_email = document.getElementById("email").value;
  t_password = document.getElementById("password").value;

  if (t_email == email && t_password == password) {
    localStorage.setItem("login", "true");
    location.href = "/admin/home.html";
  } else {
    document.getElementById("status").innerHTML = "<h4> Please Check Your Email Or Password </h4>";
  }
}
