/* INDENTIFICANDO ELEMENTOS HTML */

console.log(document.body);

const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.nodeName);
console.log(titulo.textContent);

/* INSERTANDO html DESDE JAVASCRIPT */

const contenedor1 = document.getElementById("contenedor1");
console.log(contenedor1);

/* creando variable */
const saludo = "Hola queridos";

/* interpolando variable */
contenedor1.innerHTML = `<p>${saludo} alumnos</p>`;
console.log(contenedor1);

/* SELECTOR DE CLASE */

/* const contenedor2 = document.getElementsByClassName("contenedor2");
console.log(contenedor2); */

/* const contador = 0;

for (let index = 0; index < 4; index++) {
  contador++;
}
console.log(contador);
 */

/* QUERYSELECTOR */

//const contenedor3 = document.querySelector(".contenedor3");
const contenedor3 = document.querySelectorAll(".contenedor3");
console.log(contenedor3);

/* CREAR ELEMENTO HTML E INSERTARLO  */

const contenedorDiv = document.getElementById("contenedorDiv");

/* creacion del elemento */
const div = document.createElement("div");

/* le agregamos texto */
div.textContent = "Dom y Eventos";

contenedorDiv.appendChild(div);

/* EVENTOS */

function mensaje() {
  alert("hiciste click en el contenedor");
}

/* contenedorDiv.addEventListener("click", function () {
  alert("hiciste click en el contenedor");
}); */

contenedorDiv.addEventListener("click", mensaje);
contenedorDiv.removeEventListener();
