function suma (...numerosArray)
{
    let totalFun=0;
    for(numero of numerosArray)
        totalFun += numero;
    return totalFun;
}

document.write(suma(1, 9, 20, 105));