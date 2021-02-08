import './Weather.css'
import React, { useState } from 'react';

const Weather = () => {
    const [results, setResults] = useState('');
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('imperial');

    const fetchResults = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=39.7684&lon=86.1581&appid=3856c7646acd1dd91c6e74cd0cfbe292&units=${unit}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResults(Math.round(data.main.temp))
                setDescription(data.weather[0].description)
            })
            .catch(err => console.log(err))
    };

    const toggleUnit = () => {
        unit === 'imperial' ? setUnit('metric') : setUnit('imperial');
    }

    fetchResults();

    return (
        <div className="weather">
            <div>
                <h2>It is currently {results} degrees with {description}.</h2>
                <button onClick={toggleUnit}>Click for Fahrenheit/Celsius</button>
            </div>
        </div>
    );
};

export default Weather;