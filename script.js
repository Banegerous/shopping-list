const itemForm = document.getElementById('item-form'); // form id
const itemInput = document.getElementById('item-input'); // form initial input id
const itemList = document.getElementById('item-list'); // ul id

// Event listeners
function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem === '') {
        alert('Please add an item to your shopping list');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li); // gets this into the DOM
    itemList.value = ''; // clears the input after add
}

function createButton(classes){
    const button = document.createElement('button'); // function for the button
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark'); // grabbing the icon classes
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i'); // function for the icon within the button
    icon.className = classes;
    return icon;
}


itemForm.addEventListener('submit', addItem);
