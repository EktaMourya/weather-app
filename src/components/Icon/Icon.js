import React from "react";
import "./Icon.css";
import Cloudy from "../../assets/cloudy.svg";

import Rain from "../../assets/rain.svg";
import Snowing from "../../assets/snowing.svg";
import Sun from "../../assets/sun.svg";
import Thermometer from "../../assets/thermometer.svg";

const Icon = (props) =>{
    switch(props.icon){
        case "01d" :
            return <img className="icon" src={Sun} alt={Sun}/>
            break;
            case "01n" :
                return <img className="icon" src={Sun} alt={Sun}/>
                break;
        case "02d" :
            return <img className="icon" src={Cloudy} alt={Cloudy}/>
            break;
        case "02n" :
            return <img className="icon" src={Cloudy} alt={Cloudy}/>
            break;
        case "03d" :
            return <img className="icon" src={Cloudy} alt={Cloudy}/>
            break;    
        case "03n" :
            return <img className="icon" src={Cloudy} alt={Cloudy}/>
            break;  
            case "04d" :
                return <img className="icon" src={Cloudy} alt={Cloudy}/>
                break;  
                case "04n" :
                    return <img className="icon" src={Cloudy} alt={Cloudy}/>
                    break;  
        case "09d" :
            return <img className="icon" src={Rain} alt={Rain}/>
            break;   
        case "09n" :
            return <img className="icon" src={Rain} alt={Rain}/>
            break;   
        case "10d" :
            return <img className="icon" src={Rain} alt={Rain}/>
            break; 
        case "10n" :
            return <img className="icon" src={Rain} alt={Rain}/>
            break; 
        case "11d" :
            return <img className="icon" src={Rain} alt={Rain}/>
            break; 
        case "11n" :
            return <img className="icon" src={Rain} alt={Rain}/>
            break; 
            case "13d" :
            return <img className="icon" src={Snowing} alt={Snowing}/>
            break;
        case "13n" :
            return <img className="icon" src={Snowing} alt={Snowing}/>
            break;
        
        default:
            return (
                <React.Fragment>
                    <img className="icon" src={Thermometer} alt={Thermometer}/>
                    <h5>{props.description}</h5>

                </React.Fragment>
            )    


            
    }
}


export default Icon;