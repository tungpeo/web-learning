const SV = {
    thongtin: [],

    addSV: function (Them) {
        this.thongtin.push(Them)
    },

}

function Them() {
    let ten = document.getElementById("ten").value;
    let tuoi = document.getElementById("tuoi").value;
    let diachi = document.getElementById("diachi").value;

    if (ten != "" && tuoi != "" && diachi != "") {
        SV.addSV({
            ten: ten,
            tuoi: tuoi,
            diachi: diachi
        })

    } else document.getElementById("show").innerHTML = "Khong duoc de trong";
    console.log(SV);
}

function Hienthi(){
    let show = document.getElementById("show");

    for(let i=0; i< SV.thongtin.length;i++){
        show.innerHTML += "Ten: " + SV.thongtin[i].ten + " Tuoi: " + SV.thongtin[i].tuoi + " Dia chi:" + SV.thongtin[i].diachi + "<br>";
        console.log(SV.thongtin[i].name);
    }
}

function sortten(a,b){
    if(a.ten > b.ten){
        return 1;
    }
    else if(a.ten < b.ten){
        return -1;
    }
    return 0;
}

function Sapxep(){

    let show = document.getElementById("show");

    SV.thongtin.sort(sortten);
    for(let i=0; i< SV.thongtin.length;i++){
        show.innerHTML += "Ten: " + SV.thongtin[i].ten + " Tuoi: " + SV.thongtin[i].tuoi + " Dia chi:" + SV.thongtin[i].diachi + "<br>";
        console.log(SV.thongtin[i].name);
    }

}