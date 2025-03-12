let nivel = ""
let VitoriaEDerrota = quantificar(20,7)




function quantificar(vitorias, derrotas) //ok
{ 
    return vitorias - derrotas

}


    if (VitoriaEDerrota >= 10)
    {
        nivel = "Ferro"
    }

    else if (VitoriaEDerrota < 11 && VitoriaEDerrota <= 20)
    {
        nivel = "Bronze"
    }

    else if (VitoriaEDerrota < 21 && VitoriaEDerrota <= 50)
    {
        nivel = "Prata"
    }

    else if (VitoriaEDerrota < 51 && VitoriaEDerrota <= 80)
    {
        nivel = "Ouro"
    }
    
    else if (VitoriaEDerrota < 81 && VitoriaEDerrota <= 90)
    {
        nivel = "Diamante"
    }

    else (VitoriaEDerrota < 91 && VitoriaEDerrota <= 100);
    {
        nivel = "Lendário"
    }

    console.log("O Herói tem de saldo de " + VitoriaEDerrota + " está no nível: " + nivel)