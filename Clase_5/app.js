const lista = ["fernando", "Juan"];

// ENTIDAD / OBJETO
/*
 const task = {
  id: 1,
  descripcion: "Hacer las compras",
  venciminto: "2025-09-11",
  estado: "pendiente",
};
*/

class Task {
  constructor(id, descripcion, venciminto, estado) {
    this.id = id;
    this.descripcion = descripcion;
    this.venciminto = venciminto;
    this.estado = estado;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  saveInLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  getTaskLocalStorage() {
    const tasksinStorage = localStorage.getItem("tasks");

    if (tasksinStorage) {
      this.tasks = JSON.parse(tasksinStorage);
    }
  }

  /* deleteTask(){} */
  /* edicitTask(id){} */
  /* showTasks(){} */
}

//GENERACION DE LISTA DE TAREAS
const myTaskList = new TaskList();
myTaskList.getTaskLocalStorage();

if (myTaskList.tasks.length === 0) {
  //CREAMOS UNA TAREA
  const task1 = new Task(1, "Hacer las compras", "2025-09-11", "pendiente");
  const task2 = new Task(2, "Lavar la ropa", "2025-09-11", "pendiente");

  //AGREGAMOS TAREAS AL LISTADO
  myTaskList.addTask(task1);
  myTaskList.addTask(task2);
}

myTaskList.saveInLocalStorage();

//myTaskList.editTask(2)
console.log(myTaskList);
