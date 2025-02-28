import { projectList, todoList } from "./aside-content/new-project";
import { createOptionElement, clearHtmlOptionElement} from "./modal/projects-options.js";
import { displayHtmlProjects } from "./aside-content/new-project.js";


    const DIAL_PROJECT = document.querySelector("#project-modal");
    const DIAL_TODO = document.querySelector('#todo-modal')
    const EL = document.querySelector('.priority-list');
    const FORM_PROJECT = document.querySelector('#projects-form');
    const FORM_TODO = document.querySelector('#todo-form');
    let FORM_ENTRIES;

    const SHOWMODAL = (ID) => {
        if (ID === 'project-list') {
            DIAL_PROJECT.showModal();
            CLOSE_MODAL_PROJECT();
            PROJECT_FORM_ENTRIES();
        };
        if (ID === 'todo-list') {
            createOptionElement();
            DIAL_TODO.showModal();
            CLOSE_MODAL_TODO();
            TODO_FORM_ENTRIES();
        };
    };

   const CLOSE_MODAL_PROJECT = () => {
        document.getElementById('cancel-project').addEventListener('click', () => {
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
            // debugger
            projectList(FORM_ENTRIES);
            displayHtmlProjects();
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
            FORM_TODO.reset();
            DIAL_TODO.close();
        });
    };

export { SHOWMODAL, CLOSE_MODAL_PROJECT, PROJECT_FORM_ENTRIES }