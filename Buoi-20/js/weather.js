let feellike = document.querySelector('.feel-like');
let windspeed = document.querySelector('.windspeed');
let tamnhin = document.querySelector('.visibility');
let apsuat = document.querySelector('.apsuat');
let doam = document.querySelector('.humidity');
let caonhat = document.querySelector('.maxtemp');

let diadiem = document.querySelector('.location');
let nhietdo = document.querySelector('.celcius');
let condition = document.querySelector('.condition');
let image = document.getElementById('image')
let current = document.getElementById("time");

// let xhr = new XMLHttpRequest()

// xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}', true)
// xhr.responseType = 'text'
// xhr.addEventListener('load', function(){
//     if(xhr.status === 200){
//         weather = JSON.parse(xhr.responseText);
//         console.log(weather);
//         populate();
//     }
//     else{   
//         console.log("Loi: " + xhr.status);
//     }
// }, false)
// xhr.send();

//Hai Phong

let lat;
let lon;

let option = document.getElementById('city').value;

if(option == "haiphong"){
    lat = 20.844912;
    lon = 106.688087;
}

setInterval(() => {
    let date = new Date();
    current.innerHTML = date.toLocaleDateString() + " " + date.toLocaleTimeString();
}, 1000);


console.log(lat, lon);

const apilink = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=86236dfa57f69157f43b10f2efba66a4&units=metric&lang=vi'

function HienThi() {
    let option = document.getElementById('city').value;
    fetch(apilink)
    .then(res => res.json()).then(data => {
        console.log(data);
        var city = data['name'];
        var region = data['sys']['country']
        var temp = data['main']['temp'];
        var description = data['weather'][0]['description'];
        var icon = data['weather'][0]['icon'];
        var camgiac = data['main']['feels_like'];
        var wind = data['wind']['speed'];
        var visibility = data['visibility'];
        var humidity = data['main']['humidity'];
        var pressure = data['main']['pressure'];
        var maxtemp = data['main']['temp_max'];
        const img = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

        if (option == 'haiphong') {

            diadiem.innerHTML = city + ', ' + region;
            nhietdo.innerHTML = temp.toFixed(0) + "℃";
            condition.innerHTML = description;
            image.src = img;

            feellike.innerHTML = "Cảm giác như: " + camgiac + "℃";
            windspeed.innerHTML = "Tốc độ gió " + wind + "km/h";
            tamnhin.innerHTML = "Tầm nhìn " + visibility + "m";
            doam.innerHTML = "Độ ẩm " + humidity + "RH";
            apsuat.innerHTML = "Áp suất: " + pressure + "P";
            caonhat.innerHTML = "Nhiệt độ cao nhất: " + maxtemp + "℃";
            console.log(feellike);
        }
        else if (option == 'haiphong') {

            diadiem.innerHTML = city + ', ' + region;
            nhietdo.innerHTML = temp.toFixed(0) + "℃";
            condition.innerHTML = description;
            image.src = img;

            feellike.innerHTML = "Cảm giác như: " + camgiac + "℃";
            windspeed.innerHTML = "Tốc độ gió " + wind + "km/h";
            tamnhin.innerHTML = "Tầm nhìn " + visibility + "m";
            doam.innerHTML = "Độ ẩm " + humidity + "RH";
            apsuat.innerHTML = "Áp suất: " + pressure + "P";
            caonhat.innerHTML = "Nhiệt độ cao nhất: " + maxtemp + "℃";
            console.log(feellike);
        }


    
    })
    .catch(error => alert("Khong hien thi dung"))

}



// fetch('https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apikey}')