import { createHtmlElement } from "../functions.js";
import { Project, ToDo } from "../classes/classes.js";
import { editProject, deleteProject } from "../functions.js";

import pencil from "../icon/pencil.svg";
import del from "../icon/delete.svg";

export const TO_STORAGE_PROJECTS = [];
const TO_STORAGE_TODO = [];
const DISPLAY_PROJECTS = document.getElementById('display-projects');

export function projectList(entries) {
    const NEW_PROJECT = new Project(entries.title, entries.description, entries.dueDate);
    TO_STORAGE_PROJECTS.push(NEW_PROJECT);
    console.log(TO_STORAGE_PROJECTS);
    localStorage.setItem('Projects', JSON.stringify(TO_STORAGE_PROJECTS));
};

export function displayHtmlProjects() {

    const project = JSON.parse(localStorage.getItem('Projects'));

    const htmlProject = {
        wrapper: createHtmlElement('div', 'class', 'single-project-container'),
        h3: createHtmlElement('h3', 'class', 'project-title'),
        p: createHtmlElement('p', 'class', 'project-description'),
        span: createHtmlElement('span', 'class', 'project-duedate'),
        editButton: createHtmlElement('button', 'class', 'edit'),
        deleteButton: createHtmlElement('button', 'class', 'delete'),
        imgEditButton: createHtmlElement('img', 'src', pencil),
        imgDeleteButton: createHtmlElement('img', 'src', del)
    };   

    for (let i = 0; i < project.length; i++) {
        htmlProject.h3.textContent = project[i].title;
        htmlProject.p.textContent = project[i].description;
        htmlProject.span.textContent = project[i].dueDate;
        htmlProject.editButton.classList.add('icon');
        htmlProject.deleteButton.classList.add('icon');
        htmlProject.editButton.appendChild(htmlProject.imgEditButton);
        htmlProject.deleteButton.appendChild(htmlProject.imgDeleteButton);
        htmlProject.wrapper.setAttribute('id', i);
        htmlProject.wrapper.appendChild(htmlProject.h3);
        htmlProject.wrapper.appendChild(htmlProject.p);
        htmlProject.wrapper.appendChild(htmlProject.span);
        htmlProject.wrapper.appendChild(htmlProject.editButton);
        htmlProject.wrapper.appendChild(htmlProject.deleteButton);
        DISPLAY_PROJECTS.appendChild(htmlProject.wrapper);
        htmlProject.editButton.addEventListener('click', editProject);
    };
};

export function todoList(entries) {
    const NEW_TODO = new ToDo(entries.title, entries.description, entries.dueDate, entries.priority);
    NEW_TODO.setStatus();
    TO_STORAGE_TODO.push(NEW_TODO);
    console.log(TO_STORAGE_TODO)
}

