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

export function clearHtmlOptionElement () {
    HTML_OPTION_ELEMENT = [];
    const SEL = document.getElementById('project-selection');
    SEL.innerHTML = "";
}