const options = document.querySelectorAll('.options');
const food = options[0].children;
const drinks = options[1].children;
const desserts = options[2].children;

function select(event) {

    event.preventDefault();
    const parent = event.currentTarget.parentNode;

    if(event.currentTarget.classList.contains('selected')) {
        event.currentTarget.classList.remove('selected');
    }
    else {

        for(let i = 0; i < parent.children.length; i++) {

            parent.children[i].classList.remove('selected');
        }

        event.currentTarget.classList.add('selected');
    }

    verify()
}

for(let i = 0; i < food.length; i++) {

    food[i].addEventListener('click', select, true);
}

for(let i = 0; i < drinks.length; i++) {

    drinks[i].addEventListener('click', select, true);
}

for(let i = 0; i < desserts.length; i++) {
    
    desserts[i].addEventListener('click', select, true);
}