"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Use proper type for tasks array
var tasks = [];
// add a new task
function addTask(task) {
    tasks.push(task);
}
// view all tasks
function viewTasks() {
    return tasks;
}
// update a task
function updateTask(id, task) {
    tasks[id] = task;
}
// delete a task
function deleteTask(id) {
    tasks.splice(id, 1);
}
// test the functions
addTask({ id: 1, name: 'Task 1', description: 'Description 1' });
console.log(viewTasks());
updateTask(0, { id: 1, name: 'Task 2', description: 'Description 2' });
console.log(viewTasks());
deleteTask(0);
console.log(viewTasks());
