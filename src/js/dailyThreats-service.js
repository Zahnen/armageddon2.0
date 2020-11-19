import moment from 'moment';

export default class DailyThreats {
  static getDailyThreats() {
    let today = moment().format('YYYY-M-D');
    return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${process.env.API_KEY}`)
    .then (function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}
