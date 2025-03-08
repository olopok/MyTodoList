import { SHOWMODAL } from "./modal.js";
import { editProjectsModal } from "./modal/projects-options.js";
import { TO_STORAGE_PROJECTS, displayHtmlProjects } from "./aside-content/new-project.js";
import { getStorage, setStorage } from "./local-storage.js";

let nodeList, indexStorage;

export function stringStorageDel(){
    const getSavedProjects = getStorage()
    getSavedProjects.splice(indexStorage, 1)
    console.log(getSavedProjects,'deleted')
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

export function deleteProject(e) {
    const id = e.target.closest('div').id;
    indexStorage = id;
    const parentElement = document.querySelector('#display-projects');
    const child = document.getElementById(id);
    parentElement.removeChild(child);
    stringStorageDel();
};