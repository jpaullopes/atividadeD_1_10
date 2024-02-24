/*Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau)*/

import * as io from './io.js'

//função que verifica se o ângulo é válido[maior que zero]
function verificar_angulo_zero(ang1,ang2,ang3){
    return ang1 > 0 && ang2 > 0 && ang3 > 0
}

//função que verifica se os ângulos dados formam um triângulo
function verificador_de_triangulo(ang1,ang2,ang3) {
    if(verificar_angulo_zero(ang1,ang2,ang3)){
        return ang1 + ang2 + ang3 === 180
    }
    return false  
}

//função que verifica se o tipo do triângulo é acutângulo
function verificar_se_acut(ang1,ang2,ang3){
    return ang1 < 90 && ang2 < 90 && ang3 < 90
}

//função que verifica se o tipo do triângulo é reto
function verificar_se_reto(ang1,ang2,ang3){
    return ang1 === 90 || ang2 === 90 || ang3 === 90
}

//função que verifica se o tipo do triângulo é obtusângulo
function verificar_se_obtu(ang1,ang2,ang3){
    return ang1 > 90 || ang2 > 90 || ang3 > 90
}

//função que retorna qual vai ser o tipo do triângulo segundo os valores dos ângulos
function verificar_tipo_triangulo(ang1,ang2,ang3){

    if(verificar_se_acut(ang1,ang2,ang3)){
        return 'ACUTÂNGULO'
    } else if(verificar_se_reto(ang1,ang2,ang3)){
        return 'RETÂNGULO'
    } else if(verificar_se_obtu(ang1,ang2,ang3)) {
        return 'OBTUSÂNGULO'
    } 
    return false
}

function main(){

    const primeiro_angulo = io.get_number_int('Digite o primeiro ângulo[1°]: ')
    const segundo_angulo = io.get_number_int('Digite o segundo ângulo[2°]: ')
    const terceiro_angulo = io.get_number_int('Digite o terceiro ângulo[3°]: ')

    const tipo_do_triangulo = verificar_tipo_triangulo(primeiro_angulo,segundo_angulo,terceiro_angulo)

    if(verificador_de_triangulo(primeiro_angulo,segundo_angulo,terceiro_angulo)){
        io.print(`Com ângulos [${primeiro_angulo}°,${segundo_angulo}°,${terceiro_angulo}°] o tipo do triângulo será: ${tipo_do_triangulo}.`)
    }else{
        io.print('OS ÂNGULOS INFORMADOS NÃO FORMAM UM TRIÂNGULO')
    }
}

main()