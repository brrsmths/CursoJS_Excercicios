//variables
let notaUm = 6
let notaDois = 6
let notaTres = 6

//logical process
let mediaNotas = (notaUm + notaDois + notaTres) / 3;

if (mediaNotas <= 5){
    console.log("Aluno reprovado")
} else if (mediaNotas <= 7){
    console.log("Aluno ficou de recuperação")
} else {
    console.log("Aluno aprovado")
}