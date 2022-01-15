import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container weather-app">
          <ul className="list-cities">
            <li>Tehran</li>
            <li>London</li>
            <li>Paris</li>
            <li>New York</li>
          </ul>

          <form className="searchbar">
            <input type="search" placeholder="Enter a City" />
            <input type="submit" value="search" />
          </form>
          <ul>
            <li className="city-name">Tehran</li>
            <li>Saturday</li>
            <li>Clear</li>
          </ul>

          <div className="row">
            <div className="col p-5 temperatre">10 °C</div>
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
          <small>Open-source code, by saba Rahrotaban.</small>
        </p>
      </header>
    </div>
  );
}

export default App;
