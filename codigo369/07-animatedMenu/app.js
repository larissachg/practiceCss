const links = document.querySelectorAll(".nav__link");

links.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.children[0].style.transform = "scale(0)";
    item.children[1].style.transform = "scale(1)";
  });

  item.addEventListener("mouseout", () => {
    item.children[0].style.transform = "scale(1)";
    item.children[1].style.transform = "scale(0)";
  });
});
