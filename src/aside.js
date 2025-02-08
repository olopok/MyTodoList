
// projects section

const displaySection = document.querySelectorAll('.display-section');


class Sections {
    constructor(title, description, startDate, endDate, priority) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
    };

    createSectionProject() {
       const projectTitle = document.createElement('h2')
        projectTitle.textContent = this.title;
        const description = document.createElement('p');
        description.textContent = this.description;
    };
};





