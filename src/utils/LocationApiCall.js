// Initial API request to get the coordinates and return the first result
const LocationApiCall = (searchParameter) => {
  const URL = `https://geocoding-api.open-meteo.com/v1/search?${searchParameter}`;

  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export default LocationApiCall;
