import { Project, ToDo } from "../classes/classes.js";
import { setStorage, getStorage } from "../local-storage.js";
// import { editProject, deleteProject, TO_STORAGE_PROJECTSString } from "../functions.js";

import pencil from "../icon/pencil.svg";
import del from "../icon/delete.svg";
import { parseJSONWithOptions } from "date-fns/fp";

export let TO_STORAGE_PROJECTS = [];
const DISPLAY_PROJECTS = document.getElementById('display-projects');


export function projectList(entries) {
    const NEW_PROJECT = new Project(entries.title, entries.description, entries.dueDate);
    const getSavedProjects = getStorage();
    console.log(getSavedProjects, 'projectList func')
    if (getSavedProjects) {
        getSavedProjects.forEach(items => {
            TO_STORAGE_PROJECTS.push(items);
        })
    };
    TO_STORAGE_PROJECTS.push(NEW_PROJECT);
    setStorage(TO_STORAGE_PROJECTS);

};

