const cityName = document.getElementById('cityname')
const searchBtn = document.getElementById('searchbtn')
const apiKey = 'a05c20664839d452533d28ac2570722a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiUnsplash = 'pL_K8WhpZcp6aW0r2hrnMAuiqHBh8RvmQkjujylAL1o'


const weather = async(cityName) => {
    await fetch(`${apiUrl}${cityName}&appid=${apiKey}&units=metric&lang=az`)
        .then(response => response.json())
        .then(data => {
           weatherinfo(data)
        })
}
const backPicture = async(cityName) => {
    await fetch(`https://api.unsplash.com/search/photos?page=1&query=${cityName}&client_id=${apiUnsplash}`)
        .then(request => request.json())
        .then(respon => {
            document.getElementById('img').innerHTML = `<img src = '${respon.results[Math.floor(Math.random() * 10)].urls.small}' width="460px" height="385px"/>`

        })
}

const weatherinfo = (data) => {
    document.getElementById('weathericon').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' width="80px" height="80px">`
    document.getElementById('weathericonbig').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' width="120px" height="120px">`
    document.getElementById('description').innerText = data.weather[0].description
    document.getElementById('cloud').innerText = data.weather[0].main
    document.getElementById('celci').innerHTML = `<p>${data.main.temp}°</p>`
    document.getElementById('humid').innerHTML = `<p>Humidity : ${data.main.humidity}%</p>`
    document.getElementById('wind').innerHTML = `<p>Feels like : ${data.main.feels_like}°</p>`
    document.getElementById('speed').innerHTML = `<p>Wind speed : ${data.wind.speed} km/h</p>`
    document.getElementById('name').innerText = data.name
}

document.body.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        weather(cityName.value)
        backPicture(cityName.value)
    }
})

