
// projects section


class Sections {
    constructor(title, description, startDate, endDate, priority) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
    };

    projectTitle(a, b) {
        const projectTitle = document.createElement(a)
        projectTitle.classList.add(b)
        projectTitle.textContent = `${this.title}`;
        return projectTitle;
    };

    projectDescription(a, b) {
        const projectDescription = document.createElement(a);
        projectDescription.classList.add(b);
        projectDescription.textContent = `${this.description}`;
        return projectDescription;
    };

    projectStartDate(a, b) {
        const projectStartDate = document.createElement(a);
        projectStartDate.classList.add(b);
        projectStartDate.textContent = `$(this.startDate)`;
        return projectStartDate;
    };

    projectEndDate(a, b) {
        const projectEndDate = document.createElement(a);
        projectEndDate.classList.add(b);
        projectEndDate.textContent = `${this.endDate}`;
        return projectEndDate;
    };

    projectPriority(a, b) {
        const projectPriority = document.createElement(a)
        projectPriority.classList.add(b);
        projectPriority.textContent = `${this.priority}`;
    };
};



export { Sections }