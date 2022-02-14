/**
 * Return time in 24-hour-clock format.
 * 
 * @returns {string} 24-hour-clock time
 */
const getTime = () => {

  const dateObj = new Date();

  const minutes = dateObj.getMinutes().toString().length === 1 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();
  const hours = dateObj.getHours().toString().length === 1 ? '0' + dateObj.getHours() : dateObj.getHours();

  const time = hours + ':' + minutes;

  return time;
}
 
export default getTime;
