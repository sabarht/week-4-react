import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container weather-app">
          <h1>Weather App</h1>

          <form className="searchbar">
            <input className="pr-5 " type="search" placeholder="Enter a City" />
            <input className="px-3" type="submit" value="search" />
          </form>
          <ul className="description">
            <li className="city-name">Tehran</li>
            <li>Saturday</li>
            <li>Clear</li>
          </ul>

          <div className="row">
            <div className="col p-2 temperature">
              {" "}
              <i className="bi bi-brightness-high p-2"></i>
              10 °C
            </div>
            <div className="col">
              <ul>
                <li>Precipitation: 68%</li>
                <li>Wind: 3km/h</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row daily-forecast">
            <div className="col">
              <ul>
                <li className="forecast-day">Sun</li>
                <li>
                  <i className="bi bi-cloud-drizzle"></i>
                </li>

                <li>9°</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="forecast-day">Sun</li>
                <li>
                  <i className="bi bi-brightness-high"></i>
                </li>
                <li>9°</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="forecast-day">Sun</li>
                <li>
                  <i className="bi bi-cloud-sun"></i>
                </li>
                <li>9°</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="forecast-day">Sun</li>
                <li>
                  <i className="bi bi-cloud-lightning"></i>
                </li>
                <li>9°</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="forecast-day">Sun</li>
                <li>
                  <i className="bi bi-clouds"></i>
                </li>
                <li>9°</li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          <small>
            <a href="https://github.com/sabarht/week-4-react">
              Open-source code
            </a>
            , by saba Rahrotaban.
          </small>
        </p>
      </header>
    </div>
  );
}

export default App;
