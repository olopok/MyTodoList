import { createElement } from "../functions.js";
import { Project, ToDo } from "../classes/classes.js";

export const TO_STORAGE_PROJECTS = [];
const TO_STORAGE_TODO = [];
const DISPLAY_PROJECTS = document.getElementById('display-projects');

export function projectList(entries) {
    const NEW_PROJECT = new Project(entries.title, entries.description, entries.dueDate);
    TO_STORAGE_PROJECTS.push(NEW_PROJECT);
};

export function todoList(entries) {
    const NEW_TODO = new ToDo(entries.title, entries.description, entries.dueDate, entries.priority);
    NEW_TODO.setStatus();
    TO_STORAGE_TODO.push(NEW_TODO);
    console.log(TO_STORAGE_TODO)
}
