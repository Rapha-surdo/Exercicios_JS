var conceito = document.getElementById('conceito')
    function verificar(){

    switch (conceito.value) {
        case "A":
            alert('Excelente.')
            break

        case "B":
            alert('Bom')
            break;

        case "C":
            alert('Média')
            break;

        case "D":
            alert('Abaixo da média')
            break;

        case "E":
            alert('Esse resultado não existe nos Estados Unidos')
            break;

        case "F":
            alert('Te vejo ano que vem')
            break;

        default:
            alert('Erro no processamento.')
    };
    }