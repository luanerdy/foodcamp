const confirmButton = confirmation.children[5];
let nome = '';
let endereco = '';

function confirm() {

    nome = prompt('Digite o seu nome...');
    endereco = prompt('...e seu endereço');


    const texto = `
                Olá, gostaria de fazer o pedido:
                - Prato: ${confirmation.children[1].children[0].innerText}
                - Bebida: ${confirmation.children[2].children[0].innerText}
                - Sobremesa: ${confirmation.children[3].children[0].innerText}
                Total: R$ ${String(total.toFixed(2)).replace('.', ',')}
                
                Nome: ${nome}
                Endereço: ${endereco}
                `;

    const textoParseado = encodeURI(texto);
    const url = `https://wa.me/558193089298/?text=${textoParseado}`;
    window.location.href = url;
}

confirmButton.addEventListener('click', confirm);