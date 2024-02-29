//variables
let peso = 80
let altura = 1.84

//logical process
let imc = peso / Math.pow(altura, 2)

if (imc <= 18.4){
    console.log("Abaixo do peso")
} else if (imc <= 24.9){
    console.log("Peso normal")
} else if (imc <= 29.9){
    console.log("Acima do peso")
} else if (imc <= 39.9){
    console.log("Obeso")
} else {
    console.log("Obesidade grave")
}