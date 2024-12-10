

document.getElementById("botafogo").innerText = "" 

function brant3()

{
    let nota1 = document.querySelector(".input1").value
    let nota2 = document.querySelector(".input2").value
    let nota3 = document.querySelector(".input3").value

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

let media = (nota1 + nota2 + nota3 / 3)

//alert("a media é " + media)

document.getElementById("botafogo").innerText = "A média das notas é " 

}


