import { Project, ToDo } from "../classes/classes.js";
import { setStorage, getStorage } from "../local-storage.js";
import { displayHtmlProjects } from "../UI.js";

export let TO_STORAGE_PROJECTS = [];
const displayContainer = document.getElementById('display-projects')

export function projectList(entries) {
    const NEW_PROJECT = new Project(entries.title, entries.description, entries.dueDate);
    const getSavedProjects = getStorage();
    console.log(getSavedProjects.length, 'projectList func')
    if (getSavedProjects) {
        getSavedProjects.push(NEW_PROJECT)
    }
    TO_STORAGE_PROJECTS.push(NEW_PROJECT);
    setStorage(getSavedProjects)
    displayContainer.innerHTML = "";
    displayHtmlProjects(getSavedProjects)
};

