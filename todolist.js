function addItem(text, id, done, trash) {
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
}

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text')
        .classList.toggle(LINE_THROUGH);
    LIST[element.id].done = !LIST[element.id].done;
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}