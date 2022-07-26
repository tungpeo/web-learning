// class SV{
//     constructor(ten, tuoi=23){
//         this.ten = ten;
//         this.tuoi = tuoi;
//     }
// }

// const SV2 = new SV("Phong", "24");
// console.log(SV2);


//Bai 1
class TamGiac {
    a = 0;
    b = 0;
    c = 0;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ChuVi() {
        const cv = this.a + this.b + this.c;
        return cv;
    }
    DienTich(p) {
        console.log(p)
        const dt = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return dt;
    }

}





console.log(TG.DienTich(nuachuvi))



function Bai1() {
    let a = parseInt(document.getElementById("soa").value);
    let b = parseInt(document.getElementById("soa").value);
    let c = parseInt(document.getElementById("soa").value);
    let output = document.getElementById("output")
    const TG = new TamGiac(a,b,c);

    let kieutg = "";
    let chuvi = TG.ChuVi();
    const nuacv = TG.ChuVi() / 2;
    let dientich = TG.DienTich(nuacv);

    if (a == '' && b == '' && c == '') {
        alert("Khong duoc de rong")
    } else if ((a + b > c) && (a + c > b) && (b + c > a) && (a > 0) && (b > 0) && (c > 0)) {
        if ((a == b) && (b == c)) {
            kieutg = "Tam giac deu";
        } else if ((a == b) || (a == c) || (b == c)) {
            kieutg = "Tam giac can";
        } else if ((a * a == b * b + c * c) && (c == b) || (b * b == a * a + c * c) && (a == c) || (c * c == b * b + c * c) && (b == c)){
            kieutg = "Tam giac vuong can"
        }
        else {kieutg = "Tam giac thuong"}
        
    }
    else alert("Tam giac khong ton tai");
    output.innerHTML = "Kieu tam giac: " + kieutg + "<br>" + "Chu vi: " + chuvi + "<br>" + "DienTich: " + dientich;
}