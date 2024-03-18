// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
const idade = 25;
const idade = 30;
console.log(idade); 


// R: Vai dar erro. Variável "const" não pode ser retribuída


////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    let x = 10;
   console.log(x); 
}
console.log(x);

// R: O resultado de x será 10, dentro do escopo. Fora do escopo, dará erro porque essa variável não fora declarada. Console.log não enxerga o Let dentro do escopo.

///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

console.log(x);
console.log(y);

//R: No "console.log(x);"  vai dar erro porque é uma "let"e será interrompido o processo por não estar definida a variável. No "console.log(y);" a variável é var. E var é global, não é dependente do escopo.
///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

console.log(a); 
var a = 5;
console.log(b);
//let b = 10;

//R: No console.Log(a) ocorre o Hoisting da variável para o topo. No console.log(b) a variavel b não foi declarada
/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

var x = 5;
var x = 10;
// console.log(x); 

let y = 15;
let y = 20; 
// console.log(y); 

//R: A variável "Y" é um "let", e não permite redeclaração. Portanto, dará erro.

//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'eduardo';
const letraInicial = nomeCompleto[0];
console.log(letraInicial);

//sua lógica para pegar a primeira letra 
/// const letraInicial = ...
//console.log(letraInicial)







