/* 
Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/

let palavra = 50;

if (isNaN(String(palavra))) {
  alert("É uma string");
} else {
  alert("Não é uma string");
}
