const apikey = "3cab2db98a25d6088b21ab316c8bed0d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function WeatherInformation(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    const data = await response.json() ;

    document.querySelector(".cit").innerHTML= data.name ;
    document.querySelector(".temp").innerHTML = data.main.temp + "C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%" ;
    console.log(data);
}
searchbtn.addEventListener("click",()=>{
    WeatherInformation(searchBox.value);
})
WeatherInformation();