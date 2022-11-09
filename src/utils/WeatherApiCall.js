const WeatherApiCall = async ({ lat, lon, name }) => {
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&daily=weathercode&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`;
  const res = await fetch(URL);
  const data = await res.json();
  const {
    timezone,
    timezone_abbreviation,
    current_weather,
    latitude,
    longitude,
    hourly_units,
  } = data;
  return new Object({
    timezone,
    timezone_abbreviation,
    current_weather,
    latitude,
    longitude,
    hourly_units,
  });
};

export default WeatherApiCall;
