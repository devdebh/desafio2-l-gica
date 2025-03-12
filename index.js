let nivel = ""
let vitoriaEDerrota = quantificar(80,7)

function quantificar(vitorias, derrotas) 
{ 
    return vitorias - derrotas

}


if (vitoriaEDerrota  >= 10)
{
    nivel = "Ferro"
}

else if (vitoriaEDerrota  < 11 && vitoriaEDerrota <= 20)
{
    nivel = "Bronze"
}

else if (vitoriaEDerrota  < 21 && vitoriaEDerrota  <= 50)
{
    nivel = "Prata"
}

else if (vitoriaEDerrota   < 51 && vitoriaEDerrota  <= 80)
{
    nivel = "Ouro"
}

else if (vitoriaEDerrota  < 81 && vitoriaEDerrota <= 90)
{
    nivel = "Diamante"
}

else if (vitoriaEDerrota < 91 && vitoriaEDerrota <= 100)
{
    nivel = "Lendário"
}

else (vitoriaEDerrota > 101)
{
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + vitoriaEDerrota + " está no nível: " + nivel)
