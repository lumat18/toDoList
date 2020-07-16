import readItemInput from "./readItem.js";
import createNewItem from "./createItem.js";

export default function enableAddingItems() {
    let button = document.getElementById('add-button');
    button.addEventListener('click', appendItem, false);
}

function appendItem() {
    console.log('button clicked');
    let text = readItemInput();
    let myList = document.getElementById('my-list');
    myList.appendChild(createNewItem(text));
    clearInput();
}

function clearInput() {
    let input = document.getElementById('item-input');
    input.value = '';
}


