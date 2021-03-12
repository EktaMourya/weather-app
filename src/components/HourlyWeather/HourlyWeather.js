import React from 'react';
import './HourlyWeather.css'
import { useParams } from "react-router-dom";
import WeatherTable from '../WeatherTable/WeatherTable';
import { useLocation } from 'react-router-dom'
const HourlyWeather = (props) => {
    let location = useLocation();
    
    const hourly = location.aboutProps
    
    const { day } = useParams()
    return (
        <div className="container">

            <header className="header">{day}</header>

            <table className="table">
                <tr>
                    <th>Time</th>
                    <th>Min Temp</th>
                    <th>MaxTime</th>
                </tr>
            </table>

            <WeatherTable temp={hourly} day={day} />
        </div>
    );
}
export default HourlyWeather;

