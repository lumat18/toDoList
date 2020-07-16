import {getList, getId} from "./list.js";
import {setList, setId} from "./list.js";
import {incrementId} from "./list.js";

const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

export function addItem(list, text, id, done, trash) {
    if (trash) {return;}

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
    incrementId();
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
}