let tareas = "";
let numeroDeTareas = 0;

alert("Bienvenido al gestor de tareas!!!");

function mostrarOpciones() {
  return prompt(
    "Ingresa una opcion para continuar\n 1. Ingresa una nueva tarea \n 2. Ver tareas\n 3. Salir"
  );
}

function agregarTarea() {
  let nuevaTarea = prompt("Ingresa una nueva tarea");

  if (nuevaTarea && nuevaTarea.trim() !== "" && isNaN(nuevaTarea)) {
    numeroDeTareas++;
    tareas += `${numeroDeTareas}. ${nuevaTarea}\n`;

    alert("✅ tarea agregada con exito!!");
  } else {
    alert("Ingresa la tarea en un formato valido");
  }
}

function mostrarTareas() {
  if (numeroDeTareas === 0) {
    alert("No tienes tareas pendientes");
  } else {
    alert(`Listado actual de tareas:\n${tareas}`);
  }
}

function main() {
  let opcion = mostrarOpciones();

  while (opcion !== "3") {
    switch (opcion) {
      case "1":
        agregarTarea();
        break;
      case "2":
        mostrarTareas();
        break;
      default:
        console.log("por favor ingresa una opcion valida");
        break;
    }

    opcion = mostrarOpciones();
  }

  alert("👍🏻👍🏻 Nos vemos pronto!!!");
}

main();
