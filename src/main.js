import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import moment from 'moment';
import DailyThreats from './js/dailyThreats-service.js';
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
      $('#pha-name').html(`<b>Asteroid<b> <a href=${url} style="asteroid-name" target="_blank">${name}</a>`);
      $('#pha-miss').text(`Distance: ${missDistance} ominous LDs away!`);
      $('#pha-mag').text(`Absolute Magnitude: ${magnitude}, absolutely!`);
      $('#pha-dia').text(`Diameter: ${diameter} forboding feet round!`);
    });
  DailyThreats.getDailyThreats()
    .then(function(response) {
      let today = moment().format('YYYY-M-D');
      let neo1Name, neo1MissDistance, neo1Magnitude, neo1Diameter;
      let neo2Name, neo2MissDistance, neo2Magnitude, neo2Diameter;
      let neo3Name, neo3MissDistance, neo3Magnitude, neo3Diameter;
      neo1Name = response.near_earth_objects[`${today}`][0].name;
      neo1MissDistance = parseInt(response.near_earth_objects[`${today}`][0].estimated_diameter.feet.estimated_diameter_max).toFixed(2);
      neo1Magnitude = response.near_earth_objects[`${today}`][0].absolute_magnitude_h.toFixed(2);
      neo1Diameter = response.near_earth_objects[`${today}`][0].estimated_diameter.feet.estimated_diameter_max.toFixed(2);
      neo2Name = response.near_earth_objects[`${today}`][1].name;
      neo2MissDistance = parseInt(response.near_earth_objects[`${today}`][1].estimated_diameter.feet.estimated_diameter_max).toFixed(2);
      neo2Magnitude = response.near_earth_objects[`${today}`][1].absolute_magnitude_h.toFixed(2);
      neo2Diameter = response.near_earth_objects[`${today}`][1].estimated_diameter.feet.estimated_diameter_max.toFixed(2);
      neo3Name = response.near_earth_objects[`${today}`][2].name;
      neo3MissDistance = parseInt(response.near_earth_objects[`${today}`][2].estimated_diameter.feet.estimated_diameter_max).toFixed(2);
      neo3Magnitude = response.near_earth_objects[`${today}`][2].absolute_magnitude_h.toFixed(2);
      neo3Diameter = response.near_earth_objects[`${today}`][2].estimated_diameter.feet.estimated_diameter_max.toFixed(2);
      $('#neo1-name').text(neo1Name)
      $('#neo1-miss').text(`Distance: ${neo1MissDistance} ominous LDs away!`)
      $('#neo1-mag').text(`Absolute Magnitude: ${neo1Magnitude}, absolutely!`)
      $('#neo1-dia').text(`Diameter: ${neo1Diameter} forboding feet round!`)
      $('#neo2-name').text(neo2Name)
      $('#neo2-miss').text(`Distance: ${neo2MissDistance} ominous LDs away!`)
      $('#neo2-mag').text(`Absolute Magnitude: ${neo2Magnitude}, absolutely!`)
      $('#neo2-dia').text(`Diameter: ${neo2Diameter} forboding feet round!`)
      $('#neo3-name').text(neo3Name)
      $('#neo3-miss').text(`Distance: ${neo3MissDistance} ominous LDs away!`)
      $('#neo3-mag').text(`Absolute Magnitude: ${neo3Magnitude}, absolutely!`)
      $('#neo3-dia').text(`Diameter: ${neo3Diameter} forboding feet round!`)
    });
});