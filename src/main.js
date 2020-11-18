import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import moment from 'moment';
//import DailyThreats from './js/dailyThreats-service.js';
import BigKahunas from './js/bigKahunas-service.js';

console.log(moment().format('YYYY-M-D'));

$(document).ready(function() {
  BigKahunas.getBigKahunas()
    .then(function(response) {
      let name, missDistance, magnitude, diameter;
      name = response.designation;
      missDistance = response.close_approach_data[14].miss_distance.astronomical;
      magnitude = response.absolute_magnitude_h;
      diameter = response.estimated_diameter.feet.estimated_diameter_max;
      $('#nea1-name').text(response.designation);
      $('#nea1-miss').text(missDistance);
      $('#nea1-mag').text(magnitude);
      $('#nea1-dia').text(`Diameter: ${diameter} formidable feet!`);
    });
  // DailyThreats.getDailyThreats()
  //   .then(function(response) {
  //     let today = moment().format('YYYY-M-D');
  //     $('#').text(response.near_earth_objects[`${today}`][0].absolute_magnitude_h)
  //   });
});