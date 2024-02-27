//Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

import * as io from './io.js'

//função que verifica se o ano informado na data é bissexto
function verificador_ano_bissexto(ano){
    return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)
            
}

//função que verifica se o mês tem 30 dias
function verificar_mes_30_dias(mes) {
    return mes === 4 || mes === 6 || mes === 9 || mes === 11
  
}

//função que vai verificar se a data informada é válida ou não
function verificar_data(dia,mes,ano){
    
    //verificar se o dia informado é válido
    if(dia < 1 || dia > 31){
        return false
    }
    //verificar se o mês informado é válido
    if(mes < 1 || mes > 12){
        return false
    }
    //verificar se o ano for bissexto e se o mês for fevereiro se o dia vai ser válido
    if(verificador_ano_bissexto(ano)){
        if(mes === 2 && dia > 29){
            return false
        }else{
            return true
        }
    }else{
        if(mes === 2 && dia > 28){
            return false
        }
    }
    //se o dia informado vai ser válido nos meses com só 30 dias
    if(verificar_mes_30_dias(mes)) {
        return dia > 30
    }

    return true
    
}

function main(){

    const data_dia = Number.parseInt(io.get_number('Digite o dia: '))
    const data_mes = Number.parseInt(io.get_number('Digite o mês: '))
    const data_ano = Number.parseInt(io.get_number('Digite o ano: '))

    if(verificar_data(data_dia,data_mes,data_ano)){
        io.print(`A data é [${data_dia}/${data_mes}/${data_ano}] É VÁLIDA`)
    }else{
        io.print(`A data [${data_dia}/${data_mes}/${data_ano}] NÃO É VÁLIDA`)
    }
}

main()
