
function Bai1(){
    let a = document.getElementById("soa").value;
    if(a<0){
        document.getElementById("result1").innerHTML = "Đây là số nguyên âm";
    }
    else if(a>0) document.getElementById("result1").innerHTML = "Đây là số nguyên dương";
}

function Bai2(){
    let a = prompt("Nhap so a");
    let b = prompt("Nhap so b");
    document.getElementById("maxnumber").innerHTML = Math.max(a, b);
}

function Bai3(){
    let a = prompt("Nhap so a");
    let b = prompt("Nhap so b");
    let c = prompt("Nhap so c");
    document.getElementById("maxnumber2").innerHTML = Math.max(a, b, c);
}

function Bai4(){
    let chuoi = prompt("Viet chuoi");

    let xoadau = chuoi.replace(/\s+/g, ' ').trim();
    const split_str = xoadau.split(" ");
    
    document.getElementById("chuoi").innerHTML = split_str;
    console.log(split_str);
}
