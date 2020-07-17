import {getList, incrementId} from "./list.js";

const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

export function addItem(list, text, id, done, trash) {
    if (trash) {
        return;
    }
    addItemToPage(list, id, text, done);
    incrementId();

    addItemToDb(id, text, done)
        .then(response => response.json())
        .then(addedItem => console.log(addedItem));
}

function addItemToPage(list, id, text, done) {
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : '';

    const item = `<li class="item">
                    <i class="fa ${DONE}" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${text}</p>
                    <i class="fa fa-trash-o" job="delete" id="${id}"></i>
                    </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);

    getList().push({
        name: text,
        id: id,
        done: false,
        trash: false
    });
}

async function addItemToDb(id, text, done) {
    const item = {
        id: id,
        name: text,
        done: done,
    }

    const api = 'http://localhost:8080/api/items/create';
    return await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
}

export function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text')
        .classList.toggle(LINE_THROUGH);
    getList()[element.id].done = !getList()[element.id].done;
}

export function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    getList()[element.id].trash = true;

    removeFromDb(element.id)
        .then(() => console.log(`item ${element.id} removed`));
}

async function removeFromDb(id) {
    const api = 'http://localhost:8080/api/items/delete';
    return await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    });
}