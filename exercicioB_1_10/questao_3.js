//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import * as io from './io.js'

//função que computa qual é o maior número entre os três
function verificador_maior(n1,n2,n3){
    let maior = n1

    if(n1 > n2){
        maior = n1
    }else if(n2 > n3){
        maior = n2
    }else{
        maior = n3
    }

    return maior
}

function main(){

    const numero_1 = io.get_number(`Digite o primeiro número: `)
    const numero_2 = io.get_number(`Digite o segundo número: `)
    const numero_3 = io.get_number(`Digite o terceiro número: `)

    const maior_numero = verificador_maior(numero_1,numero_2,numero_3)

    io.print(`O maior número entre [${numero_1},${numero_2},${numero_3}] é o ${maior_numero}.`)

}

main()