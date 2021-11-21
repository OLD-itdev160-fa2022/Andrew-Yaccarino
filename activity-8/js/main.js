// util
/**
 * @param {String} element 
 * @returns {Element}
 */
function get(element) {
    return document.getElementById(element);
}

/**
 * @param {String} element 
 * @param {Void|Element|String} parent 
 * @returns {Element}
 */
// one over engineered function later....
function create(element,parent) {
    if (typeof parent == 'string') {
        parent = document.getElementById(parent);
    } else {
        parent = parent || document.body; // if parent is void make the body the parent
    }
    let elem = document.createElement(element);
    parent.appendChild(elem);
    return elem;
}

/**
 * @param {String} data 
 * @param {Void|Element|String} parent 
 * @returns {Element}
 */
// oops I did it again...
function createText(data, parent) {
    if (typeof parent == 'string') {
        parent = document.getElementById(parent);
    } else {
        parent = parent || document.body; // if parent is void make the body the parent
    }
    let elem = document.createTextNode(data);
    parent.appendChild(elem);
    return elem;
}

// main
function openModal() {
    let modal = get("modal-dialog");
    let backdrop = get("modal-backdrop");

    modal.classList.add("visible");
    backdrop.classList.add("visible");
}

function closeModal() {
    let title = get("edit-title-text");
    let text = get("edit-content-text");
    let modal = get("modal-dialog");
    let backdrop = get("modal-backdrop");

    title.value = "";
    text.value = "";

    modal.classList.remove("visible");
    backdrop.classList.remove("visible");
}

function saveContent() {
    let title = get("edit-title-text");
    let text = get("edit-content-text");
    let content = get("display-content");

    let newTitle = create("h2");
    let newContent = create("p");

    let newTitleText = createText(title.value,newTitle);
    let newContentText = createText(text.value,newContent);

    closeModal();
}

window.addEventListener("load", function() {
    let newButton = get("new-button");
    let cancelButton = get("cancel-button");
    let saveButton = get("save-button");

    newButton.addEventListener("click",openModal);
    cancelButton.addEventListener("click", closeModal);
    saveButton.addEventListener("click", saveContent);
})