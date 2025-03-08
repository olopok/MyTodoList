import "./css/style.css";
import "./css/hamburger.css";
import "./css/modal.css"
import "./css/aside.css";

// import hamburger from "./header.js";
import { SHOWMODAL } from "./modal.js";
import { displayHtmlProjects } from "./UI.js";
import { getStorage } from "./local-storage.js";

const ADD_BTN = document.querySelectorAll('.add');

window.addEventListener('load', () => {
    const getSavedProjects = getStorage();
    console.log(getSavedProjects, 'index')
    if (getSavedProjects) {
        displayHtmlProjects(getSavedProjects);
    } else alert('no saved data')
});

for (let btn of ADD_BTN) {
    btn.addEventListener('click', (e) => {
        const ID = e.target.id;
        SHOWMODAL(ID);
    });
};