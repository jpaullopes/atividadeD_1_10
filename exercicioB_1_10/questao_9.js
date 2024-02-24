//Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import * as io from './io.js'

//função que verifica se o número de entrada está entre 0 e 100
function verificar_numero_valido(numero){
    return numero <= 100 && numero > 0
}

//verificar se o número é 1,2,3,5 ou 7
function verificar_primos_basicos(numero){
    return numero == 1 || numero == 2 || numero == 3 || numero == 5 || numero == 7
}

//função que verifica se o número  é divisivel somento por ele mesmo
function divisivel_por_primos(numero){
    return numero %  2 == 0 || numero % 5 == 0 || numero % 3 == 0 || numero % 7 == 0
}

//retornar se o núemro é ou não um número primo
function verificador_primo(numero){
   
    if(verificar_primos_basicos(numero)){
        return true
    }else if(divisivel_por_primos(numero)){
        return false
    }
    return true
}

function main(){
    
    const numero = io.get_number_int('Digite um número[0 até 100]: ')

    if(verificar_numero_valido(numero)){
            if(verificador_primo(numero)){
            io.print(`O número ${numero} É PRIMO`)

        }else{
            io.print(`O número ${numero} NÃO É PRIMO`)
        }
    }else{
        io.print('NÃO É UM NÚMERO VÁLIDO')
    }
}

main()