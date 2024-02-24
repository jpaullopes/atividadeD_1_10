//Leia 3 (três) números e escreva-os em ordem crescente.

import * as io from './io.js'

//função que retorna qual é o maior numero
function numero_maior(num_1,num_2){
    return num_1 >= num_2
}

//função que ordena os números do maior para o menor
function ordenador(n1,n2,n3){

    let maior = Number()
    let menor = Number()
    let meio = Number()

    //ordenamento dos números
    if(numero_maior(n1,n2)) {
        maior = n1
        if(numero_maior(n2,n3)) {
            meio = n2
            menor = n3
        }else{
            meio = n3
            menor = n2            
        }
    }else if(numero_maior(n2,n3)){
        maior = n2
        if(numero_maior(n3,n1)){
            meio = n3
            menor = n1
        }else{
            meio = n1
            menor = n3
        }
    }else if(numero_maior(n3,n1)) {
        maior = n3
        if( numero_maior(n2,n1)){
            meio = n2
            menor = n1
        }else{
            meio = n1
            menor = n2
        }
    }else {
        maior = n2
        if(numero_maior(n1,n3)){
            meio = n1
            menor = n3
        }else {
            meio = n3
            menor = n1
        }
    }
   
    //retorno dos números organizados
    return `[${maior},${meio},${menor}]`
}

function main(){

    const numero_1 = io.get_number('Digite o primeiro número: ')
    const numero_2 = io.get_number('Digite o segundo número: ')
    const numero_3 = io.get_number('Digite o terceiro número: ')

    const ordem_dos_numeros = ordenador(numero_1,numero_2,numero_3)

    io.print(`A ordem do maior para o menor será: ${ordem_dos_numeros}.`)
}

main()