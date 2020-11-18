import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import moment from 'moment';
import NeowService from './js/neow-service.js';

console.log(moment().format('YYYY-M-D'));

$(document).ready(function() {
  NeowService.getNeow()
    .then(function(response) {
      let today = moment().format('YYYY-M-D');
      console.log(response.near_earth_objects[`${today}`][0].absolute_magnitude_h)
  });
});




// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     WeatherService.getWeather(city)
//       .then(function(weatherResponse) {
//         if (weatherResponse instanceof Error) {
//           throw Error(`OpenWeather API error: ${weatherResponse.message}`);
//         }
//         const weatherDescription = weatherResponse.weather[0].description;
//         displayWeatherDescription(weatherDescription);
//         return GiphyService.getGif(weatherDescription);
//       })
//       .catch(function(error) {
//         displayErrors(error.message)
//       })
//   });
// });