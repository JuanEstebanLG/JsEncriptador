const inputText = document.getElementById("input-text");
const animatedText = document.getElementById("animated-text");

inputText.addEventListener("input", () => {
  animatedText.innerText = inputText.value;
});