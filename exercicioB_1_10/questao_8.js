/**Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata (em anos). */

import * as io from './io.js'

//validar se as datas estão corretas
function validar_datas(dia,mes,ano,dia_atual,mes_atual,ano_atual){
    return ano_atual - ano > 0 ||  dia > 31 || mes > 12 || dia_atual > 31 || mes_atual > 12
        
}

//retornar a diferença entre o ano de nascimento e o ano atual
function diferença_anos(ano_nasc,ano_atu){
    return ano_atu- ano_nasc
}

//calcula a idade
function computar_idade(dia_nasc,mes_nasc,ano_nasc,dia_atual,mes_atual,ano_atual){

    let idade = Number()

    //verifica se o mês de nascimento já passou
    if(mes_nasc > mes_atual){
        idade = diferença_anos(ano_nasc,ano_atual) - 1
    }
    //verifica se o mês atual é igual e se o dia já passou ou não
    else if(mes_nasc === mes_atual && dia_atual < dia_nasc){
        idade = diferença_anos(ano_nasc,ano_atual) - 1
    }
    else{
        idade = diferença_anos(ano_nasc,ano_atual)
       }

    return idade
}
function main(){

    const dia_nascimento = io.get_number_int('Digite o seu dia de nascimento: ')
    const mes_nascimento = io.get_number_int('Digite o seu mês de nascimento: ')
    const ano_nascimento = io.get_number_int('Digite o seu ano de nascimento: ')

    const dia_atual = io.get_number_int('Digite o dia atual: ')
    const mes_atual = io.get_number_int('Digite o mes atual: ')
    const ano_atual = io.get_number_int('Digite o ano atual: ')

    if(validar_datas(dia_nascimento,mes_nascimento,ano_nascimento,dia_atual,mes_atual,ano_atual)){
        
        const valor_idade = computar_idade(dia_nascimento,mes_nascimento,ano_nascimento,dia_atual,mes_atual,ano_atual)
        
        io.print(`SEGUNDO SEUS DADOS VOCÊ =>
        NASCEU EM: ${dia_nascimento}/${mes_nascimento}/${ano_nascimento}
        E DATA ATUAL: ${dia_atual}/${mes_atual}/${ano_atual}
        SUA IDADE É DE ${valor_idade}.`)

    }else{
        io.print('A DATA É INVÁLIDA')
    }   
}

main()