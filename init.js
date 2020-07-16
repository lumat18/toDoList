import {setList, setId} from "./list.js";
import {getList} from "./list.js";

//sessionStorage.setItem('TODO', JSON.stringify(getList()));

let data = sessionStorage.getItem('TODO');

if(data){
    setList(JSON.parse(data));
    setId(getList().length);
    loadToDo(getList());
}else{
    setList([]);
    setId(0);
}

function loadToDo(array) {
    array.forEach(item =>
        addItem(item.name, item.id, item.done, item.trash));
}