const faviconTag = document.getElementById("faviconTag_history");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = "/Images/Dark_History.svg";
  else faviconTag.href = "/Images/Light_History.svg";
};

changeFavicon();

setInterval(changeFavicon, 1000);
