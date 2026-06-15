function apresentar() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var data = document.getElementById("data").value;

    alert("Oi, eu sou " + nome +
        ", nasci em " + data +
        " e tenho " + idade +
        " anos. Prazer em te conhecer!")
}