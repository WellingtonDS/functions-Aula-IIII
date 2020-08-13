// fcuncão declarada.
function somar(numero){
    console.log('Estou somando...')
    return numero + 2;                            // funcão com estrutura básica.
}

console.log(somar(3)); // executando resultado sem guardar em uma variável.



console.log('-' .repeat(25));


// funcão expressa.  

const multiplicar = function(numero){
    console.log('Estou multiplicando...');
    return numero * 3;                          // funcão atribuida como valor a uma variável.
}

let resultadoMultiplicacao = multiplicar(5);
console.log(resultadoMultiplicacao);            // executando e guardando o resultado em uma variável.

// escopo local declarada dentro da funcão
function localizacao(zona){
    let regiao = "sul"
    console.log(regiao);
    return regiao;

}
localizacao()

// escopo global declarado fora da funcão.
let nome = "Wellignton";

function usuario(idade){
    console.log("Meu nome é" + " " + nome + " " + "tenho" + " " + idade + " " + "anos"); // posso acessar a variável que esta fora da funcão dando um console.log dentro dela(function).
    return idade;
}
usuario(27);

console.log('-' .repeat(25));


//arrow function, neste método podemos simplificar a funcão tornando-a mais dinâmica.
const dividir = (numero) => {
    console.log("O resultado da divisão é" + " " + numero / 2);
    return numero / 2
 }

 dividir(16);



