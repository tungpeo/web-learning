function Bai2dot1() {
    let n = parseInt(document.getElementById("A").value);

    let dem = [];

    const array = (a) => {
        if (a <= n && a >= 1) {
            dem.push(a);
            a = a - 1;
            array(a);
        } else {
            return dem;
        }
    }
    array(n);
    console.log(dem);

    let sum = 0;

    dem.forEach((a)=>{
        sum += a;
    })
    console.log(sum);

}

// Nâng cao: Nhập từ bàn phím n số ngẫu nhiên, 
// tính tổng các chữ số trong A[i] với i từ 0,n. 
// A[i] là phần tử trong mảng n phần tử, k
// ết quả lấy phép dư của 10000007. 
// N tối thiểu được nhập từ bàn phím là 1000000000 -> kết quả tính toán không quá 2s

function Bai3(){
    let n = parseInt(document.getElementById("A").value);
    let array = n.split(' ').map(n=>parseInt(n));


    array.forEach((arr)=>{

    })

}