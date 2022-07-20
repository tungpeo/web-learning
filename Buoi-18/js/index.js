// let dic = new Map();

// dic.set("1", "HTML") //keys, value
// dic.set("2", "CSS")
// dic.set("3", "Javascript")

// console.log(dic.keys())
// console.log(dic.values())
// console.log(dic.entries())

// // 

// const valueSet = new Set(["Pham", "Quang", "Sang"])
// console.log(valueSet.values())
// for (let i in valueSet.values()) {
//     console.log(valueSet.values(i));
// }

function SNT(n) {
    if (n < 2) return false;
    else {
        for (let i = 0; i < n - 1; i++) {
            if (n % i == 0) {
                return false;
            }
        }
    }
}

function HH(n) {
    let s = 0;
    for (let i = 0; i < n / 2; i++) {
        if (n % i == 0) s += i;
    }
    if (s == n) return true;
    else return false;
}

function Bai5() {
    let n = parseInt(document.getElementById("son").value);
    let ai = document.getElementById("ai").value;
    let output = document.getElementById("output");

    mang = ai.split(' ').map(i => parseInt(i));
    let check = [];
    let checklength = mang.length;

    if (checklength > n || checklength < n) alert("Gia tri khong khop voi n");
    else if (checklength == n) {
        for (let i = 0; i < mang.length; i++) {
            if(SNT(mang[i])){
                mang[i] = "NT";
            }
            else if (mang[i] % 2 == 0) {
                mang[i] = "SC";
            } else if (mang[i] % 2 !=0) {
                mang[i] = "SL";
            }

        }

    }
    console.log(mang);
    output.innerHTML = "Output: " + mang;
}