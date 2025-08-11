/* Herramientas básicas para ingresar y mostrar datos en JavaScript:

1. console.log(valor): Muestra información en la consola del navegador.
  Ejemplo: console.log("Hola mundo");

2. prompt(mensaje): Permite al usuario ingresar datos por teclado.
  Ejemplo: var nombre = prompt("¿Cómo te llamas?");

3. alert(mensaje): Muestra un mensaje en una ventana emergente.
  Ejemplo: alert("Bienvenido");

4. confirm(mensaje): Muestra una pregunta de sí/no y devuelve true o false.
  Ejemplo: var respuesta = confirm("¿Estás seguro?");
*/

//-----------------------------------------------------------------------------
//                               Variables                                     |
//-----------------------------------------------------------------------------

var saludoInicial = "Hola";
saludoInicial = 4;

let edadPersona = 19;
edadPersona = "cuarenta";

const VALOR_PI = 3.14;
VALOR_PI = 3.18;

let esVerdad = true;
let ausenciaDeValor = null;

/* Resumen:
  - var: flexible, menos seguro en desuso
  - let: recomendado para variables que cambian
  - const: recomendado para valores fijos


//--------------------------------------------------------------------------
//                     TIPOS DE DATOS EN JAVASCRIPT:                       |
//--------------------------------------------------------------------------
/* 
  - string (texto)
  - number (número)
  - boolean (verdadero/falso)
  - undefined (no definido)
  - null (nulo)
  - object (objeto)
  
  */

//-----------------------------------------------------------------------------
//                           OPERADORES EN JAVASCRIPT:                         |
//-----------------------------------------------------------------------------

/*
Aritméticos:
  +  (suma)
  -  (resta)
  *  (multiplicación)
  /  (división)
  %  (módulo, resto)
  ++ (incremento)
  -- (decremento)

Comparación:
  ==   (igualdad)
  ===  (igualdad estricta)
  !=   (desigualdad)
  !==  (desigualdad estricta)
  >    (mayor que)
  <    (menor que)
  >=   (mayor o igual)
  <=   (menor o igual)

Lógicos:
  && (AND, y lógico)
  || (OR, o lógico)
  !  (NOT, negación)
*/

//-----------------------------------------------------------------------------
//                            Igualdad estricta                                |
//-----------------------------------------------------------------------------

const numero1 = 8;
const numero2 = "8";

let esIgual = numero1 === numero2;
console.log(esIgual);

//-----------------------------------------------------------------------------
//                         Condicionales y Operadores                          |
//-----------------------------------------------------------------------------

/*
 if(condicion){
  codigo a ejecutar
}
*/

//-----------------------------------------------------------------------------
//                         Ejemplo if - if-else                               |
//-----------------------------------------------------------------------------

let edad = 18;

if (edad < 18) {
  console.log("eres un joven");
} else if (edad >= 18 && edad <= 30) {
  console.log("eres un adulto");
} else {
  console.log("eres adulo Mayor");
}

console.log("hola");

//-----------------------------------------------------------------------------
//                         Ejemplo Numero Secreto                              |
//-----------------------------------------------------------------------------

let numeroSecreto = 5;
let intentoUsuario = prompt("Adivina el numero secreto (entre 1 y 10)");

intentoUsuario = Number(intentoUsuario);
console.log(typeof intentoUsuario);

if (intentoUsuario === numeroSecreto) {
  alert("Adivinaste!!");
} else {
  alert("Lo siento el numero secreto era" + numeroSecreto);
  alert(`Lo siento el numero secreto era ${numeroSecreto}`);
}

/* FOR

for(inicio; condicion; incremento){
  codigo a ejecutar varias veces
}
*/

/*
 for (let contador = 1; contador <= 5; contador++) {
  console.log("Numero", contador);
}
*/

/*
 WHILE

mientras(condicion){
  codigo a ejecutar varias veces
}

*/

/* let esMayor = false;

while (esMayor) {
  console.log("kjhasdhs");
}
 */

//-----------------------------------------------------------------------------
//                         Ejemplo Ingreso contraseña                         |
//-----------------------------------------------------------------------------

const CONTRASEÑA = 123;
let claveUsuario = "";
let intentosClave = 0;

while (claveUsuario !== CONTRASEÑA && intentosClave < 3) {
  claveUsuario = prompt(
    `Ingresa la contraseña (${intentosClave + 1} de 3 intentos)`
  );
  claveUsuario = Number(claveUsuario);

  // Validación: si el dato no es válido, no se cuenta el intento y se vuelve a pedir
  if (isNaN(claveUsuario) || claveUsuario === "" || claveUsuario === null) {
    console.log("Tienes que ingresar un dato válido");
    // 'continue' salta el resto del ciclo y vuelve a pedir la contraseña sin contar el intento
    continue;
  }

  intentosClave++;
}

if (claveUsuario === CONTRASEÑA) {
  alert("Bienvenido!!");
} else {
  alert("Acceso denegado");
}
