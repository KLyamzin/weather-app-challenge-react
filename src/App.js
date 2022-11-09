import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Form, Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import LocationApiCall from './utils/LocationApiCall';
import ResolveSearchInput from './utils/ResolveSearchInput';
import WeatherApiCall from './utils/WeatherApiCall';
import WeatherCodes from './utils/WeatherCodes';

function App() {
  // current input data
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const getWeather = (e) => {
    e.preventDefault();
    // get the location parameter for initial API call to get lat. & lon.
    const searchParameter = ResolveSearchInput(location); // returns something like: name=11234

    //get the lat & long parameters and get weather data object
    const getLatAndLonParameters = async () => {
      try {
        let data = await LocationApiCall(searchParameter);
        await WeatherApiCall(data).then((object) => setWeather(object));
        // console.log(weather);
      } catch (error) {
        console.log(error);
      }
    };
    getLatAndLonParameters();
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column app-container">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
              <LinkContainer to="/">
                <Navbar.Brand>Weather App</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="navbarSearch" />
              <Navbar.Collapse id="navbarSearch" className="my-2">
                <Form className="d-flex ms-auto" onSubmit={getWeather}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <Button variant="outline-success" type="submit">
                    Search
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Table striped bordered hover>
              {/* <thead>
                <tr>
                  <th>#</th>
                  <th>latitude</th>
                  <th>longitude</th>
                  <th>timezone</th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td>Coordinates</td>
                  <td>latitude: {weather.latitude}</td>
                  <td>longitude: {weather.longitude}</td>
                  <td>
                    timezone: {weather.timezone},{' '}
                    {weather.timezone_abbreviation}
                  </td>
                </tr>
                <tr>
                  <td>Temperature</td>
                  {/* <td>{weather.current_weather.temperature}</td> */}
                  {/* <td>Weathercode: {weather.current_weather.weathercode}</td> */}
                  <td></td>
                </tr>
                <tr>
                  <td>Wind</td>
                  {/* <td>Direction: {weather.current_weather.winddirection}</td> */}
                  {/* <td>Speed: {weather.current_weather.windspeed}</td> */}
                  <td>Code: {WeatherCodes(77)}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </main>
        <footer className="text-center">
          <a href="https://github.com/KLyamzin/weather-app-challenge-react">
            GitHub Repo.
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
