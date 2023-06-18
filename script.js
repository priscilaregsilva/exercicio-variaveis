alert("Página carregada com sucesso!");

var valor_1 = 5;
var valor_2 = 2;
var soma = valor_1 + valor_2;
var divisao = valor_1 / valor_2;
var multiplicacao = valor_1 * valor_2;
var multiplicacao = valor_1 * valor_2;

document.getElementById("variavel_1").innerHTML = "<strong>Valor 1:</strong> " + valor_1;
document.getElementById("variavel_2").innerHTML = "<strong>Valor 2:</strong> " + valor_2;
document.getElementById("soma").innerHTML = "<strong>Soma:</strong> " + soma;
document.getElementById("divisao").innerHTML = "<strong>Divisão:</strong> " + divisao;
document.getElementById("multiplicacao").innerHTML = "<strong>multiplicacao:</strong> " + multiplicacao;

if(valor_1 == valor_2) {
    document.getElementById("iguais").innerHTML = "<strong>Os valores são iguais</strong>";
} else {
    document.getElementById("iguais").innerHTML = "<strong>Os valores são diferentes</strong>";
}

if(valor_1 > valor_2) {
    document.getElementById("iguais").innerHTML = "<strong>O valor 1 maior que o valor 2</strong>";
}

if(valor_1 < valor_2) {
    document.getElementById("iguais").innerHTML = "<strong>O valor 2 maior que o valor 1</strong>";
}