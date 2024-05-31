import React, { useState } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/weather/?city=${city}`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={fetchWeatherData}>Get Weather</button>

            {weatherData && (
                <div>
                    <h2>Weather in {weatherData.city}</h2>
                    <p>Temperature: {weatherData.temperature}</p>
                    <p>Condition: {weatherData.weather_condition}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherDashboard;
