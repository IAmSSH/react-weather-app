import React from "react";

const WeatherCard = (props) => {
    console.log(props);
    // const {temps, weatherDescs, dates} = props.weatherObj.weatherObj;
    var cardList = [];
    if(props.weatherObj.weatherObj) {
        var temp, weatherDesc, date, source;
        // const name = props.weatherObj.weatherObj.cityName;
        // const temp = props.weatherObj.weatherObj.temp;
        for(var i = 0; i < 5; i++) {     // -> Optimize to MAP func and i.size <-
            temp = props.weatherObj.weatherObj.temps[i];
            weatherDesc = props.weatherObj.weatherObj.weatherDescs[i];
            date = props.weatherObj.weatherObj.dates[i];
            source = "https://openweathermap.org/img/w/" + props.weatherObj.weatherObj.imgs[i] + ".png";
            cardList.push(
                <div className="card col-2 m-1">
                    <div className="card-body">
                        <img class="card-img-top" src={source} alt="Card image cap"/>
                        <h5 className="card-title">{date}</h5>
                        <p className="card-text">{temp}&#176;C</p>
                        <p className="card-text">{weatherDesc}</p>
                    </div>
                </div>
            );
        }
    }
    else {
        cardList.push(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-4">
                        <div className="card-body text-center">
                            No cards yet
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
          <div className="row justify-content-center">
            {cardList}
          </div>
        </div>
        
    );
}

export default WeatherCard;