

// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

// const numeros = (n1,n2) => {
//     const soma = n1+n2  
//     return soma    
// }
// const calculo = numeros(5,6)
// console.log(calculo) // ou posso colocar (numeros(5,6)), sem usar a const calculo.


// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const numeros = (n1,n2) => {
    const maiorIgual = n1>=n2
    console.log(maiorIgual)   
}

numeros(7,6)



// c) Uma função que receba um número e imprima se ele é par ou não

const numero = (n) => {
    if (n %2 === 0){
        console.log ("Par")
        return numero
    }
    console.log ("Impar")    
}
numero(10)


// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const palavra = (msg) => {
    msgTam = msg.length
    msgMai = msg.toUpperCase()
    console.log(msgMai,"tem",msgTam, "letras")    
}
palavra("Penny Lane")