import "./css/style.css";
import "./css/hamburger.css";
import "./css/modal.css"
import "./css/aside.css";

import hamburger from "./header.js";
import { SHOWMODAL, CLOSE_MODAL_PROJECT, PROJECT_FORM_ENTRIES } from "./modal.js";
// import { createOptionElement } from "./modal/projects-options.js";

hamburger;

const ADD_BTN = document.querySelectorAll('.add');

for (let btn of ADD_BTN) {
    btn.addEventListener('click', (e) => {
        const ID = e.target.id;
        SHOWMODAL(ID);
        });
};