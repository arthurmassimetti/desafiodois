function rankedNivel(vitorias, derrotas){
    const SaldoVitorias = vitorias - derrotas;
    let nivel;

    if(SaldoVitorias < 10){
        nivel = "Ferro"
    }else if(SaldoVitorias >= 11 && SaldoVitorias <= 20){
        nivel= "Bronze"
    }else if(SaldoVitorias >= 21 && SaldoVitorias <= 30){
        nivel= "Prata"
    }else if (SaldoVitorias >= 31 && SaldoVitorias <=40){
        nivel= "Ouro"
    }else if(SaldoVitorias >= 41 && SaldoVitorias <=50){
        nivel= "Diamate"
    }else if (SaldoVitorias >= 51 && SaldoVitorias <=60){
        nivel= "Lendário"
    }else if (SaldoVitorias >= 61 && SaldoVitorias <=100){
        nivel= "imortal";
    }else {
        nivel = "Bolsonaro"
    }
    
    return {SaldoVitorias, nivel};
}
//aqui você coloca as vitorias e derrotas
const resultado = rankedNivel(160, 100);
console.log("O seu perfil se encaixa no rank: " + resultado.nivel + " e suas vitorias somam: " + resultado.SaldoVitorias)