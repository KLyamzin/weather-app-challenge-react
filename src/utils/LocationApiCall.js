// Initial API request to get the coordinates and return the first result
const LocationApiCall = (searchParameter) => {
  const URL = `https://geocoding-api.open-meteo.com/v1/search?${searchParameter}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const lat = data.results[0].latitude;
      const lon = data.results[0].longitude;
      return new Object({ lat, lon });
    });
};

export default LocationApiCall;
