import strings from "../data/strings";


/**
 * Get precipitation in either rain or snow from openweathermap 3h forecast data.
 * 
 * @param {Object} data data received from openweathermap API
 * @returns {string} precipitation in mm
 */
const getPrecipitation = (data) => {
  if (data.rain && data.rain['3h']) {
    return data.rain['3h'] + strings.precipitationUnit;
  }
  else if (data.snow && data.snow['3h']) {
    return data.snow['3h'] + strings.precipitationUnit;
  }
  else {
    return '0' + strings.precipitationUnit;
  }
}
 
export default getPrecipitation;
