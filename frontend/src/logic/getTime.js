/**
 * Convert unix timestamp into 24-hour-clock format.
 * 
 * @param {number} unixTime unix timestamp
 * @returns {string} 24-hour-clock time
 */
const getTime = (unixTime) => {

  const dateObj = new Date(unixTime * 1000);

  const minutes = dateObj.getMinutes().toString().length === 1 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();

  const time = dateObj.getHours() + ':' + minutes;

  return time;
}
 
export default getTime;
