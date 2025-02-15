import { projectList } from "./aside-content/new-project.js";

const MODAL = (() => {
    const DIAL = document.querySelector(".modal");
    let entries;
    const EL = document.querySelector('.priority-list');

    const SHOWMODAL = (ID) => {
        if (ID === 'project-list') {
            EL.classList.toggle('none');
            DIAL.showModal();
            CLOSEMODAL()
            FORM_ENTRIES()
        } else {
            EL.classList.remove('none');
            DIAL.showModal();
            CLOSEMODAL()
            FORM_ENTRIES()
        }
    };

    const CLOSEMODAL = () => {
        document.getElementById('cancel').addEventListener('click', () => {
            document.querySelector('form').reset();
            DIAL.close();
        });
    };

    const FORM_ENTRIES = () => {
        DIAL.addEventListener('submit', (e) => {
            e.preventDefault();
            const FORM = document.querySelector('form');
            entries = Object.fromEntries(new FormData(FORM));
            projectList(entries)
            FORM.reset();
            DIAL.close();
        });
    };

    return { SHOWMODAL, FORM_ENTRIES };

})();

export { MODAL }