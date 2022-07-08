function Bai1() {
    let n = document.getElementById("n").value;
    let sobuoc = document.getElementById("sobuoc");
    let sochan = document.getElementById("sochan");
    // 
    for (let i = 1; i <= n; i++) {
        sobuoc.innerHTML += i + " ";
    }
    // 
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sochan.innerHTML += i + " ";
        }
    }
}

function Bai2(){
    let a = document.getElementById("A").value;
    let n = document.getElementById("son");
    // 
    let sum = 0;
    let value = 1;
    while(sum <= a){
        sum += value;
        value++;
    }
    if(sum <= a){
        n = value;
    }
    console.log(sum);

    n.innerHTML = "N = " + n;
}

function Bai3(){
    let n = document.getElementById("chuson").value;
    let chusotrongn = document.getElementById("chusotrongn");
    let tongchuson = document.getElementById("tongchuson");
    let daonguoc = document.getElementById("daonguoc");
    let array = n.split('').map(i=>parseInt(i));

    console.log(array);

    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += array[i];
        console.log(sum);
    }

    chusotrongn.innerHTML = array.toString();
    tongchuson.innerHTML = sum;
    daonguoc.innerHTML = n.split('').reverse().join('');
}
