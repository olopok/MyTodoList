import { Project } from "../classes/classes.js";

export function projectList(entries) {
    const newProject = new Project(entries.title, entries.description, entries.dueDate);
    console.log(newProject);
};