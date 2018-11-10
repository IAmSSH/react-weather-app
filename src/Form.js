import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {

    state = {
        cityName: '',
        imgs: [],
        temps: [],
        weatherDescs: [],
        dates: []
        
    }

    handleTextChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            cityName: event.target.value,            
        });
    }

    handleBtnClick = () => {
        // console.log(this.state.cityName);
        const reqURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + this.state.cityName + "&APPID=6c307eade9c50ee3c02ac355e19c0003";
        var temps = [], 
        weatherDescs = [], 
        imgs = [],
        dates = [];

        axios.get(reqURL)
            .then((res) => {
                // console.log(res);
                // console.log(res.data.list[0].main.temp);
                for(let i = 0; i < 5; i++) {
                    temps.push(Math.round(res.data.list[i].main.temp - 273));
                    weatherDescs.push(res.data.list[i].weather[0].main);
                    let date = new Date(res.data.list[i].dt * 1000);
                    dates.push(date.toLocaleTimeString());
                    imgs.push(res.data.list[i].weather[0].icon)
                    // console.log(res.data.list[i].weather[0].icon);
                }
                // console.log(imgs);
                this.setState({
                    temps: temps,
                    weatherDescs: weatherDescs,
                    dates: dates,
                    imgs: imgs
                });
                this.props.weather(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return(
            <div className="container">
                <div className="form-group mt-5">
                    <h4>City</h4>
                    <input type="text" className="form-control" id="city-input" placeholder="Enter city" onChange={this.handleTextChange}/>
                    <button className="btn btn-primary" onClick={this.handleBtnClick}>Go</button>
                </div>
                
            </div>
        )
    }
}

export default Form;