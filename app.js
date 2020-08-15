var input_value = document.getElementById('inputValue');
var button = document.getElementById('button');
var city_name = document.getElementById('cityName');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');



button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f1f60bb66d167060a2845be999f78f81')
        .then(res => res.json())
        .then(data =>{
            var nameValue = data['name'];
            //console.log(nameValue);
            var temValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            cityName.innerHTML = nameValue;
            temp.innerHTML =(temValue-273).toFixed(1);
            desc.innerHTML = descValue;

            if(temValue >293.15 && temValue < 303.15){
                document.getElementById('weatherImg').src = "http://openweathermap.org/img/wn/02n@2x.png"
            }else if (temValue >=283.50 && temValue< 293.15){
                document.getElementById('weatherImg').src = "http://openweathermap.org/img/wn/10n@2x.png"
            }else{
                document.getElementById('weatherImg').src = "http://openweathermap.org/img/wn/01d@2x.png"
            }
        })
    .catch( err => alert('Wrong city you try!'))
})


    
