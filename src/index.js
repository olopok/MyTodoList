import "./css/style.css";
import "./css/hamburger.css";
import "./css/modal.css";
import "./css/main-section.css";
import "./css/aside.css";

// import hamburger from "./header.js";
import { SHOWMODAL } from "./modal.js";
import { displayHtmlProjects, displayHtmlTodo } from "./UI.js";
import { getStorage, getTodoStorage } from "./local-storage.js";

const ADD_BTN = document.querySelectorAll('.add');

window.addEventListener('load', (e) => {
    const getSavedProjects = getStorage();
    const getSavedTodo = getTodoStorage()
    // console.log(getSavedProjects, 'index')
    if (getSavedProjects) {
        displayHtmlProjects(getSavedProjects);
        if (getSavedTodo) {
            displayHtmlTodo(getSavedTodo);
        } else alert('no saved todo')
    
    } else alert('no saved projects');
});

for (let btn of ADD_BTN) {
    btn.addEventListener('click', (e) => {
        const ID = e.target.id;
        SHOWMODAL(ID);
    });
};