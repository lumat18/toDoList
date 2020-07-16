import createNewItem from "./createItem.js";

export default function uploadTasks() {
    const API = 'http://localhost:8080/api/items';
    fetchApi(API);
}

async function fetchApi(api) {
    try {
        let response = await fetch(api);
        let data = await response.json();
        await createItems(data.items);
    } catch (e) {
        console.log('there was an error!', e);
    }
}

function createItems(items) {
    items.forEach(item => {
        let myList = document.getElementById('my-list');
        myList.appendChild(createNewItem(item));
    });
}