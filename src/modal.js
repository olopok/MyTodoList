// import {NEW_PROJECT} from "./aside-content/new-project.js"
import { Project } from "./classes/classes.js";


const MODAL = (() => {
    const DIAL = document.querySelector(".modal");
    let entries;
    const EL = document.querySelector('.priority-list');


    const SHOWMODAL = (ID) => {
        if (ID === 'project-list') {
            EL.classList.toggle('none');

            DIAL.showModal();
            CLOSEMODAL()
            FORM_ENTRIES()
        } else {
            EL.classList.remove('none');

            DIAL.showModal();
            CLOSEMODAL()
            FORM_ENTRIES()
        }
    };

    const CLOSEMODAL = () => {
        document.getElementById('cancel').addEventListener('click', () => {
            document.querySelector('form').reset();
            DIAL.close();
        });
    }


    const FORM_ENTRIES = () => {
        DIAL.addEventListener('submit', (e) => {
            e.preventDefault();
            const FORM = document.querySelector('form');
            entries = Object.fromEntries(new FormData(FORM));
            NEW_PROJECT(entries);
            FORM.reset();
            DIAL.close()
        })
    }

    const TO_STORAGE = [];

    const NEW_PROJECT = (entries) => {
        const PROJECT = new Project(entries.title, entries.description, entries.startDate);
        TO_STORAGE.push(PROJECT);
        console.log(TO_STORAGE)
        // localStorage.setItem("projects", JSON.stringify(TO_STORAGE));
    };

    return { SHOWMODAL, FORM_ENTRIES, TO_STORAGE };

})();

export { MODAL }