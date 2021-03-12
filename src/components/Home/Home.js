import React from "react";
import './Home.css';
import weather from '../Apis/Api';
import WeatherBody from '../WeatherBody/WeatherBody';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: [],
      forecast: [],
      city: null,
      day: null,
      isLoaded: false,
      date: null,
      weekdays: [],
      loopData: [] = []
    };
  }



  componentDidMount() {
    this.setState({ isLoaded: true });
  }
  searchCity = async city => {
    await weather.get(`?q=${city}&appid=c3b4a42c91f40d2749a6597ac31a528a`)
      .then(res => {
        const city = res.data.city.name;
        const temp = res.data.list
        const forecast = []
        for (let i = 0; i < res.data.list.length; i += 8) {
          forecast.push(res.data.list[i])
        }
        this.setState({
          forecast,
          temp,
          city,
          isLoaded: true
        });
        
      });
  };



  render() {
    const day = this.state.forecast.map(el => {
      this.date = new Date(el.dt_txt);
      this.weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      );
      return this.weekdays[this.date.getDay()];
    })

    const minTemp = this.state.forecast.map(el => {
      return parseInt(el.main.temp_min - 273.15);
    });

    const maxTemp = this.state.forecast.map(el => {
      return parseInt(el.main.temp_max - 273.15);
    });

    const icon = this.state.forecast.map(el => {
      return el.weather[0].icon;
    });

    const description = this.state.forecast.map(el => {
      return el.weather[0].description;
    });

    // Loader 
    if (!this.state.isLoaded) {
      return <Loader msg={'Loading....'} />
    }


    return (


      <div className="App">
        <React.Fragment>
          <SearchBar city={this.state.city} searchCity={this.searchCity} />
        </React.Fragment>
        <div className="weatherContainer pt-3 pb-3">
          <h5 className="cityName">{this.state.city}</h5>
          <WeatherBody temp={this.state.temp} day={day[0]} icon={icon[0]} minTemp={minTemp[0]} maxTemp={maxTemp[0]} description={description[0]} />
          <WeatherBody temp={this.state.temp} day={day[1]} icon={icon[1]} minTemp={minTemp[1]} maxTemp={maxTemp[1]} description={description[1]} />
          <WeatherBody temp={this.state.temp} day={day[2]} icon={icon[2]} minTemp={minTemp[2]} maxTemp={maxTemp[2]} description={description[2]} />
          <WeatherBody temp={this.state.temp} day={day[3]} icon={icon[3]} minTemp={minTemp[3]} maxTemp={maxTemp[3]} description={description[3]} />
          <WeatherBody temp={this.state.temp} day={day[4]} icon={icon[4]} minTemp={minTemp[4]} maxTemp={maxTemp[4]} description={description[4]} />

        </div>
      </div>

    );
  }
};

export default Home;