/* let saludo="Hola"
saludo="Hola como estás?" */

/* function saludar(){
  console.log("Hola como estás?")
}
saludar() */

/* function saludar(mensaje){
  console.log(mensaje)
}

saludar("Hola") */


/* function sumar(a, b){
  return a + b
}

function multiplicar(a, b){
  return a * b
}

function dividir(a, b){
  return a / b
}
 */
/* funciones de orden superior */
/* function calcular(a, b, operacion){
  return operacion(a, b)
}

console.log(calcular(8, 10, sumar))

const resultado = calcular(9, 20, multiplicar);
console.log(resultado);
 */

/* function puedeVotar(edad){
  return edad > 18
}

function puedeBeber(edad){
  return edad > 21
}

function verificarEdad(edad, condicion){
  return condicion(edad)
}

console.log(verificarEdad(18,puedeVotar)) */


/* for(let index = 0; index < miArray.length; index++){
  const elemento=miArray[index]
  console.log(elemento)
  } */
 
 /* for (let index = 0; index < miArray.length; index++) {
  const element = miArray[index];
  console.log(element)
  } */
 
 /* FOREACH */
 /* 
 miArray.forEach((elemento) => console.log(elemento))
 
 function PorCadaUno(arr, funcionInferior){
  for (const elemento of arr) {
    funcionInferior(elemento)
    }
    }
    
    PorCadaUno(miArray, console.log) */
    
/* const miArray=[ 1,2,3,4,5,6,7,10,16,19]
 */
/* const numeroMayorADiez = miArray.find(( elemento ) => elemento > 10)
console.log(numeroMayorADiez); */

/* const numeroMayoresADiez = miArray.filter((elemento)=>elemento > 10)
console.log(numeroMayoresADiez);

numeroMayoresADiez.forEach((numero)=>console.log(numero)) */


/* const cursos=[
  {nombre:"javascript", precio:40000},
  {nombre:"React", precio:1000000},
  {nombre:"sql", precio:30000},
  {nombre:"Desarrollo Web", precio:15000}
]

const cursosBaratos = cursos.filter((curso) => curso.precio < 40000)
console.log(cursosBaratos);

const nombreCursosBaratos = cursosBaratos.map((curso) => curso.nombre)
console.log(nombreCursosBaratos);

const existeSql = cursosBaratos.some((curso) => curso.nombre === "sql")
console.log(existeSql);

if(existeSql){
  alert("Existe sql")
}
 */

/* let total=10
total+=5 */

/* const miArray = [1, 2, 3, 4, 5, 15];

const total = miArray.reduce((acumulador, elemento) => acumulador + elemento )
console.log(total)
 */






