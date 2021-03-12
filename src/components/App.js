import React from 'react';
import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import Home from './Home/Home';
import HourlyWeather from './HourlyWeather/HourlyWeather';

const App = () => {
  return (
    <Router>
     
        <switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/hourlyWeather/:day" component={HourlyWeather}/>
        </switch>
     
    </Router>
  );
}

export default App;
