const HMENU = document.querySelector('.hamburger-menu');

const HAMBURGER = () => {
    for (let i = 0; i <= 2; i++) {
    const MENU = document.createElement('div');
    MENU.classList.add('line');
    HMENU.appendChild(MENU);
    }
};
HAMBURGER();
export default HMENU;