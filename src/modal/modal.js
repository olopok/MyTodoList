import { projectList } from "../aside-content/new-project";
import { createOptionElement, clearHtmlOptionElement, editProjectsModal } from "./projects-options.js";
import { todoList } from "../main-content/new-todo.js";

const DIAL_PROJECT = document.querySelector("#project-modal");
const DIAL_TODO = document.querySelector('#todo-modal')
// const EL = document.querySelector('.priority-list');
const FORM_PROJECT = document.querySelector('#projects-form');
const FORM_TODO = document.querySelector('#todo-form');
let FORM_ENTRIES;

const SHOWMODAL = (ID, editId) => {
    if (ID === 'project-list') {
        DIAL_PROJECT.showModal();
        CLOSE_MODAL_PROJECT();
        PROJECT_FORM_ENTRIES();
    };
    if (ID === 'todo-list') {
        editTodoModal(editId)
        createOptionElement();
        DIAL_TODO.showModal();
        CLOSE_MODAL_TODO();
        TODO_FORM_ENTRIES();
    };
    if (typeof ID == 'number') {
        editProjectsModal(ID);
        DIAL_PROJECT.showModal();
        CLOSE_MODAL_PROJECT();
    }
};

const CLOSE_MODAL_PROJECT = () => {
    document.getElementById('cancel-project').addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        const id = e.target.id
        editProjectsModal(id);
        FORM_PROJECT.reset();
        DIAL_PROJECT.close();
    });
};

const CLOSE_MODAL_TODO = () => {
    document.getElementById('cancel-todo').addEventListener('click', () => {
        FORM_TODO.reset();
        clearHtmlOptionElement();
        DIAL_TODO.close();
    });
};

const PROJECT_FORM_ENTRIES = () => {
    DIAL_PROJECT.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        FORM_ENTRIES = Object.fromEntries(new FormData(FORM_PROJECT));
        projectList(FORM_ENTRIES);
        const id = e.target.id
        editProjectsModal(id);
        FORM_PROJECT.reset();
        DIAL_PROJECT.close();
    });
};

const TODO_FORM_ENTRIES = () => {
    DIAL_TODO.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        FORM_ENTRIES = Object.fromEntries(new FormData(FORM_TODO));
        todoList(FORM_ENTRIES);
        clearHtmlOptionElement();
        const id = e.target.id;
        editTodoModal(id)
        FORM_TODO.reset();
        DIAL_TODO.close();
    });
};

function editTodoModal(id){
    const getBtnSub = document.querySelector('#todo-submit');
    const getBtnSave = document.querySelector('#todo-save');
    if ( /.(\d)$/gm.test(id)) {
        if (getBtnSub.classList.contains('active')) {
            getBtnSub.classList.remove('active');
            getBtnSub.classList.add('none')
        };
        getBtnSave.classList.add('active');
        getBtnSave.classList.remove('none');
    } else if (typeof id !== 'number') {
        if (getBtnSave.classList.contains('active')) {
            getBtnSave.classList.remove('active');
            getBtnSave.classList.add('none');
        };
        getBtnSub.classList.remove('none');
        getBtnSub.classList.add('active');
    }

}

export { SHOWMODAL, CLOSE_MODAL_PROJECT, PROJECT_FORM_ENTRIES, editTodoModal }