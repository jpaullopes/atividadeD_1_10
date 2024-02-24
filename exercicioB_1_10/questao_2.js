//Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import * as io from './io.js'

//função que verifica o maior e o menor número

function verificador_maior_menor(number_1,number_2){
    let maior = Number()
    let menor = Number()
    
    if(number_1 > number_2){
        maior = number_1
        menor = number_2
    }else{
        maior = number_2
        menor = number_1
    }

//escrever qual é o maior e menor segundo a função
    io.print(`O maior número é ${maior} e o menor número é ${menor}`)

}

function main(){

    const number_1 = io.get_number('Digite o primerio número: ')
    const number_2 = io.get_number('Digite o segundo núemro: ')

    verificador_maior_menor(number_1,number_2)


}

main()