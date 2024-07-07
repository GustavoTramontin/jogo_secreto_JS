// Criar uma função que exibe "Olá, mundo!" no console.

let frase = "Olá Mundo";

function mensagem () {
    console.log(frase);
}

mensagem();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaNome (nome) {
    console.log(`Olá, ${nome}!`);
}

olaNome("Gustavo");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro (valor) {
    console.log(valor*2);
}

dobro(6);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media (valor1, valor2, valor3) {
    console.log((valor1 + valor2 + valor3)/3);
}

media(5, 10, 15);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorValor (valor4, valor5) {
    if (valor4 > valor5) {
        console.log(valor4);
    } else {
        console.log(valor5);
        }
}

maiorValor(33, 2);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplo (valor6) {
    console.log(valor6*valor6);
}

multiplo(6);
