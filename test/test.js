const getWeatherbtn = document.getElementById('getWeather') 
const weatherResult = document.getElementById('weatherResult')
const input = document.getElementById('city')
const getlocation = document.getElementById('get-location')
const cityname= document.getElementById('city-name')
const cityname2= document.getElementById('city-name2')
const citytemp = document.getElementById('city-temp')
const citytemp2 = document.getElementById('city-temp2')
const citytime = document.getElementById('city-time')
const citytime2 = document.getElementById('city-time2')


//function of generating weather 
async function getdata(cityname) {
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=1cff0d4be4774d39870191914253003&q=${cityname}&aqi=yes`)
    return await promise.json()
}

// show result of generated weather on window 
 getWeatherbtn.addEventListener('click', async () => {
    const value =  input.value;
    const result = await getdata(value);
    console.log(result)
    cityname.innerText = `${result.location.name} , ${result.location.region}, ${result.location.country}` ;
    citytemp.innerText = result.current.temp_c;
    citytime.innerText = result.location.localtime;
});


// function of get location function , button // call gotlocation function and failedlocation function
getlocation.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition( gotlocation , failedlocation )
});


// function of geting weahter data from server
async function getdata2(lati ,long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=1cff0d4be4774d39870191914253003&q=${lati},${long}&aqi=yes`)
     return await promise.json()
 }


// function of show result of get location automatic
async function gotlocation(position){
   const result2 = await getdata2(position.coords.latitude,position.coords.longitude)
   console.log(result2)
   cityname2.innerText = `${result2.location.name} , ${result2.location.region} , ${result2.location.country}`; 
   citytemp2.innerText = result2.current.temp_c;
   citytime2.innerText = result2.location.localtime
};  


// function of show result of failed location 
function failedlocation(failed){
    console.log("failed to get location")
};



