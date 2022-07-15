let dic = new Map();

dic.set("1", "HTML") //keys, value
dic.set("2", "CSS")
dic.set("3", "Javascript")

console.log(dic.keys())
console.log(dic.values())
console.log(dic.entries())

// 

const valueSet = new Set(["Pham", "Quang", "Sang"])
console.log(valueSet.values())
for(let i in valueSet.values()){
    console.log(valueSet.values(i));
}

function SNT(n) {
    let flag = true;
    if (n < 2) flag = false;
    else {
        for (let i = 0; i < n - 1; i++) {
            if(n % i == 0){
                flag = false;
                break;
            }
        }
    }
    if(flag == true) console.log("HHm")
}

function Bai5() {
    let n = parseInt(document.getElementById("son").value);
    let ai = parseInt(document.getElementById("son").value);
    mang = ai.split(' ').map(i => parseInt(i));


}