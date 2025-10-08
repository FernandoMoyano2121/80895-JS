/* console.log("Inicio");

setTimeout(() => {
  console.log("fin");
}, 3000);

console.log("Proceso...");
 */

/* ************************* Promise *************************** */

/* Construccción de la promesa */
/* const miPromesa = new Promise((resolve, reject) => {
  console.log("Estado pendiente");

  setTimeout(() => {
    const exito = true;

    if (exito) {
      resolve("Promesa cumplida");
    } else {
      reject("Promesa rechazada");
    }
  }, 3000);
});

miPromesa
  .then((resultado) => {
    console.log(`ESTADO: CUMPLIDA`);
    console.log("Resultado :", resultado);
  })
  .catch((error) => {
    console.log(`ESTADO: RECHAZADA`);
    console.log("Error :", error);
  });
 */

/************************* async await ***************************/

function prepararCafe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;

      if (exito) {
        resolve("Promesa cumplida");
      } else {
        reject("Promesa rechazada");
      }
    }, 3000);
  });
}

async function obtenerCafe() {
  try {
    const cafe = await prepararCafe();
    console.log(`Tu cafe ya está listo ${cafe}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

obtenerCafe();
