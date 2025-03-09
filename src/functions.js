import { SHOWMODAL, editTodoModal } from "./modal.js";
import { clearHtmlOptionElement, editProjectsModal } from "./modal/projects-options.js";
import { TO_STORAGE_PROJECTS, displayHtmlProjects } from "./aside-content/new-project.js";
import { getStorage, setStorage, getTodoStorage, setTodoStorage } from "./local-storage.js";

let nodeList, indexStorage;

export function stringStorageDel() {
    const getSavedProjects = getStorage()
    getSavedProjects.splice(indexStorage, 1)
    console.log(getSavedProjects, 'deleted')
    setStorage(getSavedProjects)
}

export function createHtmlElement(html, attribute, value) {
    const element = document.createElement(html);
    element.setAttribute(attribute, value);
    return element;
};

function changeProjectValue(x) {
    const getSavedProjects = getStorage();
    if (x.title) {
        nodeList.item(0).textContent = x.title;
        getSavedProjects[indexStorage].title = x.title;
    };
    if (x.description) {
        nodeList.item(1).textContent = x.description;
        getSavedProjects[indexStorage].description = x.description;
    };
    if (x.dueDate) {
        nodeList.item(2).textContent = x.dueDate;
        getSavedProjects[indexStorage].dueDate = x.dueDate;
    };
    setStorage(getSavedProjects)
};

function changeTodoValue(x) {
    const regex = indexStorage.match(/(\d)$/gm)
    console.log(regex)
    const getSavedTodos = getTodoStorage();
    if (x.title) {
        nodeList.item(0).textContent = x.title;
        getSavedTodos[regex].title = x.title;
    };
    if (x.description) {
        nodeList.item(1).textContent = x.description;
        getSavedTodos[regex].description = x.description;
    };
    if (x.dueDate) {
        nodeList.item(2).textContent = x.dueDate;
        getSavedTodos[regex].dueDate = x.dueDate;
    };
    setTodoStorage(getSavedTodos)

};


export function editProject(e) {
    const id = +e.target.closest('div').id;
    indexStorage = id;
    const form = document.querySelector('#projects-form');
    const saveBtn = document.getElementById('prj-save');
    const dial = document.querySelector("#project-modal");
    const divEl = document.getElementById(id);
    nodeList = divEl.children;
    console.log(nodeList);

    SHOWMODAL(id);

    saveBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const values = Object.fromEntries(new FormData(form));
        writeNewValues(values);
        form.reset();
        editProjectsModal();
        dial.close();
    });
};

function writeNewValues(newEl) {
    changeProjectValue(newEl);
};

function writeNewTodoValues(newVal) {
    changeTodoValue(newVal)
}

export function deleteProject(e) {
    const id = e.target.closest('div').id;
    indexStorage = id;
    const parentElement = document.querySelector('#display-projects');
    const child = document.getElementById(id);
    parentElement.removeChild(child);
    stringStorageDel();
};

export function editTodo(e) {
    const id = e.target.closest('div').id;
    console.log(id, 'editTodo')
    indexStorage = id;
    const form = document.querySelector('#todo-form');
    const saveBtn = document.getElementById('todo-save');
    const dial = document.querySelector("#todo-modal");
    const divEl = document.getElementById(id);
    nodeList = divEl.children;
    console.log(nodeList);
    SHOWMODAL('todo-list', id);

    saveBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const values = Object.fromEntries(new FormData(form));
        writeNewTodoValues(values);
        clearHtmlOptionElement();
        form.reset();
        editTodoModal();
        dial.close();
    });


}