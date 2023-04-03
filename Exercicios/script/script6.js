//exercicio 6
let masculino = 0
let feminino = 0
let correr = 1
var imcM = []
var imcF = []
contador = 1
document.write("<center><h3>IMC e Sexo<br></h3>")
for (let i = 1 ; i <= 5 ; i++){
    let genero = parseInt(prompt("Qual seu sexo? Masculino 1 | feminino 2"));
    if (genero == 1){
        masculino ++;
        let altura = parseFloat(prompt("Qual sua altura ? ex: 1.70 "));
        let peso = parseInt(prompt("Qual seu peso ? Ex: 80 "));
        let imcMa = peso / (altura * altura);
        imcM.push(imcMa);
        if (imcMa <= 20.7){
            document.write (contador , " homem seu imc é " , imcMa , " abaixo do peso <br>");
        }
        if (imcMa > 20.7 && imcMa <= 26.4){
            document.write (contador ," homem seu imc é " , imcMa , " peso ideal <br>");
        }
        if (imcMa > 26.5 && imcMa <= 27.8){
            document.write (contador ," homem seu imc é " , imcMa , " um pouco acima do peso <br>");
        }
        if (imcMa > 27.9 && imcMa <= 31.1){
            document.write (contador ," homem seu imc é " , imcMa , " acima do peso <br>");
        }
        if (imcMa > 31.2){
            document.write (contador ," homem seu imc é " , imcMa , " obsidade <br>");
        }
    }
    if (genero == 2){
        feminino ++;
        let alturaf = parseFloat(prompt("Qual sua altura ? ex: 1.70 "));
        let pesof = parseInt(prompt("Qual seu peso ? Ex: 80 "));
        let imcMf = pesof / (alturaf * alturaf);
        imcM.push(imcMf);
        if (imcMf <= 18.5){
            document.write (contador , " mulher seu imc é " , imcMf , " abaixo do peso <br>");
        }
        if (imcMf > 18.5 && imcMf <= 24.9){
            document.write (contador , " mulher seu imc é " , imcMf , " peso ideal <br>");
        }
        if (imcMf > 25 && imcMf <= 29.9){
            document.write (contador , " mulher seu imc é " , imcMf , " um pouco acima do peso <br>");
        }
        if (imcMf > 30 && imcMf <= 39.9){
            document.write (contador , " mulher seu imc é " , imcMf , " acima do peso <br>");
        }
        if (imcMf > 40){
            document.write (contador , " mulher seu imc é " , imcMf , " obsidade <br>");
        }
    }
contador ++
}
document.write("<h3>Há " , masculino , " homens e " , feminino , " mulheres " )