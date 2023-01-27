/*Declaro una variable para captar lo que el usuario escriba, y para lo que va salir*/
const textArea = document.querySelector(".text-in");
const mensaje = document.querySelector(".mensaje");
const textOut = document.querySelector(".text-out");
const mensajeVacio = document.querySelector(".display_vacio");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function validarTexto(){
    let textoEscrito = document.querySelector(".text-in").value;
    let validador = textoEscrito.match(/^[a-z]*$/);
    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){ //recorro cadauna de las llaves de encriptacion
        if(stringEncriptada.includes(matrizCodigo[i][0])){ //consulto si en el mensaje está la letra a encriptar, por eso pongo la posición 0 de la tabla de llaves.
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);//reemplazo la letra encontrada por la llave que esta en la posición 1.
        }
    }

    return stringEncriptada;
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        textOut.style.display = "flex";
        mensajeVacio.style.display = "none";
    }   
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){ //recorro cadauna de las llaves de encriptacion
        if(stringDesencriptada.includes(matrizCodigo[i][1])){ //consulto si en el mensaje está la llave a desencriptar, por eso pongo la posición 1 de la tabla de llaves.
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);//reemplazo la llave encontrada por la letra que esta en la posición 0.
        }
    }

    return stringDesencriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    textOut.style.display = "flex";
    mensajeVacio.style.display = "none";
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}