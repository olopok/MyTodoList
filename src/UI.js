import { createHtmlElement, editTodo } from "./functions.js";
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

export function displayHtmlTodo(todo) {

    const displayTodo = document.getElementById('display-todo')


    for (let i = 0; i < todo.length; i++) {
        const htmlTodo = {
            wrapper: createHtmlElement('div', 'class', 'single-todo-container'),
            h3: createHtmlElement('h3', 'class', 'todo-title'),
            p: createHtmlElement('p', 'class', 'todo-description'),
            span: createHtmlElement('span', 'class', 'todo-duedate'),
            span1: createHtmlElement('span', 'class', 'priority'),
            span2: createHtmlElement('span', 'class', 'status'),
            span3: createHtmlElement('span', 'class', 'projectowner'),
            editButton: createHtmlElement('button', 'class', 'edit'),
            deleteButton: createHtmlElement('button', 'class', 'delete'),
            imgEditButton: createHtmlElement('img', 'src', pencil),
            imgDeleteButton: createHtmlElement('img', 'src', del),
        };

        htmlTodo.p.textContent = todo[i].description;
        htmlTodo.h3.textContent = todo[i].title;
        htmlTodo.span.textContent = todo[i].dueDate;
        htmlTodo.span1.textContent = todo[i].priority;
        htmlTodo.span2.textContent = todo[i].status;
        htmlTodo.span3.textContent = todo[i].project;
        htmlTodo.editButton.classList.add('icon');
        htmlTodo.deleteButton.classList.add('icon');
        htmlTodo.editButton.appendChild(htmlTodo.imgEditButton);
        htmlTodo.deleteButton.appendChild(htmlTodo.imgDeleteButton);
        htmlTodo.wrapper.setAttribute('id', 'todo'+i);
        htmlTodo.wrapper.appendChild(htmlTodo.h3);
        htmlTodo.wrapper.appendChild(htmlTodo.p);
        htmlTodo.wrapper.appendChild(htmlTodo.span);
        htmlTodo.wrapper.appendChild(htmlTodo.span1);
        htmlTodo.wrapper.appendChild(htmlTodo.span2);
        htmlTodo.wrapper.appendChild(htmlTodo.span3);
        htmlTodo.wrapper.appendChild(htmlTodo.editButton);
        htmlTodo.wrapper.appendChild(htmlTodo.deleteButton);
        displayTodo.appendChild(htmlTodo.wrapper);
        htmlTodo.editButton.addEventListener('click', editTodo);
        // htmlTodo.deleteButton.addEventListener('click', deleteProject);
    }

}
