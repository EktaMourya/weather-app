import React from 'react';
import './HourlyWeather.css'
import { useParams } from "react-router-dom";
import WeatherTable from '../WeatherTable/WeatherTable';
import { useLocation } from 'react-router-dom'
const HourlyWeather = () => {
    let location = useLocation();
    
    const hourly = location.aboutProps
    
    const { day } = useParams()
    return (
        <div className="container">

            <header className="header">{day}</header>

            <table className="table table-wrapper">
                <tr>
                    <th style={{width: "40%"}}>Time</th>
                    <th style={{width: "30%"}}>Min Temp</th>
                    <th style={{width: "30%"}}>MaxTime</th>
                </tr>
            </table>

            <WeatherTable temp={hourly} day={day} />
        </div>
    );
}
export default HourlyWeather;

