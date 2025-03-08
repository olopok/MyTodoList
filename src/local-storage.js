export function setStorage(ar) {

let items;

if (!items) {
    localStorage.setItem('Projects', JSON.stringify(ar));
    items = getStorage();
} else 
localStorage.setItem('Projects', JSON.stringify(ar));
    console.log(items, 'setStorage func');
};

export function getStorage() {
    const storedData = localStorage.getItem('Projects')
    if (storedData) {
        const userData = JSON.parse(storedData);
        return userData;

      } else 
        console.log('User data not found in local storage')
      
}
