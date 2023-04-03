//Exercicio 2
user_input = prompt("escolha um numero de 1 a 10");
document.write("<center><h3>tabuada do " , user_input , "</h3>");
if (user_input >= 1 && user_input <= 10){
    for(let i = 0; i <= 10; i++){
        tabuada = user_input * i;
        document.write("<center>" , user_input , "x" , i , "=" , tabuada , "<br>");
    }

}
else {
    document.write("erro");
}