import { createHtmlElement } from "../functions.js";
import { ToDo } from "../classes/classes.js";

const TO_STORAGE_TODO = [];

export function todoList(entries) {
    const NEW_TODO = new ToDo(entries.title, entries.description, entries.dueDate, entries.priority);
    NEW_TODO.setStatus();
    TO_STORAGE_TODO.push(NEW_TODO);
    console.log(TO_STORAGE_TODO, 'todolist func')
}

// export function createTodoHtml() {
//     for (let i = 0; i < TO_STORAGE_TODO; i++) {
        
//     }
// }