import React, { useState } from "react";
import "./styles.css";

const api = {
  key: "API key",
  base: "https://api.openweathermap.org/data/2.5/"
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };
  // const dateBuilder = (d) => {
  // let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`;
  // };

  const bgimage = () => {
    let time = new Date().getHours();
    if (time <= 10) {
      return "app morning";
    } else if (time <= 15) {
      return "app noon";
    } else if (time <= 19) {
      return "app evening";
    } else {
      return "app night";
    }
  };

  return (
    <div className={bgimage()}>
      <main>
        <p className="heading">Search weather conditions here.....</p>
        <div className="search-box">

          <input
            type="text"
            className="search-bar "
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />

        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              {/* <div className="date">{dateBuilder(new Date())}</div> */}
              <div className="date">{new Date().toDateString()}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <div className="beforeText">
            Know temperature conditions of different cities, countries, and
            places here...
            <span className="emoji" role="img" aria-label="smile">
              😊😊😊
            </span>
          </div>
        )}
      </main>
    </div>
  );
}

export default Weather;
