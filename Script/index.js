
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


    textofinal = inputSalida.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                                                    .replace(/[^\w\s]|_/g, '')
                                                    .replace(/\s+/g, ' ')
                                                    .replace(/[aeiou]/g, i => llaves[i]);

    text.innerText = textofinal; 

    if(text.innerHTML == ''){
        alert('Ingresa un texto Valido, primero');
    }else{
        showText(); //llamamos la funcion showText
        textVanish.innerText = ""; //Eliminamos el texto.
    }
    
    /** 
     * Con el objeto llaves, aplicando el metodo replace al inputSalida, buscamos si en el texto existen coincidencias
     * como las definidas en el objeto llaves, de hacerlo, se aplicara una arrowfunction, que reemplazara las coincidencias
     * deacuerdo al objeto, antes de eso, se eliminaran caracteres especiales y letras con acentos, luego, verifica si lo generado es espacio en blanco
     * de ser así. no permite la encriptación
     * */ 

    }else{
        alert("Escribe algo primero."); //Si el input no tiene texto y se intenta encriptar, se mandara esta alerta
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
        textoFinal = inputSalida.replace(/(ai|imes|enter|ober|ufat)/g, i => vowals[i]).replace(/[^a-zA-Z0-9 ]/g, '');
        text.innerText = textoFinal;
        showText();
        textVanish.innerText = "";
    }else{
        alert("TIENES QUE ESCRIBIR ALGO PRIMERO")
    }
}

function showStyle(){
    text.style.animation = "textOpacity ease 1s ";
    text.style.color = "green";
    text.style.transition = "all ease 2s"
    text.style.animation = "scaleUp ease 3s infinite"
    text.style.transform = "rotate(360deg)"

}

function copy() {
    

    let textCopy = text.textContent;
    if (textCopy) {
      navigator.clipboard.writeText(textCopy);
      
    } else {
      alert("No hay texto disponible para copiar");
    }
    text.innerHTML = "TEXTO COPIADO CON EXITO!";
    
    showStyle();
    


  }


copyButton.addEventListener('click', copy);

transcriptor.onclick = encriptador;
desTranscriptor.onclick = desEncriptador;
