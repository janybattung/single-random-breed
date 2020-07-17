'use strict';

function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
    .then(responseJson =>
        displayResults(responseJson, breed))
    .catch(error => $('.results').append(`<h2>This breed is not found. Please try again.</h2>`));
}

function displayResults(responseJson, breed) {
    console.log("This is a message");
    console.log(responseJson.message);
    $('.results-img').replaceWith(
        `<img src="" class="results-img">`)
        $('.results-msg').replaceWith(`<h2 class="results-msg"></h2>`);
    if (responseJson.status == "error") {
    }
    else {
        $('.results-msg').replaceWith(`<h2 class="results-msg">You requested for a ${breed}: </h2>
        <img src="${responseJson.message}" class="results-img">`);   
    $('.results').removeClass('hidden');
    }
    
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let breed = $('#breed').val();
        console.log(breed);
        getDogImage(breed);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
})