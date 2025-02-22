import { createHtmlElement } from "../functions.js";
import { Project, ToDo } from "../classes/classes.js";
import pencil from "../icon/pencil.svg";
import del from "../icon/delete.svg";

export const TO_STORAGE_PROJECTS = [];
const TO_STORAGE_TODO = [];
const DISPLAY_PROJECTS = document.getElementById('display-projects');

export function projectList(entries) {
    const NEW_PROJECT = new Project(entries.title, entries.description, entries.dueDate);
    TO_STORAGE_PROJECTS.push(NEW_PROJECT);
    console.log(TO_STORAGE_PROJECTS)
    localStorage.setItem('Projects', JSON.stringify(TO_STORAGE_PROJECTS));
};

export function todoList(entries) {
    const NEW_TODO = new ToDo(entries.title, entries.description, entries.dueDate, entries.priority);
    NEW_TODO.setStatus();
    TO_STORAGE_TODO.push(NEW_TODO);
    console.log(TO_STORAGE_TODO)
}

export function createHtmlProject() {
    const displayProjects = localStorage.getItem('Projects');
    if (displayProjects) {
        const userProjects = JSON.parse(displayProjects);
        console.log(userProjects);
        for (let i = 0; i < userProjects.length; i++) {
            const div = createHtmlElement('div', 'id', i);
            div.classList.add('single-project-container');
            const userProjectTitle = createHtmlElement('h3');
            const userProjectDescription = createHtmlElement('p');
            const userProjectDate = createHtmlElement('span');
            const htmlEl = userProjects[i];
            userProjectTitle.textContent = `${htmlEl.title}`;
            userProjectDescription.textContent = `${htmlEl.description}`;
            userProjectDate.textContent = `${htmlEl.dueDate}`;
            div.appendChild(userProjectTitle);
            div.appendChild(userProjectDescription);
            div.appendChild(userProjectDate);
            console.log(htmlEl); 
            DISPLAY_PROJECTS.appendChild(div);
            const btnPencil = createHtmlElement('button', 'type', 'button');
            const pencilIcon = createHtmlElement('img', 'src', pencil);
            pencilIcon.classList.add('icon');
            btnPencil.appendChild(pencilIcon);
            const btnDel = createHtmlElement('button', 'type', 'button');
            const deleteIcon = createHtmlElement('img', 'src', del);
            deleteIcon.classList.add('icon');
            btnDel.appendChild(deleteIcon);
            div.appendChild(btnPencil);
            div.appendChild(btnDel);
        };
    };

};