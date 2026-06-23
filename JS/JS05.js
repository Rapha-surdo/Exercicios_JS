const min = 1;
const max = 20;
var DT = document.getElementById('X');

function verificar() {
    const numero = Math.floor(Math.random() * 20) + 1;
    function resultado() {
            if (numero >= Number(DT.value)) {
                return `Sucesso, o resultado foi ${numero}.`;
            } else {
                return `Fracassou, o resultado foi ${numero}.`;
            }
        }

    alert(resultado());
}
