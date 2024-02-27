// declarações
const precoCombustivel = 5.79;
const gastoMedio = 10;
let distanciaViagemEmKM = 938;

//processo lógico
let litrosConsumidos = distanciaViagemEmKM / gastoMedio;
let valorGasto = litrosConsumidos * precoCombustivel;

//saída
console.log(`O valor gasto em combustivel nesta viagem de ${distanciaViagemEmKM} KM, foi de R$${valorGasto}.`);

//saída arredonda
console.log(valorGasto.toFixed(2))
console.log(`O valor gasto em combustivel nesta viagem de ${distanciaViagemEmKM} KM, foi de R$${valorGasto.toFixed(2)}.`);