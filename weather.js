const apiKey = `2aa324236296348473e018c0675e6e4a`

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");


const getWeather = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) =>{
    console.log(data);
    weather.innerHTML = `
                   
                <div class="card" style="width: 18rem;">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.main.temp}°C</h5>
                  <p class="card-text"><h1>${data.weather[0].main}</h1></p>
                </div>
              </div>
             
</div>
                              `
  
    
}

form.addEventListener("submit",
(event) => {
    getWeather(search.value);
    event.preventDefault();
})