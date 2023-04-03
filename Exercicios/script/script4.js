//exercicio 4
let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 15; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
document.write("<center> <h3> Os 15 primeiros numeros sequencia de Fibonacci </h3>" , fibonacci);