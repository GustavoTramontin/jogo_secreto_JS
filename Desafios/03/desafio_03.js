// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc() {

    let altura = parseFloat(prompt('Insira sua altura em metros e com PONTO: ')); 
    let pesoKg = parseFloat(prompt('Insira seu peso em kg e com PONTO: '));

    let resultado = pesoKg / (altura*altura);

    alert(`O seu IMC é ${resultado.toFixed(2)}`);
}

imc();

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial() {
    let numeroFatorial = prompt('Insira um valor: ');
    let resultado2 = 1;

    for (let i = numeroFatorial; i > 1; i--) {
        let resultadoFinal = resultado2 *= i;
    }
    alert(resultado2)
}

fatorial();

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversaoDolar () {
    let valorUSD = parseFloat(prompt('Insira o valor em dólar: '));

    let cotacao = 4.8;
    let valorBRL = valorUSD*cotacao;

    alert(`O valor convertido para BRL é R$ ${valorBRL.toFixed(2)}`);
}

conversaoDolar();

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

let comprimento = parseFloat(prompt('Insira o comprimento da sala: '));
let largura = parseFloat(prompt('Insira o largura da sala: '));

function perimetro(comprimento, largura) {
    let perimetroTotal = 2*(comprimento + largura);
    let areaTotal = comprimento * largura;

    alert(`O perímetro total da sala é de ${perimetroTotal.toFixed(2)}m.`);
    alert(`A área total da sala é de ${areaTotal.toFixed(2)}m².`);
}

perimetro(comprimento, largura);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

let raio = parseFloat(prompt('Insira o raio da sala circular: '));
let pi = 3.14;

function areaCirculo(raio) {
    let perimetroCircular = 2*pi*raio
    let areaCircular = pi*(raio*raio);

    alert(`O perímetro total da sala é de ${perimetroCircular.toFixed(2)}m.`);
    alert(`A área total da sala é de ${areaCircular.toFixed(2)}m².`);
}

areaCirculo(raio);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

let valorTab = parseInt(prompt('Insira um valor para ver a tabuada: '));

function tabuada(valorTab) {
    alert(`
        ${valorTab} x 1 = ${valorTab * 1}
        ${valorTab} x 2 = ${valorTab * 2}
        ${valorTab} x 3 = ${valorTab * 3}
        ${valorTab} x 4 = ${valorTab * 4}
        ${valorTab} x 5 = ${valorTab * 5}
        ${valorTab} x 6 = ${valorTab * 6}
        ${valorTab} x 7 = ${valorTab * 7}   
        ${valorTab} x 7 = ${valorTab * 8}
        ${valorTab} x 7 = ${valorTab * 9}
        ${valorTab} x 7 = ${valorTab * 10}      
        `);

}

tabuada(valorTab);