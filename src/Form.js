import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {

    state = {
        cityName: '',
        desc: [
            {
                img: null,
                temp: null,
                weatherDesc: null,
                date: null                
            }
        ]        
    }

    handleTextChange = (event) => {        
        this.setState({
            cityName: event.target.value,            
        });
    }

    handleBtnClick = () => {        
        const reqURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + this.state.cityName + "&APPID=6c307eade9c50ee3c02ac355e19c0003";
        var desc =  [];

        axios.get(reqURL)
            .then((res) => {

                for(let i = 0; i < 5; i++) {
                    var obj = {};
                    obj.img = res.data.list[i].weather[0].icon;
                    obj.weatherDesc = res.data.list[i].weather[0].main;
                    obj.temp = Math.round(res.data.list[i].main.temp - 273);
                    let date = new Date(res.data.list[i].dt * 1000);
                    obj.date = date;
                    desc.push(obj);      
                }

                this.setState({
                    desc: desc
                });

                this.props.weather(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return(
            <div>
                <div id="header" className="jumbotron">
                    <div className="container">
                        <h1 className="display-4">Weather</h1>
                        <p className="lead">Know the weather of any city in a click!</p>
                        <hr className="my-4"/>
                        
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="form-group col-8 col-6-lg">
                            <h4>City</h4>
                            <input type="text" className="form-control" id="city-input" placeholder="Enter city" onChange={this.handleTextChange}/>
                            <button id="submit-button" className="btn btn-primary mt-2" onClick={this.handleBtnClick}>Go</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;