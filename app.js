const button = document.getElementById('get-location-button')
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const datetime = document.getElementById('datetime');

async function getData(lat,long) {
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d2f34f983bbb4e9d81f130129231308&q=${lat},${long}&aqi=yes`);
  return await promise.json()
}


async function gotlocation(position){
  const result = await getData(position.coords.latitude,position.coords.longitude);
  console.log(result);
  cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`;
  datetime.innerText = "DATE & TIME";
  cityTime.innerText = result.location.localtime ;
  cityTemp.innerText = result.current.temp_c + "°C";
}

function failedToget() {
  console.log('There is some issue')
  cityName.innerText = "Can't Fetch Your Location";
}


button.addEventListener('click',async() => {
  navigator.geolocation.getCurrentPosition(gotlocation,failedToget)

  
})

