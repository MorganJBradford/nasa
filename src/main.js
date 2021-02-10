import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NasaService from './nasa.js';
import './styles.css';

function getPotd(response) {
  if (response.copyright) {
    $('#potd').append(`<img src="${response.hdurl}" id="picture">`);
  }
}

async function apiCallPotd() {
  const response = await NasaService.getPhoto();
  getPotd(response);
}

$(document).ready(function() {
  $('#potd-button').click(function() {
    apiCallPotd();
  });
});