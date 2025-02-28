import { isAfter } from "date-fns";

export class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
};

export class ToDo extends Project {
    constructor(title, description, dueDate, priority) {
        super(title, description, dueDate);
        this.status = false;
        this.priority = priority;
    };

    setStatus() {
        if (isAfter(`${this.dueDate}`, new Date())) {
           return  this.status = 'In progress';
        } else return this.status = 'Delayed';
    };

    setPriority(priority) {
        this.priority = priority;
    }
};