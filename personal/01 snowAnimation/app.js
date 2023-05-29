const snowArray = document.querySelector(".hero__snows");

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

for (let i = 0; i < 80; i++) {
  const snow = document.createElement("img");
  snow.classList.add("hero__snows-icon");
  snow.src = "./src/copo-de-nieve.png";
  snow.style.animationDuration = `${getRandom(1, 7)}s`;
  snowArray.appendChild(snow);
}