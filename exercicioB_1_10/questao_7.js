/**Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero). */

import * as io from './io.js'

//função que verifica se o lado é válido[maior que zero]
function verificar_se_lado_zero(ld_a,ld_b,ld_c){
    return ld_a > 0 && ld_b > 0 && ld_c > 0

}

//função que retorna comparação dos lados 
function somar_e_comparar(ld_a,ld_b,ld_c){
    return ld_a + ld_b >= ld_c
}

//verifica se os lados dados formam um triângulo 
function verificar_se_eh_triangulo(ld_a,ld_b,ld_c){

    if(verificar_se_lado_zero(ld_a,ld_b,ld_c)){
        return (somar_e_comparar(ld_a,ld_b,ld_c) && somar_e_comparar(ld_c,ld_b,ld_a) && somar_e_comparar(ld_a,ld_c,ld_b))
    }
    return false
}

//verificar se o tipo de triângulo será equilátero
function verificar_equilatero(ld_a,ld_b,ld_c){
    return Object.is(ld_a,ld_b) && Object.is(ld_b,ld_c) && Object.is(ld_a,ld_c)
    
}

//verificar se o tipo de triângulo será isoceles
function verificar_isoceles(ld_a,ld_b,ld_c){
    return Object.is(ld_a,ld_b) || Object.is(ld_b,ld_c) || Object.is(ld_a,ld_c)

}

//verificar se o tipo de triângulo será escaleno
function verificar_escaleno(ld_a,ld_b,ld_c){
    return ld_a !== ld_b && ld_b !== ld_c && ld_a !== ld_c

}

//retorna qual será o tipo de triângulo
function tipo_de_triangulo(ld_a,ld_b,ld_c){

    if(verificar_equilatero(ld_a,ld_b,ld_c)){
        return 'EQUILÁTERO'
    }else if(verificar_isoceles(ld_a,ld_b,ld_c)){
        return 'ISÓCELES'
    }else if(verificar_escaleno(ld_a,ld_b,ld_c)){
        return 'ESCALENO'
    }

}

function main(){

    const lado_A = io.get_number_int('Digite o valor do lado A: ')
    const lado_B = io.get_number_int('Digite o valor do lado B: ')
    const lado_C = io.get_number_int('Digite o valor do lado c: ')

    const classificação_triangulo = tipo_de_triangulo(lado_A,lado_B,lado_C)
    
    if(verificar_se_eh_triangulo(lado_A,lado_B,lado_C)){
        io.print(`Com lados [${lado_A},${lado_B},${lado_C}] o tipo de triângulo será: ${classificação_triangulo}`)

    }else{
        io.print('NÃO É UM TRIÂNGULO')
    }
}

main()