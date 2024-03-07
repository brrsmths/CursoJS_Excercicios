// se debito - 10% de desconto
// se dinheiro ou pix - 15% de desconto
// se 2x no crédito - preço normal da etiqueta sem juro
// se + que 2x no crédito - preço normal da etique + 10% de juros

let valorProduto = 100
let formaDePagamento = "debito"

if (formaDePagamento == "debito"){
    let precoFinal = valorProduto - (valorProduto * 0.1)
    console.log(precoFinal)
 } else if (formaDePagamento == "dinheiro" || formaDePagamento == "pix"){
    let precoFinal = valorProduto - (valorProduto * 0.15)
    console.log(precoFinal)
 } else if (formaDePagamento <= 2){
    let precoFinal = valorProduto
    console.log(precoFinal)
 } else if (formaDePagamento >= 2){
    let precoFinal = valorProduto + (valorProduto * 0.1)
    console.log(precoFinal)
 } else {
    console.log("Preencha a forma de pagamento!")
 }
