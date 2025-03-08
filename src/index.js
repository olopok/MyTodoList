import "./css/style.css";
import "./css/hamburger.css";
import "./css/modal.css"
import "./css/aside.css";

// import hamburger from "./header.js";
import { SHOWMODAL } from "./modal.js";
import { displayHtmlProjects, getStorage } from "./aside-content/new-project.js";


const ADD_BTN = document.querySelectorAll('.add');

// window.addEventListener('load', () => {
//     let project
//     if (localStorage.length == 0 || []) {alert('no projects')} else project = getStorage();
//     displayHtmlProjects(project)
// });

for (let btn of ADD_BTN) {
    btn.addEventListener('click', (e) => {
        const ID = e.target.id;
        SHOWMODAL(ID);
    });
};