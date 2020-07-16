import readItemInput from "./readItem.js";

export default function enableAddingItems() {
    let button = document.getElementById('add-button');
    button.addEventListener('click', appendItem, false);
}

function appendItem() {
    console.log('button clicked');
    let text = readItemInput();
    let myList = document.getElementById('my-list');
    myList.appendChild(createNewItem(text));
}

function createNewItem(text) {
    let node = document.createElement('li');
    let item = document.createTextNode(text);
    node.appendChild(item);
    return node;
}
