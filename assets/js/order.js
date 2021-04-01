const orderButton = document.querySelector('.bottombar button');
const wall = document.querySelector('.page-wall');
const confirmation = document.querySelector('.confirmation');
const menu = document.querySelector('.menu');
let total = 0;

function verify() {

    const selected = document.querySelectorAll('.selected');

    if(selected.length === 3) {
        
        orderButton.removeAttribute('disabled');
        orderButton.classList.remove('blocked');
    }
    else {

        orderButton.setAttribute('disabled', true);
        orderButton.classList.add('blocked');
    }

    return selected;
}

function order() {

    const selected = document.querySelectorAll('.selected');

    wall.classList.remove('hidden');
    confirmation.classList.remove('hidden');
    menu.setAttribute('disabled', true);

    confirmation.children[1].innerHTML = `
                                <p>${selected[0].children[1].innerText}</p>
                                <p>${selected[0].children[3].innerText}</p>
                                `;
    confirmation.children[2].innerHTML = `
                                <p>${selected[1].children[1].innerText}</p>
                                <p>${selected[1].children[3].innerText}</p>
                                `;
    confirmation.children[3].innerHTML = `
                                <p>${selected[2].children[1].innerText}</p>
                                <p>${selected[2].children[3].innerText}</p>
                                `;

    const precoFood = parseFloat(selected[0].children[3].innerText.replace('R$ ', '').replace(',', '.'));
    const precoDrink = parseFloat(selected[1].children[3].innerText.replace('R$ ', '').replace(',', '.'));
    const precoDessert = parseFloat(selected[2].children[3].innerText.replace('R$ ', '').replace(',', '.'));
    total = precoFood + precoDrink + precoDessert;

    confirmation.children[4].innerHTML = `
                                <p>total</p>
                                <p>R$ ${String(total.toFixed(2)).replace('.', ',')}</p>
                                `;
}

orderButton.addEventListener('click', order);