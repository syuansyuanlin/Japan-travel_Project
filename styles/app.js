let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(141, 206, 230, 0.55)";
    header.style.color = "white";
    headerAnchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerAnchor.forEach((a) => {
      a.style.color = "#f3c5c5";
    });
  }
});
