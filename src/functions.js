import { CLOSE_MODAL_PROJECT } from "./modal";

export function createHtmlElement(html, attribute, value) {
    const element = document.createElement(html);
    element.setAttribute(attribute, value);
    return element;
};

