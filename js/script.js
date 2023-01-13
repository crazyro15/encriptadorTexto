let ingreseTexto = document.getElementById("#ingreseTexto");
let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.getElementById("#desencriptar");
let resultado = document.querySelector("#resultado");
let copiar = document.querySelector("#copiar");
let imgCripta = document.querySelector(".imagenCripta");
let parrafoUno = document.querySelector(".parrafoUno");
let parrafoDos = document.querySelector(".parrafoDos");


function mostrar(){
    resultado.style.visibility = "visible";
    imgCripta.style.visibility = "hidden";
    parrafoUno.style.visibility = "hidden";
    parrafoDos.style.visibility = "hidden";
    copiar.style.visibility = "visible";
}

btnEncriptar.addEventListener("click", mostrar);
// function encriptar(letras){
//     switch(letras) {
//         case 'a':
//           return 'ia';
//         case 'e':
//           return 'enter';
//         case 'i':
//           return 'imes';
//         case 'o':
//           return 'ober';
//         case 'u':
//           return 'ufat';
//         default:
//           return letras;
//       }
// }
// function mostrar(){
//     let resultado = document.querySelector("#testAreaRespuesta");
//     resultado.style.backgroundColor = red;
    
// }

//btnEncriptar.addEventListener('click',mostrar,true);