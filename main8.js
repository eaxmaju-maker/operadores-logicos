//um aluno é aprovado se tiver nota maior ou igual a 7 e frequencia maior ou igual a 75% 
var notaAluno = 6
var frequenciaAluno = 5
var trabalhoExtra = false 

if(notaAluno >= 7 && frequenciaAluno >= 75|| (notaAluno < 7 && trabalhoExtra == true) || frequenciaAluno >= 75){
    console.log("Aluno APROVADO!!")
}else{
    console.log("Aluno REPROVADO!!")
}