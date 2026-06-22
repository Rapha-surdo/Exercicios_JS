var a = Number(prompt('Digite o valor de A'));
var b = Number(prompt('Digite o valor de B'));
var c = Number(prompt('Digite o valor de C'));
var delta = b * b - 4 * a * c;
if (a !== 0 && delta >= 0) {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write('x1 = ' + x1 + '<br>');
    document.write('x2 = ' + x2);
}
else { document.write('Não é possível calcular'); }