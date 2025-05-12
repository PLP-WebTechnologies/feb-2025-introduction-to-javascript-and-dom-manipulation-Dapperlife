// Text Content Modification
const dynamicText = document.getElementById('dynamic-text');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = "Text has been changed dynamically!";
    dynamicText.style.color = "#007bff";
    dynamicText.style.fontWeight = "bold";
});

// Style Modification
const styleBox = document.getElementById('style-box');
const changeStyleBtn = document.getElementById('change-style-btn');
const resetStyleBtn = document.getElementById('reset-style-btn');

changeStyleBtn.addEventListener('click', () => {
    styleBox.style.backgroundColor = "#ffc107";
    styleBox.style.color = "#212529";
    styleBox.style.border = "2px solid #fd7e14";
    styleBox.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    styleBox.textContent = "Styles have been modified!";
});

resetStyleBtn.addEventListener('click', () => {
    styleBox.style = "";
    styleBox.textContent = "This box will change style";
});

// Element Management
const elementContainer = document.getElementById('element-container');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
let itemCounter = 1;

addElementBtn.addEventListener('click', () => {
    itemCounter++;
    const newItem = document.createElement('p');
    newItem.className = 'list-item';
    newItem.textContent = `New item ${itemCounter}`;
    elementContainer.appendChild(newItem);
});

removeElementBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.list-item');
    if (items.length > 1) {
        elementContainer.removeChild(items[items.length - 1]);
        itemCounter--;
    } else {
        alert("Cannot remove the last item!");
    }
});