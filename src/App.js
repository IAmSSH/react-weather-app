import React, { Component } from 'react';
import Form from './Form';
import WeatherCard from './WeatherCard';

class App extends Component {

  state = {
    weatherObj: null
  }
  weather = (cityWeather) => {
    this.setState({
      weatherObj: cityWeather
    });
  }

  render() {
    return(
      <div>
        <Form weather={this.weather}/>
        <WeatherCard weatherObj={this.state}/>        
      </div>
    );
  }
}

export default App; 