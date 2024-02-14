



function encriptar() {
       
    let TextoAEncriptar = document.getElementById('TextoEncriptar').value;

    let regex = /e/g;
    let TextoEncriptado = TextoAEncriptar.replace(regex, "enter");

    regex = /i/g;
    TextoEncriptado = TextoEncriptado.replace(regex, "imes");

    regex = /a/g;
    TextoEncriptado = TextoEncriptado.replace(regex, "ai");

    regex = /o/g;
    TextoEncriptado = TextoEncriptado.replace(regex, "ober");

    regex = /u/g;
    TextoEncriptado = TextoEncriptado.replace(regex, "ufat");

    console.log(TextoEncriptado);

    document.getElementById("muneco").style.display = "none";
    document.getElementById("CopiarPegar").style.height="440px";

    document.getElementById("ningun").style.display = "none";
    document.getElementById("ingresa").style.display = "none";

    document.getElementById("CopiarPegar").textContent = TextoEncriptado;
}


function desencriptar () {
    let TextoAEncriptar = document.getElementById('TextoEncriptar').value;

    let regex = /enter/g;
    let TextoEncriptado = TextoAEncriptar.replace(regex, "e");

    regex = /imes/g;
    TextoEncriptado = TextoEncriptado.replace(regex, "i");

    regex = /ai/g;
    TextoEncriptado = TextoEncriptado.replace(regex, "a");

    regex = /ober/g;
    TextoEncriptado = TextoEncriptado.replace(regex, "o");

    regex = /ufat/g;
    TextoEncriptado = TextoEncriptado.replace(regex, "u");

    console.log(TextoEncriptado);

    document.getElementById("CopiarPegar").textContent = TextoEncriptado;
}


function copiarPegar () {
    let TextoACopiar = document.getElementById('CopiarPegar').value;
    document.getElementById("CopiarPegar").textContent = "";

    document.getElementById('TextoEncriptar').textContent = TextoACopiar;

}


function limpiar() {
    document.getElementById("CopiarPegar").textContent = "";

    document.getElementById('TextoEncriptar').textContent = "";

    document.getElementById("muneco").style.display = "";
    document.getElementById("CopiarPegar").style.height="120px";

    document.getElementById("ningun").style.display = "";
    document.getElementById("ingresa").style.display = "";

}