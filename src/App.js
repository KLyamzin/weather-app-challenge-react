import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Navbar,
  Container,
  Form,
  Button,
  Table,
  Card,
  Row,
  Alert,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Temperature from './components/Temperature';
import LocationApiCall from './utils/LocationApiCall';
import ResolveSearchInput from './utils/ResolveSearchInput';
import WeatherApiCall from './utils/WeatherApiCall';

function App() {
  // current input data
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({
    latitude: '',
    longitude: '',

    timezone: '',
    timezone_abbreviation: '',

    current_weather: {
      temperature: '',
      windspeed: '',
      winddirection: '',
      weathercode: '',
      time: '',
    },
    hourly_units: {
      time: 'iso8601',
      temperature_2m: '°F',
      relativehumidity_2m: '%',
      precipitation: 'inch',
      weathercode: 'wmo code',
    },
  });
  const [locationName, setLocationName] = useState('');

  //get the lat & long parameters and get weather data object
  const getLatAndLonParameters = async () => {
    // get the location parameter for initial API call to get lat. & lon.
    const searchParameter = ResolveSearchInput(location); // returns something like: name=11234
    try {
      let data = await LocationApiCall(searchParameter);
      await WeatherApiCall(data).then((object) => setWeather(object));
      setLocationName(data.name);
    } catch (error) {
      console.log(error);
    }
  };
  // call API to get weather
  const getWeather = (e) => {
    e.preventDefault();
    getLatAndLonParameters();
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column app-container">
        <header>
          <Navbar bg="dark" variant="dark" expand="md">
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
          <Container fluid className="px-1 px-md-4 py-5 mx-auto">
            {!locationName ? (
              <Alert variant={'dark'}>Please search by City or Zip Code</Alert>
            ) : (
              <Row className="row d-flex justify-content-center px-3">
                <Card>
                  <Card.Body className="ms-auto me-4 mt-3 mb-0">
                    <Card.Title>{locationName}</Card.Title>
                    <Temperature weather={weather} />
                  </Card.Body>
                </Card>
              </Row>
            )}
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
