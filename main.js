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
      window.location = "admin/public/home.html";
    }
    else{
      text = ""
    }
  }
}
