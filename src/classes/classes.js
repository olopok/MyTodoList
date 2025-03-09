import { isAfter, startOfDay } from "date-fns";
import { isEqual } from "date-fns/fp";

export class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
};

export class ToDo extends Project {
    constructor(title, description, dueDate, priority, status, project) {
        super(title, description, dueDate);
        this.status = status;
        this.priority = priority;
        this.project = project;
    };

    setStatus() {
        if (!`${this.dueDate}`) {
            return this.status = ""
        }
        else if (isEqual(`${this.dueDate}`, startOfDay(new Date())) || isAfter(`${this.dueDate}`, startOfDay(new Date()))) {
            return this.status = 'In progress';
        } else return this.status = 'Delayed';
    };
};