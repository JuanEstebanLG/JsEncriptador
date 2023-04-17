
let transcriptor = document.getElementById("transcriptor"); // Boton para encriptar
let desTranscriptor = document.getElementById("desTranscriptor"); // boton para desencriptar
let text = document.getElementById('text'); // este objeto hace referencia al espacio donde se reflejara el resultado
let copyButton = document.getElementById('copyButton'); //boton de copia
let textVanish = document.getElementById("animated-text"); //  con esta variable se eliminara el texto cuando se de click en un boton
let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"   
 }; // este objeto guarda los valores a reemplazar y sus reemplazos  para el caso de vocales

let vowals ={
    "enter":"e",
    "imes":"i",
    "ai":"a",
    "ober":"o",
    "ufat":"u"
} // Cada cadena de caracteres sera emparejada con una vocal




/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 


function showText(){

    /**
     * Esta funcion ocultara el contenedor principal y lo reemplazara 
     * por el contenedor con la encriptacion reflejada
     */
    let displayNotFound = document.getElementById("principal-container-media_first"); // El contenedor principal
    let displayText = document.getElementById("principal-container-media-second"); // Contenedor secundario

    displayNotFound.style.display = 'none';
    displayText.style.display = 'flex';
}

function encriptador (){

    /**
     * Esta funcion, obtendra el texto escrito en el input
     * aplicando una transformacion a este, segun un algoritmo sencillo
     */

    let input = document.getElementById("animated-text").value; //Texto en el area
    let textofinal; // espacio para guardar el texto final


    if(input.length > 0){
     /**
      * En tanto el texto dentro del input, contenga mas de un caracter, se aplicara esta transformacion
      */
    let inputSalida = input.toLowerCase(); // transformamos el texto del input a minusculas.

        
    textofinal = inputSalida.replace(/[aeiou]/g, i => llaves[i])
    text.innerText = textofinal; 
    
    /** 
     * Con el objeto llaves, aplicando el metodo replace al inputSalida, buscamos si en el texto existen coincidencias
     * como las definidas en el objeto llaves, de hacerlo, se aplicara una arrowfunction, que reemplazara las coincidencias
     * deacuerdo al objeto 
     * */ 

    showText(); //llamamos la funcion showText

    textVanish.innerText = ""; //Eliminamos el texto.
    }else{
        alert("Escribe algo primero.") //Si el input no tiene texto y se intenta encriptar, se mandara esta alerta
    }
}
    
function desEncriptador(){

    /**
     * Esta funcion sigue la misma logica que la funcion encriptar, pero con el proceso contrario
     * aplicando el algoritmo a strings y no a caracteres
     */
    let input = document.getElementById("animated-text").value;
    let textoFinal;

    if(input.length > 0){
        let inputSalida = input.toLowerCase(); // transformamos el texto del input a minusculas.
        textoFinal = inputSalida.replace(/(ai|imes|enter|ober|ufat)/g, i => vowals[i])
        text.innerText = textoFinal
        showText();
        textVanish.innerText = "";
    }else{
        alert("TIENES QUE ESCRIBIR ALGO PRIMERO")
    }
}

function copy() {
    let textCopy = text.textContent;
    if (textCopy) {
      navigator.clipboard.writeText(textCopy);
      
    } else {
      alert("No hay texto disponible para copiar");
    }
    text.innerHTML = "TEXTO COPIADO CON EXITO!";
  }





copyButton.addEventListener('click', copy);

transcriptor.onclick = encriptador;
desTranscriptor.onclick = desEncriptador;
