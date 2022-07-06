
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
    
    document.getElementById("chuoi").innerHTML = xoadau;
    console.log(split_str);
}

function Bai5(){
    let chuoi2 =  prompt("Nhập chuỗi cần chuẩn hóa: ");

    let xoadau = chuoi2.replace(/\s+/g, ' ').trim();
    let mang = xoadau.split(' ');
    for (var i = 0; i < mang.length; i++) {
        mang[i] = mang[i].charAt(0).toUpperCase() + mang[i].substring(1);     
    }
    let gop = mang.join(' '); 
    
    document.getElementById("chuanhoachuoi").innerHTML = gop;
}

function Bai6(){
    let b = prompt("Nhập chuỗi b");
    let a = prompt("Nhap chuỗi cần tìm kiếm");
    if(b.includes(a)){
        document.getElementById("checkstatus").innerHTML = "YES";
        document.getElementById("first").innerHTML = b.indexOf(a);
        document.getElementById("last").innerHTML = b.lastIndexOf(a);
    }
    else{
        document.getElementById("checkstatus").innerHTML = "NO";  
    }
}

function Bai7(){
    let sdt = document.getElementById("sdt").value;
    let ankytu = sdt.replace(/\d{4}$/, '****');
    let xoa;
    
    if(ankytu.includes(0, 0)){
        xoa = ankytu.substr(1);
    }
    
    document.getElementById("ankytu").innerHTML = xoa;  

}