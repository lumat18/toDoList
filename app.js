const clear = document.querySelector('.clear-list');
const date = document.getElementById('date');
const list = document.getElementById('the-list');
const input = document.getElementById('item-input');

import {getDate} from "./date.js";
import {completeToDo} from "./todolist.js";
import {removeToDo} from "./todolist.js";
import {addItem} from "./todolist.js";
import {getId} from "./list.js";

date.innerHTML = getDate();

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        let text = input.value;
        if (text) {
            addItem(list, text, getId(), false, false);
        }
        input.value = '';
    }
});

list.addEventListener('click', function (event) {
    let element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob === 'complete') {
        completeToDo(element);
    } else if (elementJob === 'delete') {
        removeToDo(element);
    }
})
clear.addEventListener('click', function () {
    sessionStorage.clear();
    location.reload();
});
