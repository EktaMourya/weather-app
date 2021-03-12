import React from 'react';
import Icon from '../Icon/Icon';
import moment from 'moment'
const WeatherTable = (props) => {
  const temp = props.temp
  const hourlyData = []
  for (let i = 0; i < temp.temp.length; i++) {
    let dt = new Date(temp.temp[i].dt_txt);
    let matchday = dt.getDay();
    let weekdays = new Array(
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    let checkday = weekdays[matchday]
    if (props.day === checkday) {
      hourlyData.push(temp.temp[i])
    }
  }
  return (
    hourlyData.map((hourlyData) => {
      const { dt_txt } = hourlyData //destructuring
      const hours = moment(dt_txt).format("h:mm a")
      const icon = hourlyData.weather[0].icon
      const temp_min = hourlyData.main.temp_min
      const min = parseInt(temp_min - 273.15);
      const temp_max = hourlyData.main.temp_max
      const max = parseInt(temp_max - 273.15);
      const description = hourlyData.weather[0].description
      return (
       <table className="table table-wrapper">
                   <tr>
                    <td style={{width: "40%"}} ><Icon icon={icon} /><br />{hours}<br />{description}</td>
                <td style={{width: "30%"}}>{min}&#176;</td>
                <td style={{width: "30%"}}>{max}&#176;</td>
              </tr>
</table>
       
      )
    })
  );
}
export default WeatherTable;
