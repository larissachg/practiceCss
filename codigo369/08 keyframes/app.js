const bubblesArray = document.querySelector(".bubbles");

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

for (let i = 0; i < 39; i++) {
  const bubble = document.createElement("span");
  bubble.classList.add("bubbles__circle");
  bubble.style.animationDuration = `${getRandom(2, 7)}s`;
  bubblesArray.appendChild(bubble);
}
