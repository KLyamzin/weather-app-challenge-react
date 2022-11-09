import React from 'react';
import './Temperature.css';
import { Card, Container } from 'react-bootstrap';
import WeatherCodes from '../utils/WeatherCodes';

const Temperature = ({
  weather: {
    current_weather: { temperature, weathercode, windspeed },
    hourly_units: { temperature_2m },
  },
}) => {
  //   console.log(locationName);
  return (
    <>
      <Card.Text className="ms-auto me-4 mb-0 med-font">
        {WeatherCodes(weathercode)}
      </Card.Text>
      <Card.Text className="ms-auto me-4 large-font">{`${temperature}${temperature_2m}`}</Card.Text>
      <Card.Text className="mb-0 ms-0 mt-auto">{`Wind speed is ${windspeed}Mph`}</Card.Text>
    </>
  );
};

export default Temperature;
