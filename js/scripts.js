let student = prompt("Qual o nome do aluno?")
let nota1 = prompt("Qual a nota da primeira prova?")
let nota2 = prompt("Qual a nota da segunda prova?")
let nota3 = prompt("Qual a nota da terceira prova?")

let average = (Number(nota1) + Number(nota2) + Number(nota3) / 3)

let result = average > 6

average = average.toFixed(2)

if(result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average)
}  else {
 alert(student + ", estude para sua prova de recuperação! Sua média foi de: " + average)
}