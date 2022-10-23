let parg1 = document.querySelector('.parg')
let dateParag = document.querySelector('.date-class');
let imgWeather = document.querySelector('.weather-img');
let headerWeather = document.querySelector('header');
let degContent = document.querySelector('.deg');
let des = document.querySelector('.description')

let dateAll = new Date();

setInterval(() => {

    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(date.getHours() < 10 && date.getHours() >= 0){

        if(date.getMinutes()>=10){

            dateParag.innerHTML='0'+hours+':'+min;

        }else{

            dateParag.innerHTML='0'+hours+':'+'0'+min;

        }

    }if(date.getHours() >= 10 && date.getHours() >= 0){

        if(date.getMinutes()>=10){

            dateParag.innerHTML=hours+':'+min;

        }else{

            dateParag.innerHTML=hours+':'+'0'+min;

        }
    }
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=Limé&exclude=hourly,daily&appid=23f94b882581d884421a36c43c645221')
.then(res => res.json())
.then(data => { if(data){
    imgWeather.setAttribute('src', 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')

    des.innerHTML=data.weather[0].description;
    
    degContent.innerHTML = Math.round(data.main.temp-273,1)+'C<sup>°</sup>'; if(new Date().valueOf()>=data.sys.sunset){

        headerWeather.classList.add('sunset');

    }if(new Date().valueOf()>=data.sys.sunset+60*60*60){

        headerWeather.classList.add('night');

    }if(new Date().valueOf()>=data.sys.sunrise){

        headerWeather.classList.add('sunrise');

    }if(new Date().valueOf()>data.sys.sunrise+60*60*60){

        headerWeather.classList.add('clear')

    }

}});

setInterval(() => {


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Limé&exclude=hourly,daily&appid=23f94b882581d884421a36c43c645221')
    .then(res => res.json())
    .then(data => { if(data){
        imgWeather.setAttribute('src', 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')

        des.innerHTML=data.weather[0].description;
        
        degContent.innerHTML = Math.round(data.main.temp-273,1)+'<sup></sup>'; if(new Date().valueOf()>=data.sys.sunset){

            headerWeather.classList.add('sunset');

        };if(new Date().valueOf()>=data.sys.sunset+60*60*60){

            headerWeather.classList.add('night');

        };if(new Date().valueOf()>=data.sys.sunrise){

            headerWeather.classList.add('sunrise');

        };if(new Date().valueOf()>data.sys.sunrise+60*60*60){

            headerWeather.classList.add('clear')

        };

    }});
}, 60*60*60);


