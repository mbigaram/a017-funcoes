//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

const prim = (p1,p2) => {
    const soma = p1+p2
    const subt = p1-p2
    const multi = p1*p2
    const div = p1/p2
    console.log("soma =", soma.toFixed(2),"\nsubtracao =", subt.toFixed(2),"\nmultiplicação =", multi.toFixed(2),"\ndivisao =", div.toFixed(2))
}

prim (10,3.5)



// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

