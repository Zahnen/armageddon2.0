import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import moment from 'moment';
//import DailyThreats from './js/dailyThreats-service.js';
import BigKahunas from './js/bigKahunas-service.js';

$(document).ready(function() {
  BigKahunas.getBigKahunas()
    .then(function(response) {
      let name, url, missDistance, magnitude, diameter;
      name = response.designation;
      url = response.nasa_jpl_url;
      missDistance = parseInt(response.close_approach_data[14].miss_distance.lunar).toFixed(2);
      magnitude = response.absolute_magnitude_h.toFixed(2);
      diameter = response.estimated_diameter.feet.estimated_diameter_max.toFixed(2);
      console.log(typeof missDistance, typeof magnitude, typeof diameter);
      $('#pha-name').html(`<b>Asteroid<b> <a href=${url} style="asteroid-name" target="_blank">${name}</a>`);
      $('#pha-miss').text(`Distance: ${missDistance} ominous LDs away!`);
      $('#pha-mag').text(`Absolute Magnitude: ${magnitude}, absolutely!`);
      $('#pha-dia').text(`Diameter: ${diameter} forboding feet round!`);
    });
  // DailyThreats.getDailyThreats()
  //   .then(function(response) {
  //     let today = moment().format('YYYY-M-D');
  //     $('#').text(response.near_earth_objects[`${today}`][0].absolute_magnitude_h)
  //   });
});