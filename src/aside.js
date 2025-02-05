function showForm () {
    const dial = document.querySelector(".projects-modal");
    const addBt = document.querySelectorAll(".add");
    for (let i in addBt) {
        addEventListener('click', () => {
            dial.showModal()
        });
    };
};

export {showForm}