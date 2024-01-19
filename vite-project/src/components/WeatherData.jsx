import PropTypes from "prop-types";
const WeatherData=async(locationData)=> {
    try {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${
            locationData[0].lat
          }&lon=${locationData[0].lon}&APPID=${import.meta.env.api.VITE_OMAPI}`);
          const weatherData=await response.json();
          return weatherData;
    } catch (error) {
        console.error("Error",error);
        return await Promise.reject("unable to fetch weather data.");
   
    
}
}
WeatherData.propTypes = {
    locationData: PropTypes.string.isRequired,
  };
export default WeatherData;