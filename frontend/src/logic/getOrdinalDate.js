/**
 * Get an ordinal date, e.g. formatted as "Feb 12th".
 * 
 * @returns {string} ordinal date
 */
const getOrdinalDate = () => {
  
  const dateObj = new Date();

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const dayNumber = dateObj.getDate();
  let date = months[dateObj.getMonth()] + ' ' + dayNumber;

  const ordinal = new Intl.PluralRules("en", {type: "ordinal"});
  const suffixes = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th'
  };
  date += suffixes[ordinal.select(dayNumber)];

  return date;
}
 
export default getOrdinalDate;
