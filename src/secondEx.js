let tipoCombustivel = "Etanol"
let gastoMedioPorKM = 10
let distanciaViagem = 100
let valorGasto

//processo lógico
if (tipoCombustivel === "Gasolina"){
    let precoCombustivel = 5.77
    let litrosConsumidos = distanciaViagem / gastoMedioPorKM
    let valorGasto = litrosConsumidos * precoCombustivel
    console.log(`O valor gasto nessa viagem foi de R$${valorGasto.toFixed(2)}`)
} else if(tipoCombustivel === "Etanol"){
    let precoCombustivel = 3.88
    let litrosConsumidos = distanciaViagem / gastoMedioPorKM
    let valorGasto = litrosConsumidos * precoCombustivel
    console.log(`O valor gasto nessa viagem foi de R$${valorGasto.toFixed(2)}`)
} else {
    console.log("Não foi informado o tipo de combustivel")
}