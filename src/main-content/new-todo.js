import { ToDo } from "../classes/classes.js";
import { getTodoStorage, setTodoStorage } from "../local-storage.js";
import { displayHtmlTodo } from "../UI.js";

export let TO_STORAGE_TODO = [];
const displayContainer = document.getElementById('display-todo')


export function todoList(entries) {
    const NEW_TODO = new ToDo(entries.title, entries.description, entries.dueDate, entries.priority, entries.status, entries.projectselection);
    NEW_TODO.setStatus();
    console.log(NEW_TODO, 'new-todo')
    const getSavedTodo = getTodoStorage();
    if (getSavedTodo) {
        getSavedTodo.push(NEW_TODO)
        setTodoStorage(getSavedTodo)
        displayContainer.innerHTML = ""
        displayHtmlTodo(getSavedTodo);
    } else if (!getSavedTodo) {
    TO_STORAGE_TODO.push(NEW_TODO)
    displayContainer.innerHTML = ""
    displayHtmlTodo(TO_STORAGE_TODO);
    setTodoStorage(TO_STORAGE_TODO)
    console.log(getSavedTodo, 'todolist func')
    }
}