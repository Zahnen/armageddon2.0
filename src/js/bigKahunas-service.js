export default class BigKahunas {
  static getBigKahunas() {
    return fetch(`https://api.nasa.gov/neo/rest/v1/neo/54065895?api_key=${process.env.API_KEY}`)
      .then (function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}
