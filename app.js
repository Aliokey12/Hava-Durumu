const url = 'https://api.openweathermap.org/data/2.5/';
const key = '9709ee4dbe40843a2c8e1def5fb7e096';

const settQuerry = (e) => {
    if(e.keyCode == '13')
    getResualt(searchBar.value)
}

const getResualt = (cityName) => {
   let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
   .then(weather=>{
return weather.json()
 })
   .then(displayResult)
}

const displayResult = (result) => {
let city = document.querySelector('.city')
city.innerText = `${result.name}, ${result.sys.country}`

let temp = document.querySelector('.temp')
temp.innerText = `${Math.round(result.main.temp)}°C`

let desc = document.querySelector('.desc')
desc.innerText = result.weather[0].description

let minmax = document.querySelector('.minmax')
minmax.innerText = `${Math.round(result.main.temp_min)}°C /
${Math.round(result.main.temp_max)}`
}


const searchBar = document.getElementById('SearchBar')
SearchBar.addEventListener('keypress', settQuerry)



