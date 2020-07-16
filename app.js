const clear = document.querySelector('.clear-list');
const date = document.getElementById('date');
const list = document.getElementById('the-list');
const input = document.getElementById('item-input');
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';
let LIST = [];
let id = 0;

import {getDate} from "./date.js";

date.innerHTML = getDate();

import {}

list.addEventListener('click', function (event) {
    let element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob === 'complete') {
        completeToDo(element);
    } else if (elementJob === 'delete') {
        removeToDo(element);
    }
})

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        let text = input.value;
        if (text) {
            addItem(text, id, false, false);
            LIST.push({
                name: text,
                id: id,
                done: false,
                trash: false
            });
            id++;
        }
        input.value = '';
    }
});

clear.addEventListener('click', function () {
    sessionStorage.clear();
    location.reload();
});
