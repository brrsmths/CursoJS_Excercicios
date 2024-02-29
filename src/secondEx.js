let tipoCombustivel = "Etanol"
let precoGasolina = 5.77
let precoEtanol = 3.88
let gastoMedioPorKM = 10
let distanciaViagem = 100
let valorGasto

//processo lógico
if (tipoCombustivel === "Gasolina"){
    let litrosConsumidos = distanciaViagem / gastoMedioPorKM
    let valorGasto = litrosConsumidos * precoGasolina
    console.log(`O valor gasto nessa viagem foi de R$${valorGasto.toFixed(2)}`)
} else if(tipoCombustivel === "Etanol"){
    let litrosConsumidos = distanciaViagem / gastoMedioPorKM
    let valorGasto = litrosConsumidos * precoEtanol
    console.log(`O valor gasto nessa viagem foi de R$${valorGasto.toFixed(2)}`)
} else {
    console.log("Não foi informado o tipo de combustivel")
}