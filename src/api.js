import moment from 'moment';

const apiKey = "edbb01e417c37a4b8c6655a1a70dd0d6";
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=3844421&appid=${apiKey}&units=metric&lang=es`;

export function loadWeather() {
    return fetch(apiUrl)
        .then(res => res.json())
        .then(obj => {
            const data = [];
            
            for (let i = 0; i < obj.list.length; i = i + 8) {
                const weather = obj.list[i];

                const d = {};

                d.day = moment.unix(weather.dt).format('ddd');
                d.max = weather.main.temp_max;
                d.min = weather.main.temp_min;
                d.icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

                data.push(d);
            }

            return data;
        });
}
