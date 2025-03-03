import { TO_STORAGE_PROJECTS } from "../aside-content/new-project.js";
import { createHtmlElement } from "../functions.js";

let HTML_OPTION_ELEMENT = [];

export function createOptionElement() {
    for (const x of TO_STORAGE_PROJECTS) {
        HTML_OPTION_ELEMENT.push(x.title);
        console.log(HTML_OPTION_ELEMENT)
        for (const y in HTML_OPTION_ELEMENT) {
            const EL = createHtmlElement('option', 'value', HTML_OPTION_ELEMENT[y]);
            EL.textContent = HTML_OPTION_ELEMENT[y];
            const SEL = document.getElementById('project-selection');
            SEL.appendChild(EL);
            HTML_OPTION_ELEMENT = [];
        };
    };

};

export function clearHtmlOptionElement() {
    HTML_OPTION_ELEMENT = [];
    const SEL = document.getElementById('project-selection');
    SEL.innerHTML = "";
};

export function editProjectsModal(id) {
    const getBtnSub = document.querySelector('#project-submit');
    const getBtnSave = document.querySelector('#prj-save');
    if (typeof id === 'number') {
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
};