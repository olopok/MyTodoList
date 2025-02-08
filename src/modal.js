const MODAL = (() => {
    const DIAL = document.querySelector(".modal");
    const FORM_LIST = document.querySelector('ul');

    const SHOWMODAL = (ID) => {
        DIAL.showModal();
        CLOSEMODAL()
    };

    const CLOSEMODAL = () => {
        document.getElementById('cancel').addEventListener('click', () => {
            document.querySelector('form').reset();
            FORM_LIST.innerHTML = "";
            DIAL.close();
        });
    }


    const FORM_ENTRIES = () => {
        DIAL.addEventListener('submit', (e) => {
            e.preventDefault();
            const FORM = document.querySelector('form');
            console.log(FORM)
            const ENTRIES = Object.fromEntries(new FormData(FORM));
            console.log(ENTRIES)
            FORM_LIST.innerHTML = "";
            // return ENTRIES;
            DIAL.close()
        })
    }


    return { SHOWMODAL, FORM_ENTRIES };

})();

export { MODAL }