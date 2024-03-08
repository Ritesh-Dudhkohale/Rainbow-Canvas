const clrbtn1 = document.getElementById("color-btn-1");
const clrbtn2 = document.getElementById("color-btn-2");

const container = document.getElementsByClassName("container")[0];
const cssText = document.getElementById("css-copy");
console.log(cssText);
function getDirection() {}

const hexGenerator = (event) => {
  let randomColorValue =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toLocaleUpperCase();

  event.currentTarget.innerText = randomColorValue;
  event.currentTarget.style.background = randomColorValue;

  const direction = getDirection() || "right";

  container.style.background = `linear-gradient(to ${direction}, ${clrbtn1.innerText}, ${clrbtn2.innerText})`;
  cssText.style.background = `linear-gradient(to ${direction}, ${clrbtn2.innerText}, ${clrbtn1.innerText})`;

  cssText.innerHTML = `background-image: ${container.style.background};`;
};

clrbtn1.addEventListener("click", hexGenerator);
clrbtn2.addEventListener("click", hexGenerator);
