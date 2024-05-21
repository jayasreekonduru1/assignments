const city=document.getElementById("city");
const submit=document.getElementById("submit") 
// var cityname=null;
submit.addEventListener("click", (e)=>{
    const cityname=city.value
    console.log(city.value)

    const APIKEY="ddb2dfc6340b447abea143130232002";
    // const cityname="London";
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityname}`)
    .then((response)=>{
        if(response.status === 200){
            return response.json()
        }else{
            throw "Error"
        }
    })
    .then((result)=>console.log(result))
})





