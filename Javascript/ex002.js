


function brant1()

{
    let ano = document.querySelector("input").value



    if (ano %4 == 0 && ano %100 != 0){
        alert("O ano é bissexto");
    }
        
    else {
          alert("O ano é normal");
          
    }
}