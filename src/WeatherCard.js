import React from "react";

const WeatherCard = (props) => {
    var cardList = props.weatherObj.weatherObj ? props.weatherObj.weatherObj.desc.map((each) => {
        let source = "https://openweathermap.org/img/w/" + each.img + ".png";
        return (
            <div className="card col-12-sm col-6-md m-1">
                    <div className="card-body">
                        <h5 className="card-title">{each.weatherDesc}</h5>
                        <h6 className="card-title"><img src={source} alt=""/>{each.temp}&#176;C</h6>
                        <p className="card-text">{each.date.toLocaleTimeString()}</p>
                        <p className="card-text">{each.date.getDate()}/{each.date.getMonth()}</p>
                    </div>
                </div>
        )
    }) : (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card col-6-lg col-4-lg">
                    <div className="card-body text-center">
                        No cards yet
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="container">
          <div className="row justify-content-center mb-5">
            {cardList}
          </div>
        </div>        
    );
}

export default WeatherCard;