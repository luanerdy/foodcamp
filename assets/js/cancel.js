const cancelButton = confirmation.children[6];

function cancel() {

    wall.classList.add('hidden');
    confirmation.classList.add('hidden');
    menu.removeAttribute('disabled');
}

cancelButton.addEventListener('click', cancel);