import { isAfter } from "date-fns";

export class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }; 

    settitle (title) {
        this.title = title;
    };

    setdescription(description) {
        this.description = description;
    };

    setdueDate (x) {
        this.dueDate = x;
    };
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