const codeDescription = {
  'Clear sky': [0],
  'Mainly clear, partly cloudy, and overcast': [1, 2, 3],
  'Fog and depositing rime fog': [45, 48],
  'Drizzle: Light, moderate, and dense intensity': [51, 53, 55],
  'Freezing Drizzle: Light and dense intensity': [56, 57],
  'Rain: Slight, moderate and heavy intensity': [61, 63, 65],
  'Freezing Rain: Light and heavy intensity': [66, 67],
  'Snow fall: Slight, moderate, and heavy intensity': [71, 73, 75],
  'Snow grains': [77],
  'Rain showers: Slight, moderate, and violent': [80, 81, 82],
  'Snow showers slight and heavy': [85, 86],
  'Thunderstorm: Slight or moderate': [95],
  'Thunderstorm with slight and heavy hail': [96, 99],
};
const WeatherCodes = (code) => {
  for (let prop in codeDescription) {
    if (codeDescription[prop].includes(code)) {
      return prop;
    }
  }
};
export default WeatherCodes;
