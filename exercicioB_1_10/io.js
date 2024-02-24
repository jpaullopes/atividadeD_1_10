import { question } from "readline-sync"
 
export function get_number(numero){

    return Number(question(numero))
}

export function print(texto){

    return question(texto)
} 

export function get_number_int(numero){
    
    return Number.parseInt(question(numero))
}