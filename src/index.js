import "./css/style.css";
import "./css/hamburger.css";
import "./css/aside.css";

import hamburger from "./header.js";
import { MODAL } from "./modal.js";

hamburger;
const ADD_PROJECT = document.querySelector('#project-list');
ADD_PROJECT.addEventListener('click', () => {
    const ID = ADD_PROJECT.id;
    MODAL.SHOWCLOSEMODAL();
    MODAL.CREATE_FORM(ID);
});

const ADD_TODO = document.querySelector('#todo-list');
ADD_TODO.addEventListener('click', () => {
    const ID = ADD_TODO.id;
    MODAL.SHOWCLOSEMODAL();
    MODAL.CREATE_FORM(ID);
})