import "./css/style.css";
import "./css/hamburger.css";
import "./css/aside.css";

import hamburger from "./header.js";
import { MODAL } from "./modal.js";

hamburger;

const ADD_BTN = document.querySelectorAll('.add');

for (let btn of ADD_BTN) {
    btn.addEventListener('click', (e) => {
        const ID = e.target.id;
        MODAL.SHOWMODAL(ID);
        // MODAL.FORM_ENTRIES();

    });
};
