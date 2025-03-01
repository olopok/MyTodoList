import { SHOWMODAL, CLOSE_MODAL_PROJECT } from "./modal.js";

export function createHtmlElement(html, attribute, value) {
    const element = document.createElement(html);
    element.setAttribute(attribute, value);
    return element;
};

export function editProject(e) {
               const id = +e.target.closest('div').id;
            //    console.log(typeof node);
                SHOWMODAL(id);
}

