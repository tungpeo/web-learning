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

function Bai2() {
    let a = document.getElementById("A").value;
    let n = document.getElementById("son");
    // 
    let sum = 0;
    let value = 1;
    while (sum <= a) {
        sum += value;
        value++;
    }
    if (sum <= a) {
        n = value;
    }
    console.log(sum);

    n.innerHTML = "N = " + n;
}

function Bai3() {
    let n = document.getElementById("chuson").value;
    let chusotrongn = document.getElementById("chusotrongn");
    let tongchuson = document.getElementById("tongchuson");
    let daonguoc = document.getElementById("daonguoc");
    let array = n.split('').map(i => parseInt(i));

    console.log(array);

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        console.log(sum);
    }

    chusotrongn.innerHTML = array.toString();
    tongchuson.innerHTML = sum;
    daonguoc.innerHTML = n.split('').reverse().join('');
}

function Bai4() {
    let mang = document.getElementById("mang").value;
    let soluongduong = document.getElementById("soluongduong");
    let soluongam = document.getElementById("soluongam");
    let duongmax = document.getElementById("duongmax");
    let ammax = document.getElementById("ammax");
    taomang = mang.split(' ');
    let mangam = [];
    let mangduong = [];
    let count = 0;
    let count2 = 0;
    // 
    for (let i = 0; i < taomang.length; i++) {
        if (taomang[i] > 0) {
            mangduong.push(taomang[i]);
            count++;
        }
    }
    for (let i = 0; i < taomang.length; i++) {
        if (taomang[i] < 0) {
            mangam.push(taomang[i]);
            count2++;
        }
    }
    console.log('mang duong: ' + mangduong);
    console.log('mang am: ' + mangam);
    soluongduong.innerHTML = 'So luong duong: ' + count;
    soluongam.innerHTML = 'So luong am: ' + count2;

    let max = mangduong[0];
    let min = mangduong[0];
    for (let i = 0; i < mangduong.length; i++) {
        if (max < mangduong[i]) {
            max = mangduong[i];
        }
    }
    
    duongmax.innerHTML = 'Dương Max: ' + max;
    ammax.innerHTML = 'Dương Min: ' + min;

}