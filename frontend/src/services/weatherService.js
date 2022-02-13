import axios from 'axios'


const getUrl = (cityId, type) => {
  return `http://localhost:3003/data/2.5/${type}?lang=en&units=metric&appid=${process.env.REACT_APP_API_KEY}&id=${cityId}`;
}

const weatherService = {

  getCurrent: async (cityId) => {

    const config = {
      headers: { ContentType: 'application/json' },
    }

    const url = getUrl(cityId, 'weather');

    return await axios.get(url, config);
  },
  getForecast: async (cityId) => {

    const config = {
      headers: { ContentType: 'application/json' },
    }

    const url = getUrl(cityId, 'forecast')  + '&cnt=6';

    return await axios.get(url, config);
  },
}

export default weatherService
