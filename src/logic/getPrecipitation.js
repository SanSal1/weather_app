import units from "../data/units";


/**
 * Get precipitation in either rain or snow from openweathermap 3h forecast data.
 * 
 * @param {Object} data data received from openweathermap API
 * @returns {string} precipitation in mm
 */
const getPrecipitation = (data) => {
  if (data.rain && data.rain['3h']) {
    return data.rain['3h'] + units.precipitation;
  }
  else if (data.snow && data.snow['3h']) {
    return data.snow['3h'] + units.precipitation;
  }
  else {
    return '0' + units.precipitation;
  }
}
 
export default getPrecipitation;
