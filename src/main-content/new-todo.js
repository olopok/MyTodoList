import { createHtmlElement } from "../functions.js";
import { ToDo } from "../classes/classes.js";
import { getTodoStorage, setTodoStorage } from "../local-storage.js";
import { displayHtmlTodo } from "../UI.js";

export let TO_STORAGE_TODO = [];
const displayContainer = document.getElementById('display-todo')


export function todoList(entries) {
    const NEW_TODO = new ToDo(entries.title, entries.description, entries.dueDate, entries.priority, entries.status, entries.projectselection);
    // NEW_TODO.setStatus();
    // NEW_TODO.setProject(entries.projectselection);
    console.log(NEW_TODO, 'new-todo')
    const getSavedTodo = getTodoStorage();
    if (getSavedTodo) {
        getSavedTodo.push(NEW_TODO)
        setTodoStorage(getSavedTodo)

    } 
    TO_STORAGE_TODO.push(NEW_TODO)

    displayContainer.innerHTML = ""
    displayHtmlTodo(getSavedTodo);

    console.log(getSavedTodo, 'todolist func')
}

// export function projectList(entries) {
//     const NEW_PROJECT = new Project(entries.title, entries.description, entries.dueDate);
//     const getSavedProjects = getStorage();
//     console.log(getSavedProjects.length, 'projectList func')
//     if (getSavedProjects) {
//         getSavedProjects.push(NEW_PROJECT)
//     }
//     TO_STORAGE_PROJECTS.push(NEW_PROJECT);
//     setStorage(getSavedProjects)
//     displayContainer.innerHTML = "";
//     displayHtmlProjects(getSavedProjects)
// };
