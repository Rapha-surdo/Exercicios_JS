function apresentar() { 
    var nome = prompt("Qual é o seu nome?"); 
    var entrada = prompt("Salário:"); 
    var entrada2 = prompt("Vendas:"); 
    var comissao = Number(entrada2) * 0.025; 
    var total = Number(comissao) + Number(entrada); 
    alert("Oi, eu sou " + nome + ", meu salário é R$ " + entrada + ", minhas vendas foram de R$ " + entrada2 + " e a comissão é R$ " + comissao + ". Sendo no total R$" + total); 
}
