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
  constructor(id, descripcion, vencimiento, estado) {
    this.id = id;
    this.descripcion = descripcion;
    this.vencimiento = vencimiento;
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

  /* deleteTask(){} --find() --filter()*/
  /* showTasks(){} --forEach() */

  editTask(id, updateTask){
    const taskToEdit = this.tasks.find( (task) => task.id === id)
    if(taskToEdit){
      taskToEdit.descripcion = updateTask.descripcion
      taskToEdit.vencimiento = updateTask.vencimiento
      taskToEdit.estado = updateTask.estado
    }else{
      alert("No se encontro la tarea")
    }

    this.saveInLocalStorage()
  }
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

  //EDITAR TAREA
  myTaskList.editTask(1, {
    descripcion:"Hacer compras",
    vencimiento:"2025-09-16",
    estado:"en progreso"
  })
}

myTaskList.saveInLocalStorage();

//myTaskList.editTask(2)
console.log(myTaskList);
