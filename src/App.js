import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

function WeatherApp() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("Hyderabad");
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3357a0d5e27b35fd2dca00dd4167d141`;

      try {
        const result = await axios.get(url);
        setWeather(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [city]);
  const handleSwitch = () => {
    setTheme(!theme);
  };
  return (
    <div id="main1" className={theme ? "light" : "dark"}>
      <div className="nav">
        <section>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAA8FBMVEUAAADj4+Pe3t78ry79tDH9sjCGhobo6Oj/uDP/uzT/vjT/tC//sgD9qyz/wjb/wDWHYxyMjIwyMzLx8fBMTEz4+PiwsLCSkpJeXl4jGQe5iCapfiQMCAOxgiVJNhAYEASacyHtsTJ0Vxjdoy7/yTlZPRJZQRJrTxc4JwsuHgnHlCpiRhQ4IwsgFQbppixQORCTaR1BLw/PkijRny3dmSihcR3/tR/9u0j7yXv716X44sX469v/4bH/0IjmslDw4MzLy8vhyrX6rTz+qxXatZnko2L7wGr4y4/PvLPy0arbnWi/gyNuRwAWFhY+PT50dHQOcQgBAAADvklEQVRoge2XaVfiMBSG7RKaRdpqZZFFoYgLaC1L3WdEmdFxGPX//5tJabELi7QG5sw5efSDzYk+vMnNbdzY4HA4HA6Hw+FwOJx1sFsqV/6JuKqpemxob38d4jLG1ehIDdXXITY11IgM7NbRQXMN4kMIUWTgSEV4Dd6N4zrEJ+GBFsKldYg3GhCZkQ+CtPZKRKex5xZCtdCjrq2othxonUUGagiFl7aBcHklYovAaBW3NRiKeI4gOl+JWIcARoqnA7EVPNVw7HSxowwBssMDR9VO8FCabmTMOmoXypE6jnDcLcUaZrkxd3JSLAJg5/NpHj0Voc9nLUcFAiDvLjX1uI6R2mIlpqULYPXzabTiMYIqyz5mIhwvoVnYGoRLTVye88PQw3Fbd6rVmnl4Ep1U1SCCR0y9IU70noUQou8oDOstM1TSugpxfW9F2v2yhQiRP8BWcMRtFffOFvzuVzBlSAAtcRmMtVCWCW58dEy7tiIt3UTgasdf4CO1xtLXcWbcZvoQjPECh8xddmIAiGXHulWfAF88dgZiGY2YiYkkSQT09dCBKfl5vcwh6E6zO7ztrjR2W91JbJNIQAIhwpFlxO4Ydey+6yb+/p1Z9HNIscxBdNhjJqY0HUsi/vY5BLjiuDo40MzehR5Htvdar3jaqDtUYDB2P6o07RKTq5ju7riHq5SimwwpaNLNT/Vqq66qGGksKq4LPGng9hebkItNl4vJf1TlA7eRu59EZbH6QeCImGxeXl3f3N7e3tx9++7NtOi1E6uw0SqzuOY3o2LfTS6u7g1D8TAMceuVTm03eiW9c8LoxqeDwDgRk+HVvaIIAUrOyLDRBThTiWlfewlbffVge+Xix4cpL8UwdlYsfnyYoR2HZmp2QMybneN1zSxXW495hz/EeWJBEb7mOjedLm3V3qVxz1vqIWX808/5XrrP+dTSs1Ffymbpd1by3xGuVX56vrt+fpKHUvbXAq8gpF9sh2RdJJK1/JvcaPj44veJ27vL34sC08VOHZkWcdbqj+z23qQB/XmmLlcnioJiLA5MIxczmeLOawqzaTaj/3zmQ392cdxx5JyLkH9Lm/yDrVnN4lO9kUtfZh5v7gqn4auNLE/FYjp37j2Vcfu9UChkiqLnTeNWjGJybXFg0OND37gDcULyyIqQtLpf84ogTrFETcdI2si2B8q0NlVoI9Gpeh3MiJvObRSSiPPztYnNYgLvzkJvQncuwc0vv7hVKYkwlj/LlUKGIVspjjKHw+FwOBwOh8PhcDgcDuf/4y+8t1EspAz13QAAAABJRU5ErkJggg==" />
        </section>
        <section>
          <button className="toggle-button" onClick={handleSwitch}>
            dark
          </button>
        </section>
        <section>
          <form>
            <label>
              <input
                type="text"
                placeholder="Enter a city name"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </label>
          </form>
        </section>
      </div>
      <div id="main">
        {weather.main && (
          <div className="card">
            <h1>City :</h1>
            <h4>{city}</h4>
            <p>Temperature: {weather.main.temp} &#176;Cel</p>
            <div className="details">
              <p>
                <img src="data:image/png;base64,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" />{" "}
                Humidity:
                <br /> {weather.main.humidity}&#176; Cel
              </p>
              <p>
                <img src="data:image/png;base64,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" />
                min_temp:
                <br /> {weather.main.temp_min} &#176; Cel
              </p>
              <p>
                <img src="data:image/png;base64,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" />
                max_temp:
                <br /> {weather.main.temp_max} &#176;Cel
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
