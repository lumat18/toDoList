let LIST = [];
let ID = 0;

export function getList() {
    return LIST;
}

export function getId() {
    return ID;
}

export function setList(list) {
    LIST = list;
}

export function setId(id) {
    ID = id;
}

export function incrementId() {
    ID = ID + 1;
}
