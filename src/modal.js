const MODAL = (() => {
    const DIAL = document.querySelector(".modal");
    const FORM = document.querySelector('ul');
    // const buttons = document.querySelector('.btn-container');

    const SHOWCLOSEMODAL = () => {
                DIAL.showModal();
        };

        document.getElementById('cancel').addEventListener('click', () => {
            document.querySelector('form').reset();
            FORM.innerHTML = "";
        });
    

    const CREATE_FORM = (element) => {
        const FORM_OBJ = {
            title: document.createElement('input'),
            titleLabel: document.createElement('label'),
            textArea: document.createElement('textarea'),
            textAreaLabel: document.createElement('label'),
            startDate: document.createElement('input'),
            startDateLabel: document.createElement('label'),
            endDate: document.createElement('input'),
            endDateLabel: document.createElement('label'),
            priority: document.createElement('select'),
            priorityLabel: document.createElement('label'),
            option0: document.createElement('option'),
            option1: document.createElement('option'),
            option2: document.createElement('option'),
            option3: document.createElement('option')
        };

        if (element === 'project-list') {
            FORM_OBJ.titleLabel.textContent = 'Title';
            FORM_OBJ.textAreaLabel.textContent = 'Description';
            FORM_OBJ.startDateLabel.textContent = 'Start Date';
            FORM_OBJ.endDateLabel.textContent = 'End Date';
            FORM_OBJ.startDate.setAttribute('type', 'date');
            FORM_OBJ.endDate.setAttribute('type', 'date');
            FORM_OBJ.textArea.setAttribute('type', 'text');
            FORM_OBJ.title.setAttribute('type', 'text');
            FORM.appendChild(FORM_OBJ.titleLabel);
            FORM.appendChild(FORM_OBJ.title); 
            FORM.appendChild(FORM_OBJ.textAreaLabel);
            FORM.appendChild(FORM_OBJ.textArea);
            FORM.appendChild(FORM_OBJ.startDateLabel)
            FORM.appendChild(FORM_OBJ.startDate);
            FORM.appendChild(FORM_OBJ.endDateLabel);
            FORM.appendChild(FORM_OBJ.endDate);
        };

        if (element === 'todo-list') {
            FORM_OBJ.titleLabel.textContent = 'Title';
            FORM_OBJ.textAreaLabel.textContent = 'Description';
            FORM_OBJ.startDateLabel.textContent = 'Date';
            FORM_OBJ.startDate.setAttribute('type', 'date');
            FORM_OBJ.textArea.setAttribute('type', 'text');
            FORM_OBJ.title.setAttribute('type', 'text');
            FORM_OBJ.priorityLabel.textContent = 'Priority';
            FORM_OBJ.option0.setAttribute('value', "");
            FORM_OBJ.option0.textContent = 'Please choose one';
            FORM_OBJ.option1.setAttribute('value', "low");
            FORM_OBJ.option1.textContent = 'low';
            FORM_OBJ.option2.setAttribute('value', "medium");
            FORM_OBJ.option2.textContent = 'medium';
            FORM_OBJ.option3.setAttribute('value', "hight");
            FORM_OBJ.option3.textContent = 'Hight';
            FORM.appendChild(FORM_OBJ.titleLabel);
            FORM.appendChild(FORM_OBJ.title); 
            FORM.appendChild(FORM_OBJ.textAreaLabel);
            FORM.appendChild(FORM_OBJ.textArea);
            FORM.appendChild(FORM_OBJ.startDateLabel)
            FORM.appendChild(FORM_OBJ.startDate);
            FORM.appendChild(FORM_OBJ.priorityLabel);
            FORM_OBJ.priority.appendChild(FORM_OBJ.option0);
            FORM_OBJ.priority.appendChild(FORM_OBJ.option1);
            FORM_OBJ.priority.appendChild(FORM_OBJ.option2);
            FORM_OBJ.priority.appendChild(FORM_OBJ.option3);
            FORM.appendChild(FORM_OBJ.priority);
        };

        
    };



    return { SHOWCLOSEMODAL, CREATE_FORM }

})();

export { MODAL }