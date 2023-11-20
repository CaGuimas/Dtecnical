
/* n > 0
retorna o somatario dos elementos divisíveis por 3
e 5. Vou criar um array de n elementos e depois passar
o método filter no array, trazendo assim um novo array
com os elementos solicitados, agora faço o somatario com o método reduce
que me possibilita retorna um único número tomado um array de n elementos.

variable[i]
*/
function main(n) {
    const zr = document.getElementById("resultado");
    const myarr = Array.from({ length: n }, (_, i) => i);
    
    const c = myarr.filter((element) => element % 3 === 0 || element % 5 === 0);
    const sum = c.reduce((acc, curr) => acc + curr, 0);
    zr.innerHTML = sum;
}

window.addEventListener("load", function creates() {
    const box = document.querySelector(".box");
   
    const div = document.createElement("div");
    const h2 = document.querySelector("h2");
    
    div.appendChild(h2);

    const inpt = document.getElementById("inpt");
    div.appendChild(inpt);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.appendChild(div);
    resultadoDiv.appendChild(document.querySelector(".btn"));
});


