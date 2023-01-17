let ingreseTexto = document.getElementById("ingreseTexto");
let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
let resultado = document.querySelector("#resultado");
let copiando = document.querySelector("#copiar");
let imgCripta = document.querySelector(".imagenCripta");
let parrafoUno = document.querySelector(".parrafoUno");
let parrafoDos = document.querySelector(".parrafoDos");

//(querySelector se indica . o # | getElementById no)

function encriptar() {
    if (ingreseTexto.value == "") {

        resultado.style.visibility = "hidden";
        imgCripta.style.visibility = "visible";
        parrafoUno.style.visibility = "visible";
        parrafoUno.textContent = "Debes indicarme que texto encriptar!";
        parrafoDos.style.visibility = "visible";
        copiando.style.visibility = "hidden";

    } else {

        resultado.style.visibility = "visible";
        imgCripta.style.visibility = "hidden";
        parrafoUno.style.visibility = "hidden";
        parrafoDos.style.visibility = "hidden";
        copiando.style.visibility = "visible";
        let texto = ingreseTexto.value;
        let encriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        resultado.innerHTML = encriptado;
    };
};

btnEncriptar.addEventListener("click", encriptar);

function desencriptar(){
    let texto = ingreseTexto.value;
    let encriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    resultado.innerHTML = encriptado;
}

btnDesencriptar.addEventListener("click", desencriptar);

/*function copiar(){
    navigator.clipboard.readText().then((resultado) => document.querySelector("#resultado").innerHTML = resultado);
}

copiando.addEventListener("click", copiar);
*/

/*function copiar(txt){
    resultado.value = txt;
    resultado.setAttribute("readonly", "");
    resultado.select();
    document.execCommand("copy");
    document.body.removeChild(resultado);
}

copiando.addEventListener("click", copiar);
*/

function copiar(txt){
    let contenido = document.getElementById('resultado').textContent;
    let input = document.createElement('input');
    input.value = contenido;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    alert("Texto copiado al portapapeles!");
}

copiando.addEventListener("click", copiar);



