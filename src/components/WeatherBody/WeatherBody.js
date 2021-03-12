import React from "react";
import "./WeatherBody.css";
import Days from "../Days/Days";
import Icon from "../Icon/Icon";
import Temp from "../Temp/Temp";
import { NavLink } from "react-router-dom";

const WeatherBody = (props) => {
    
    return(
        <NavLink to={{pathname:`/hourlyweather/${props.day}`,aboutProps:{
            temp:props.temp
        }}}>
        <div className="WeatherBody card">
            <Days day={props.day}/>
            <Icon icon={props.icon}/>
            <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} description={props.description}/>
            {props.description}
        </div>
        </NavLink>
    );
};

export default WeatherBody;