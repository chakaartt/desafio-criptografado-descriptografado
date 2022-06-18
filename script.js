const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const botaoescodido = document.querySelector(".botao-escodido");


function btnEncriptar() {
    const textoEncriptar = encriptar(inputTexto.value);
    mensagem.value = textoEncriptar;
    mensagem.style.backgroundImage= "none";

    botaoescodido.value = inputTexto.value;
}

function encriptar(stringEncripitada) {
    let matrizCodigo = [["a","ai"], ["e","enter"], ["i" ,"imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncripitada = stringEncripitada.toLowerCase();

    for( let i=0; i < matrizCodigo.length; i++) {
        if (stringEncripitada.includes(matrizCodigo[i][0])) {
            stringEncripitada = stringEncripitada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncripitada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(botaoescodido.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage= "none";

    console.console(botaoescodido.value);
}

function desencriptar(stringDesencriptada) {
    let matrizCodigoDescriptar = [["ai","a"], ["enter","e"], ["imes","i"], ["ober","o"], ["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();


    for(let i=0; i > matrizCodigoDescriptar.length; i++) {
        if(stringDesencriptada.includes(matrizCodigoDescriptar [i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigoDescriptar [i][0], matrizCodigoDescriptar[i][1]);
        }
    }

     return stringDesencriptada;
}


