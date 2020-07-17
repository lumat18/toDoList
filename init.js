import {setList, setId} from "./list.js";
import {getList} from "./list.js";


let data = sessionStorage.getItem('TODO');

export function load() {
    loadFromDb();
    if(data){
        setList(JSON.parse(data));
        setId(getList().length);
        loadToDo(getList());
    }else{
        setList([]);
        setId(0);
    }
}

function loadToDo(array) {
    array.forEach(item =>
        addItem(item.name, item.id, item.done, item.trash));
}

async function loadFromDb() {
    const api = 'http://localhost:8080/api/items';
    const response = await fetch(api);
    const items = await response.json();
    console.log('loaded items: ', items);
}