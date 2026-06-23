var inputA = document.getElementById('X');

function verificar() {

    var numA = parseInt(inputA.value);

    if (isNaN(numA)) {
        alert('Por favor, digite um número válido!');
        return;
    }
    if (numA % 2 === 0) {
        alert('O resultado é par');
    } else {
        alert('O resultado é ímpar');
    }
}
