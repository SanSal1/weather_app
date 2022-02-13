import axios from 'axios'


const weatherService = {

  getCurrent: async (location) => {

    const config = {
      headers: { ContentType: 'application/json' },
    }

    const url = '';

    return await axios.get(url, config);
  },
  getForecast: async (location) => {

    const config = {
      headers: { ContentType: 'application/json' },
    }

    const url = '';

    return await axios.get(url, config);
  },
}

export default weatherService
