// Initial API request to get the coordinates and return a list of results
const LocationApiCall = (searchParameter) => {
  const URL = `https://geocoding-api.open-meteo.com/v1/search?${searchParameter}`;
  return fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      if (data.results !== undefined) {
        return data;
      } else {
        throw Error('Invalid search data');
      }
    });
};

export default LocationApiCall;
