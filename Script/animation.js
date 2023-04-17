
let animatedText = document.getElementById("animated-text");
window.addEventListener("load", () => {
  const animatedText = document.getElementById("animated-text");
  const texto = "|PUEDES BORRAR ESTO| Escribe aquí, no olvides evitar las mayusculas y los acentos (A-á)";
  let index = 0;
  let intervalId = null;

  intervalId = setInterval(() => {
    if (document.activeElement !== animatedText) {
      animatedText.value = texto.slice(0, index);
      index++;
      if (index > texto.length) {
        clearInterval(intervalId);

      }
    }
  }, 50);
});


function erase(){
  animatedText.value = "";
}

animatedText.addEventListener("click", erase)