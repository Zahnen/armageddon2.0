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
      name = response.name;
      url = response.nasa_jpl_url;
      missDistance = parseFloat(response.close_approach_data[14].miss_distance.lunar).toFixed(2);
      magnitude = response.absolute_magnitude_h.toFixed(2);
      diameter = response.estimated_diameter.feet.estimated_diameter_max.toFixed(2);
      $('#pha-name').html(`<b>Asteroid<b><a href=${url} class="asteroid name" target="_blank"> ${name}</a>`);
      $('#pha-miss').text(`Distance: ${missDistance} ominous LDs away!`);
      $('#pha-mag').text(`Absolute Magnitude: ${magnitude}, absolutely!`);
      $('#pha-dia').text(`Diameter: ${diameter} forboding feet round!`);
    });
  DailyThreats.getDailyThreats()
    .then(function(response) {
      let today = moment().format('YYYY-M-D');

      let asteroids = response.near_earth_objects[`${today}`];
      asteroids.sort((a,b) => {
        const distanceA = parseFloat(a.close_approach_data[0].miss_distance.lunar);
        const distanceB = parseFloat(b.close_approach_data[0].miss_distance.lunar);
        if (distanceA < distanceB)  {
          return -1;
        }
        if (distanceA > distanceB) {
          return 1;
        }
        return 0;
      });

      let neo1Name, neo1Url, neo1MissDistance, neo1Magnitude, neo1Diameter;
      let neo2Name, neo2Url, neo2MissDistance, neo2Magnitude, neo2Diameter;
      let neo3Name, neo3Url, neo3MissDistance, neo3Magnitude, neo3Diameter;

      neo1Name = asteroids[0].name;
      neo1Url = asteroids[0].nasa_jpl_url;
      neo1MissDistance = parseFloat(asteroids[0].close_approach_data[0].miss_distance.lunar).toFixed(2);
      neo1Magnitude = asteroids[0].absolute_magnitude_h.toFixed(2);
      neo1Diameter = asteroids[0].estimated_diameter.feet.estimated_diameter_max.toFixed(2);
      
      neo2Name = asteroids[1].name;
      neo2Url = asteroids[1].nasa_jpl_url;
      neo2MissDistance = parseFloat(asteroids[1].close_approach_data[0].miss_distance.lunar).toFixed(2);
      neo2Magnitude = asteroids[1].absolute_magnitude_h.toFixed(2);
      neo2Diameter = asteroids[1].estimated_diameter.feet.estimated_diameter_max.toFixed(2);
      
      neo3Name = asteroids[2].name;
      neo3Url = asteroids[2].nasa_jpl_url;
      neo3MissDistance = parseFloat(asteroids[2].close_approach_data[0].miss_distance.lunar).toFixed(2);
      neo3Magnitude = asteroids[2].absolute_magnitude_h.toFixed(2);
      neo3Diameter = asteroids[2].estimated_diameter.feet.estimated_diameter_max.toFixed(2);

      $('#neo1-name').html(`<b>Asteroid<b><a href=${neo1Url} class="asteroid name" target="_blank"> ${neo1Name}</a>`);
      $('#neo1-miss').text(`Distance: ${neo1MissDistance} ominous LDs away!`);
      $('#neo1-mag').text(`Absolute Magnitude: ${neo1Magnitude}, absolutely!`);
      $('#neo1-dia').text(`Diameter: ${neo1Diameter} forboding feet round!`);
      $('#neo2-name').html(`<b>Asteroid<b><a href=${neo2Url} class="asteroid name" target="_blank"> ${neo2Name}</a>`);
      $('#neo2-miss').text(`Distance: ${neo2MissDistance} ominous LDs away!`);
      $('#neo2-mag').text(`Absolute Magnitude: ${neo2Magnitude}, absolutely!`);
      $('#neo2-dia').text(`Diameter: ${neo2Diameter} forboding feet round!`);
      $('#neo3-name').html(`<b>Asteroid<b><a href=${neo3Url} class="asteroid name" target="_blank"> ${neo3Name}</a>`);
      $('#neo3-miss').text(`Distance: ${neo3MissDistance} ominous LDs away!`);
      $('#neo3-mag').text(`Absolute Magnitude: ${neo3Magnitude}, absolutely!`);
      $('#neo3-dia').text(`Diameter: ${neo3Diameter} forboding feet round!`);
    });

    $('#readMore').click (function() {
      $('#intro').fadeOut();
      $('#doomsday-table').fadeIn();
      $('#navbar').fadeIn();
      $('#about').fadeIn();
      });
});