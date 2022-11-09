const WeatherApiCall = async ({ lat, lon, name }) => {
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`;
  // console.log(URL);
  const res = await fetch(URL);
  const data = await res.json();
  return data;
  // console.log(data);
  // const {
  //   timezone,
  //   timezone_abbreviation,
  //   // current_weather,
  //   latitude,
  //   longitude,
  //   hourly_units,
  // } = data;
  // return new Object({
  //   timezone,
  //   timezone_abbreviation,
  //   // current_weather,
  //   latitude,
  //   longitude,
  //   hourly_units,
  // });
};

export default WeatherApiCall;
