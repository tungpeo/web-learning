$('#test').html('TEST').css('color', 'red')

$('#test').append('<p id="test2">dm sang<p>')


fetch('https://quizapi.io/api/v1/questions?apiKey=N9hEQZtajLpI1pmunPGlf9uj9Al9Ys070LpwKb4w&limit=50&category=Linux')
.then(res => res.json()).then(data =>{
    console.log(data)
})