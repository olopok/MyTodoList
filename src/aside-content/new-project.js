import { createElement } from "../functions.js";
import { Project, ToDo } from "../classes/classes.js";

const TO_STORAGE_PROJECTS = [];
const TO_STORAGE_TODO = [];
const DISPLAY_PROJECTS = document.getElementById('display-projects');

export function projectList(entries) {
    const NEW_PROJECT = new Project(entries.title, entries.description, entries.dueDate);
    // console.log(NEW_PROJECT);
    TO_STORAGE_PROJECTS.push(NEW_PROJECT);
console.log(TO_STORAGE_PROJECTS)
};

export function todoList(entries) {
    const NEW_TODO = new ToDo(entries.title, entries.description, entries.dueDate, entries.priority);
    NEW_TODO.setStatus();
    console.log(NEW_TODO);
    TO_STORAGE_TODO.push(NEW_TODO);
}
