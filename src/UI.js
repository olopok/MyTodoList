import { createHtmlElement } from "./functions.js";
import { editProject, deleteProject } from "./functions.js";

import pencil from "./icon/pencil.svg";
import del from "./icon/delete.svg";
import { parseJSONWithOptions } from "date-fns/fp";



export function displayHtmlProjects(project) {
    const DISPLAY_PROJECTS = document.getElementById('display-projects');


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
};
