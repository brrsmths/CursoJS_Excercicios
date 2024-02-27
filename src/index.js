const precoCombustivel = 5.79;
const gastoMedio = 10;
let distanciaViagemEmKM = 938;

let litrosConsumidos = distanciaViagemEmKM / gastoMedio;
let valorGasto = litrosConsumidos * precoCombustivel;
console.log(`O valor gasto em combustivel nesta viagem de ${distanciaViagemEmKM} KM, foi de R$${valorGasto}.`)


