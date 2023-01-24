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
        ingreseTexto.focus();

    } else if(ingreseTexto.value.match(/^[a-z ]*$/)){

        resultado.style.visibility = "visible";
        imgCripta.style.visibility = "hidden";
        parrafoUno.style.visibility = "hidden";
        parrafoDos.style.visibility = "hidden";
        copiando.style.visibility = "visible";
        let texto = ingreseTexto.value;
        let encriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        resultado.innerHTML = encriptado;
        ingreseTexto.value = "";
        ingreseTexto.focus();

    }else{

        Toastify({
            text: "No se permiten números ni caracteres especiales!",
            className: "info",
            position: "center",
            className: 'toast-message',
            duration: "3000",
            avatar: "imagenes/001-report.png",
            style: {
              background: "linear-gradient(to right, #fe790c, #ff3232)",
              
            //   border: "0.5rem outset black",
            }
          }).showToast();
          ingreseTexto.value = "";
          ingreseTexto.focus();
    };
};

btnEncriptar.addEventListener("click", encriptar);

function desencriptar(){
    let texto = ingreseTexto.value;
    let encriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    resultado.innerHTML = encriptado;
    ingreseTexto.value = "";
    ingreseTexto.focus();
}

btnDesencriptar.addEventListener("click", desencriptar);

function copiar(txt){
    let contenido = document.getElementById('resultado').textContent;
    let input = document.createElement('input');
    input.value = contenido;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    Toastify({
        text: "Mensaje copiado exitosamente!",
        className: "info",
        position: "center",
        className: 'toast-message',
        duration: "2000",
        avatar: "imagenes/cheked24.png",
        style: {
          background: "linear-gradient(to right, #fe790c, #ff3232)",
          
        //   border: "0.5rem outset black",
        }
      }).showToast();
      ingreseTexto.value = "";
      ingreseTexto.focus();
}

copiando.addEventListener("click", copiar);



