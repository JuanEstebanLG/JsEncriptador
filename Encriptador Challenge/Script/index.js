let transcriptor = document.getElementById("transcriptor");
let desTranscriptor = document.getElementById("desTranscriptor");
let text = document.getElementById('text');
let copyButton = document.getElementById('copyButton');
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 


function showText(){
    let displayNotFound = document.getElementById("principal-container-media_first");
    let displayText = document.getElementById("principal-container-media-second");

    displayNotFound.style.display = 'none';
    displayText.style.display = 'flex';
}

function encriptador (){
    let input = document.getElementById("input-text").value;
    let arr = input.toLowerCase().split("");
   
    let finalArr = [];
    let textofinal;


    if(arr.length > 0){

        for(let i = 0; i < arr.length; i++){
    
            if(arr[i] == 'e'){
                arr[i] = 'enter';
                finalArr.push(arr[i])
            }else if(arr[i] == 'a'){
                arr[i] = 'ai';
                finalArr.push(arr[i]);
            }else if(arr[i] == 'i'){
                arr[i] = "imes";
                finalArr.push(arr[i]);
            }else if(arr[i] == 'o'){
                arr[i] = "ober";
                finalArr.push(arr[i]);
            }else if(arr[i] == 'u'){
                arr[i] = "ufat";
                finalArr.push(arr[i]);
            }
            else{
                finalArr.push(arr[i]);
            }
            
        
        }
        textofinal = finalArr.join("");
    
     
       text.innerText = textofinal
    
        showText();
    }else{
        alert("Escribe algo primero.")
    }
}
    
function desEncriptador(){
    let input = document.getElementById("input-text").value;
    
    let arr = input.toLowerCase().split("");
    let arrFinal = [];
    let textoFinal;

    if(arr.length > 0){

        for(let j = 0; j < arr.length; j++){
    
            if(arr[j] == 'a' && arr[j+1] == 'i'){
                arr[j] = 'a'; 
                arrFinal.push(arr[j]);
                j++; 
            }else if (arr[j] == 'e' && arr[j+1] == 'n' && arr[j+2] == 't' && arr[j+3] == 'e' && arr[j+4] == 'r'){
                arr[j] = 'e';
                arrFinal.push(arr[j]);
                j += 4; 
            }else if (arr[j] == 'i' && arr[j+1] == 'm' && arr[j+2] == 'e' && arr[j+3] == 's'){
                arr[j] = 'i';
                arrFinal.push(arr[j]);
                j += 3; 
            }else if (arr[j] == 'o' && arr[j+1] == 'b' && arr[j+2] == 'e' && arr[j+3] == 'r'){
                arr[j] = 'o';
                arrFinal.push(arr[j]);
                j += 3; 
            }else if( arr[j] == 'u' && arr[j+1] == 'f' && arr[j+2] == 'a' && arr[j+3] == 't' ){
                arr[j] = 'u';
                arrFinal.push(arr[j]);
                j += 3; 
            }else{
                arrFinal.push(arr[j])
            }
        }
        textoFinal = arrFinal.join("");
        text.innerText = textoFinal

        showText();
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
  }
copyButton.addEventListener('click', copy);

transcriptor.onclick = encriptador;
desTranscriptor.onclick = desEncriptador;
