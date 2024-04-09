let textarea = document.getElementById("mensaje");
let primeraCaja = document.getElementById("container__buscando");
let segundaCaja = document.getElementById("container__cargando");
let terceraCaja = document.getElementById("container__error");
let cuartaCaja = document.getElementById("container__resultados");
let botonEncriptar = document.getElementById("boton-encriptar");
let botonDesencriptar = document.getElementById("boton-desencriptar");
let botonCopiar = document.getElementById("boton-copiar");

// Texto predeterminado
textarea.value = "Ingrese el texto, click aquí por favor";

// Elimina el texto predeterminado cuando el textarea obtiene foco
textarea.addEventListener("focus", function () {
  // Verifica si el valor y tipo del textarea es el texto predeterminado
  if (textarea.value === "Ingrese el texto, click aquí por favor") {
    // Si es así, borra el texto predeterminado
    textarea.value = "";

    // Muestra el contenedor de carga y oculta los otros contenedores
    primeraCaja.style.display = "none"; // Oculta container__respuestas
    terceraCaja.style.display = "none"; // Oculta container__error
    cuartaCaja.style.display = "none"; // Oculta container__respuestas
    segundaCaja.style.display = "flex"; // Muestra container__cargando
  }
});
// Restaura el texto predeterminado si el textarea está vacío cuando pierde foco
textarea.addEventListener("blur", function () {
  if (textarea.value === "") {
    // Restaura el texto predeterminado
    textarea.value = "Ingrese el texto, click aquí por favor";

    // Oculta los contenedores excepto container__respuestas y muestra container__cargando
    primeraCaja.style.display = "flex";
    segundaCaja.style.display = "none";
    terceraCaja.style.display = "none";
    cuartaCaja.style.display = "none";
  }
});

// Función para verificar si el texto es exclusivamente minúsculas, incluyente con espacios, no caracteres especiales
function esMinusculas(texto) {
  return /^[a-z\s]+$/.test(texto);
}
// Agregar evento de clic al botón de encriptar

botonEncriptar.addEventListener("click", function () {
  //verifica botón
  console.log("es un click");
  //aplila la función "esMinusculas" para saber si los caracteres son correctos
  if (esMinusculas(textarea.value)) {
    console.log("Los caracteres son validos");
    segundaCaja.style.display = "none";
    primeraCaja.style.display = "none";
    terceraCaja.style.display = "none";
    cuartaCaja.style.display = "flex";
    //mostrar el texto sin encriptar en la cuartaCaja
    //console.log(textarea.value);

    //convertir el texto a encriptar
    //Definirlo como un string
    //mostrarenconsola
    textarea.value.toString();
    //muestra el valor de la nueva definición de string
    //console.log(stringAConvertir);

    //muestra el número de strings total
    //console.log(textarea.value.length);

    //Desarrollando la funtion
    //Definir la función
    function encriptarTexto(texto) {
      //el texto es cualquier texto
      //incovamos textarea porque es el texto valido ingresado por el usuario
      const textarea = texto

        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
      return textarea;
    }
    console.log(encriptarTexto(textarea.value));

    //Mostrar el texto al usuario
    //Definir en donde se muestra el texto en js

    let cajaTextoResultado = document.querySelector(
      ".estilo-textodesencriptado"
    );

    //cambiar el contenido del elemento en css por el textoEncriptado
    cajaTextoResultado.textContent = `${encriptarTexto(textarea.value)}`;
  } else {
    //Aparece mensaje de error cuando el usuario ingresa mal el texto
    console.log("Mensaje de error");
    segundaCaja.style.display = "none";
    primeraCaja.style.display = "none";
    cuartaCaja.style.display = "none";
    terceraCaja.style.display = "flex";
  }
});

textarea.addEventListener("input", function () {
  autoExpandTextArea(this);
});
// Función para expandir automáticamente el área de texto
function autoExpandTextArea(textArea) {
  textArea.style.height = "auto"; // Restablece la altura a 'auto' para obtener la altura de contenido real
  textArea.style.height = textArea.scrollHeight + "px"; // Establece la altura según el contenido
}

//Boton Desencriptar

botonDesencriptar.addEventListener("click", function () {
  //verifica botón
  console.log("es un click en Desencriptar");

  //convierte el valor a string
  textarea.value.toString();

  segundaCaja.style.display = "none";
  primeraCaja.style.display = "none";
  terceraCaja.style.display = "none";
  cuartaCaja.style.display = "flex";

  function desencriptarTexto(textoAEncriptar) {
    //dividimos el texto en palabras utilizando un split (" ")
    const palabras = textoAEncriptar.split(" ");
    //se aplica el reemplazo de cada palabra
    const textoDesencriptado = palabras.map((palabras) => {
      return palabras
        .replaceAll(/enter/gi, "e")
        .replaceAll(/imes/gi, "i")
        .replaceAll(/ai/gi, "a")
        .replaceAll(/ober/gi, "o")
        .replaceAll(/ufat/gi, "u");
    });
    //unimos todo el array en un solo texto conjunto
    return textoDesencriptado.join(" ");
  }
  //define variable global textoJoin ya es el texto desencriptado y convertido
  let textoJoin = desencriptarTexto(textarea.value);
  //Muestra el texto a desencriptar en la consola
  console.log(textoJoin);

  //Mostrar el texto desencriptado en la caja de resulado
  //Definir en donde se muestra el texto en js
  let cajaTextoResultado = document.querySelector(".estilo-textodesencriptado");
  //cambiar el contenido del elemento en css por el textoEncriptado
  cajaTextoResultado.textContent = `${desencriptarTexto(textarea.value)}`;
});

//botonCopiar de click
botonCopiar.addEventListener("click", function () {
  //verifica botón
  console.log("es un click en copiar");
  copiar();
});

//Definimos función copiar

function copiar() {
  // Obtener el elemento del DOM por su clase ".estilo-textodesencriptado"
  //llamamos a p de la caja 4
  textoAEscribir = document.querySelector(".estilo-textodesencriptado");

  //Lo definimos como una nueva variable dentro de la funcion
  let textoACopiar = textoAEscribir.textContent;

  //Escribir el texto en el portapapeles

  navigator.clipboard.writeText(textoACopiar).then(() => {
    // Una vez que se haya completado la escritura, leer el texto del portapapeles

    return navigator.clipboard.readText();
  });
}
