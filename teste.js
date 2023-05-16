 //referenciar o html que vou alterar
 document.getElementById("paragrafo").innerHTML = "HELLO PICA";

 var obj1 = document.getElementById("paragrafo2");
 var n1 = 10



 function primeriaFuncaoSoma(num1){

    var x = num1 + 3 ; 


    return x; 

 }

// obj1.innerHTML = primeriaFuncaoSoma(n1);


 function AdicionaTitulo(){

    if(obj1.innerText === "TItulo criado via js" ){
        return obj1.innerHTML = "MAMACOOOOOOOOOOOOOOOO";
    }else{
        return obj1.innerHTML ="<h2>TItulo criado via js</h2>" ;
         }
 }