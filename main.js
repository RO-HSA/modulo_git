const form = document.getElementById('formulario');
const numeroA = document.getElementById('campoA');
const numeroB = document.getElementById('campoB');

function validaNumeros(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {
    let botao = document.querySelector('button');
    e.preventDefault();

    if (!validaNumeros(numeroA.value, numeroB.value)) {
        botao.disabled = true;
    } else {
        numeroA.value = '';
        numeroB.value = '';
    }
    botao.disabled = false;
})

campoB.addEventListener('keyup', function(e) {
    
    if (!validaNumeros(numeroA.value, e.target.value)) {
        document.querySelector('.error-message').style.display = 'block';
    } else {
        document.querySelector('.error-message').style.display = 'none';
    }
})