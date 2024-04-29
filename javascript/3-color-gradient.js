// Get references to DOM elements
const clrbtn1 = document.getElementById("color-btn-1");
const clrbtn2 = document.getElementById("color-btn-2");
const clrbtn3 = document.getElementById("color-btn-3");

const generatebtn = document.getElementById("generate-btn");

const container3 = document.querySelector(".container-3c");
const cssText = document.getElementById("css-copy");

// Define hexGenerator function
const hexGenerator = (event) => {
  if (event && event.type === "click") {
    // If event is a double-click event
    let randomColorValue =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .toLocaleUpperCase();
    event.currentTarget.innerText = randomColorValue;
    event.currentTarget.style.background = randomColorValue;
  }

  // Fetch the currently checked radio button
  const directionInput = document.querySelector(
    'input[name="directions"]:checked'
  );

  if (directionInput) {
    const direction = directionInput.value;
    const forLabel = directionInput.id;

    // Update selected label
    document.querySelectorAll("label").forEach((label) => {
      if (label.getAttribute("for") === forLabel) {
        label.classList.add("selected");
      } else {
        label.classList.remove("selected");
      }
    });

    // Update container background
    container3.style.background = `linear-gradient(${direction}, ${clrbtn1.innerText}, ${clrbtn2.innerText}, ${clrbtn3.innerText})`;

    // Update CSS code text
    cssText.innerHTML = `background-image: ${container3.style.background};`;
  }
};

// Add event listeners
clrbtn1.addEventListener("click", hexGenerator);
clrbtn2.addEventListener("click", hexGenerator);
clrbtn3.addEventListener("click", hexGenerator);

document.querySelectorAll('input[name="directions"]').forEach((input) => {
  input.addEventListener("click", hexGenerator);
});

// Call hexGenerator function initially to ensure correct label selection
hexGenerator(null);
