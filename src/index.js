import "./css/style.css";
import "./css/hamburger.css";
import "./css/modal.css"
import "./css/aside.css";

// import hamburger from "./header.js";
import { SHOWMODAL} from "./modal.js";
import { displayHtmlProjects } from "./aside-content/new-project.js";

// window.addEventListener('load', () => {
//     const prj = JSON.parse(localStorage.getItem('Projects'))
//     for (let i=0; i< prj.length; i++){
//         displayHtmlProjects();
//     }
// })

const ADD_BTN = document.querySelectorAll('.add');

for (let btn of ADD_BTN) {
    btn.addEventListener('click', (e) => {
        const ID = e.target.id;
        SHOWMODAL(ID);
        });
};

