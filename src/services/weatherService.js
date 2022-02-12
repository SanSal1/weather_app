import axios from 'axios'


const weatherService = {

  getCurrent: async (location) => {

    const config = {
      headers: { ContentType: 'application/json' },
    }

    const url = '';

    return await axios.get(url, config)
      .then(response => {
        return response
      })
      .catch(error => {
        return error.response.status
      })
  },
  getForecast: async (location) => {

    const config = {
      headers: { ContentType: 'application/json' },
    }

    const url = '';

    return await axios.get(url, config)
      .then(response => {
        return response
      })
      .catch(error => {
        return error.response.status
      })
  },
}

export default weatherService
