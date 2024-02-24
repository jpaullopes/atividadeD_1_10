/*Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.*/

import * as io from './io.js'

//função que compara a dezena com a unidade do número 
function comparador_D_U(numero){

    //realizar a separação dos digitos
    const dezena = Number.parseInt(numero / 10)
    const unidade = numero % 10

    //comparar e retornar o resultado
    if(dezena === unidade){
        const resultado = 'IGUAIS'
    }else{
        const resultado = 'DIFRENTES'
    }

    return resultado
}

function main(){

    const numero = io.get_number('Digite um número de dois dígitos inteiros: ')

    const resultado_comparação = comparador_D_U(numero)
    io.print(`No número ${numero} a sua dezena e sua unidade são ${resultado_comparação}.`)
}

main()