
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
    let ankytu2 = sdt.split(4);
    let add = ankytu2.concat("****");
    let xoa;
    
    if(add.includes(0, 0)){
        xoa = add.substr(1);
        document.getElementById("ankytu").innerHTML = xoa;  
    }
    else{
        document.getElementById("ankytu").innerHTML = ankytu2;
    }
    
    
}

function Bai8(){
    let validate = document.getElementById("phone").value;
    let regex = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    if(validate.match(regex)){
        document.getElementById("sodienthoai").innerHTML = "Day la so dien thoai"; 
    }
    else{
        document.getElementById("sodienthoai").innerHTML = "Day khong phai la so dien thoai"; 
    }
}

