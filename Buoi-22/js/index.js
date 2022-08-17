setInterval(() => {
    let current = document.getElementById("currentTime");
    let date = new Date();
    current.innerHTML = date.toLocaleDateString() + " " + date.toLocaleTimeString();
}, 1000);


const HienThi = (country) => () => {
    alert(JSON.stringify(country))
}

const getCountry = (countries) => {
    const list = document.getElementById('list-regions')
    countries.map((country) => {
        const countryNode = document.createElement('button')
        countryNode.className = "city"
        countryNode.innerHTML = country.name;

        list.appendChild(countryNode)
    })
}


const fetchCity = () => {
    fetch('https://api-country-production.up.railway.app/country/cities?country_code=VN').then(res => {
        res.json().then(city => {
            const cities = cites.map(item => {
                return {
                    name: item.altSpellings?.[3] || item.altSpellings ?.[1] || item.altSpellings[0],
                    country_code: item.cca2
                }
            })
        })
    })
}

const fetchCountry = () => {
    fetch('https://restcountries.com/v3.1/all').then(res => {
        res.json().then(country => {
            const countries = country.map(item => {
                return {
                    name: item.altSpellings ?.[3] || item.altSpellings ? . [1] || item.altSpellings[0],
                    country_code: item.cca2
                }
            })
            console.log(countries);
            getCountry(countries)
        })
    })
}

fetchCountry();