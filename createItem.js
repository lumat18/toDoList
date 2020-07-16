export default function createNewItem(text) {
    let node = document.createElement('li');
    let item = document.createElement('div');

    let label = createLabel(text);
    item.appendChild(label);

    let finishedButton = createFinishedButton();
    item.appendChild(finishedButton);

    let deleteButton = createDeleteButton();
    item.appendChild(deleteButton);

    node.appendChild(item);
    return node;
}

function createFinishedButton() {
    let button = document.createElement('button');
    button.name = 'done';
    button.innerText = 'done';
    button.addEventListener('click', finishItem, false);
    function finishItem() {
        let parent = button.parentElement;
        parent.children.namedItem('delete').remove();
        button.removeEventListener('click', finishItem, false);
    }
    return button;
}

function createDeleteButton() {
    let button = document.createElement('button');
    button.name = 'delete';
    button.innerText = 'delete';
    button.addEventListener('click', removeItem, false);
    function removeItem() {
        let parent = button.parentElement.parentElement;
        parent.remove();
    }
    return button;
}

function createLabel(text) {
    return document.createTextNode(text);
}