const enter=document.querySelector('.enter');
const rec4button=document.getElementById('rec4button');
const place = document.getElementsByClassName('place')[0];
const temperature = document.getElementsByClassName('temperature')[0];


async function checkweather(city){
  
    
    place.innerHTML=city;

    const api_key="3e74389e5af402013728865070bf0ba6";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const data=await fetch(`${url}`).then(response => response.json());
    var tempera=Math.round(data.main.temp-273.15);
    console.log(tempera);

    temperature.innerHTML=`${tempera} &#8451;`;
   
     
    console.log(data)
}

rec4button.addEventListener('click', ()=>{
    checkweather(enter.value);
});