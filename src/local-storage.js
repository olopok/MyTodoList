export function setStorage(ar) {
let items;
if (!items) {
    localStorage.setItem('Projects', JSON.stringify(ar));
    items = getStorage();
} else 
localStorage.setItem('Projects', JSON.stringify(ar));
};

export function getStorage() {
    const storedData = localStorage.getItem('Projects')
    if (storedData) {
        const userData = JSON.parse(storedData);
        return userData;
      } else 
        console.log('User data not found in local projects storage')
};

export function setTodoStorage(arr) {
    let items;
    if (!items) {
        localStorage.setItem('Todo', JSON.stringify(arr));
        items = getTodoStorage();
    } else 
    localStorage.setItem('Todo', JSON.stringify(arr));
        console.log(items, 'setStorage func');
    
};

export function getTodoStorage() {
    const storedData = localStorage.getItem('Todo')
    console.log(storedData, 'getTodoStorage')
    if (storedData) {
        const userData = JSON.parse(storedData);
        return userData;
      } else 
        console.log('User data not found in local todos storage')
};

