console.log("THIS IS A CONSOLE LOG");

let a = 1;
var b = 5;
const PI = 3.14;

a = a + 5;

console.log(`So co gia tri la ${a}, ${b}, ${PI}`);

let c = a - b;
let d = a * b;
let e = a / b;

console.log('Gia tri cua ' + c + ' ' + d + ' ' + e + ' ');


console.log("2" !== 2)

function onClick(){
    const P = document.getElementById("Ptag");
    let input = prompt("moi ban nhap");
    P.innerHTML = input;
    P.style.color = "red";
}



