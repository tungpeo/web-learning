const api = "https://restcountries.com/v3.1/name/v";

let data = []

function call() {
    fetch(api).then(res => {
        res.json().then(countries => {
            data = countries.map(item => {
                return {
                    name: item.altSpellings ?.[3] || item.altSpellings?.[0],
                    countrycode: item.cca2,
                }
            })
            console.log(data);
        })
    })

}

// .then(countries => {
//     data = countries.map(item => {
//         return {
//             name: item.altSpellings ? . [3] || item.altSpellings ? . [0],
//             countrycode: item.cca2
//         }
//     })
//     console.log(data);
// })
// }