//Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import * as auxilio from './io.js'
// verificar se os numeros são iguais
function verificador_numeros(n1,n2,n3){
    let contador = Number()
    if (n1 === n2) {
        contador++
    }
    if (n1 === n3) {
        contador++
    }
    if (n2 ===n3) {
        contador++
    }
    return contador
} 

function main(){ 
    const numero_1 = auxilio.get_number('Digite o primeiro número: ')
    const numero_2 = auxilio.get_number('Digite o segundo número: ')
    const numero_3 = auxilio.get_number('Digite o terceiro número: ')

    const receber_verificação = verificador_numeros(numero_1,numero_2,numero_3) 
    
    auxilio.print(`Entre os números [${numero_1},${numero_2},${numero_3}], ${receber_verificação} deles são iguais.`)
}

main()