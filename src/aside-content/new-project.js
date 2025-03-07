import { createHtmlElement } from "../functions.js";
import { Project, ToDo } from "../classes/classes.js";
import { editProject, deleteProject, TO_STORAGE_PROJECTSString } from "../functions.js";

import pencil from "../icon/pencil.svg";
import del from "../icon/delete.svg";
import { parseJSONWithOptions } from "date-fns/fp";

export let TO_STORAGE_PROJECTS = [];
const DISPLAY_PROJECTS = document.getElementById('display-projects');


export function projectList(entries) {
    const NEW_PROJECT = new Project(entries.title, entries.description, entries.dueDate);
    // TO_STORAGE_PROJECTS.push(NEW_PROJECT);
    // console.log(TO_STORAGE_PROJECTS, 'projectList func');
    setStorage(NEW_PROJECT);
    // localStorage.setItem('Projects', JSON.stringify(TO_STORAGE_PROJECTS));
    // displayHtmlProjects()
};
// let index = 0
export function displayHtmlProjects(project) {
    // const project = JSON.parse(localStorage.getItem('Projects'));
    // console.log(project, 'parsed')

    for (let i = 0; i < project.length; i++) {
        const htmlProject = {
            wrapper: createHtmlElement('div', 'class', 'single-project-container'),
            h3: createHtmlElement('h3', 'class', 'project-title'),
            p: createHtmlElement('p', 'class', 'project-description'),
            span: createHtmlElement('span', 'class', 'project-duedate'),
            editButton: createHtmlElement('button', 'class', 'edit'),
            deleteButton: createHtmlElement('button', 'class', 'delete'),
            imgEditButton: createHtmlElement('img', 'src', pencil),
            imgDeleteButton: createHtmlElement('img', 'src', del),
        };

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
        htmlProject.deleteButton.addEventListener('click', deleteProject);
    }
    // index++
};

function setStorage(arr) {
    let items = [];

    if (localStorage.length == 0) {
        localStorage.setItem('Projects', JSON.stringify(arr));
    }
    else
        items.push(getStorage())
    items.push(arr);
    items = items.flat(Infinity)
    localStorage.setItem('Projects', JSON.stringify(items));

    console.log(items, 'set')
};

export function getStorage() {
    // if (localStorage.length !== 0) {
    // let item;
    // for (let i = 0; i < localStorage.length; i++) {
    const item = JSON.parse(localStorage.getItem('Projects'));
    console.log(item)
    // }
    // }
    return item;
}
