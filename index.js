'use strict';

function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson, breed))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, breed) {
    console.log("This is a message");
    console.log(responseJson.message);

    if (responseJson.message == "Breed not found (master breed does not exist)") {
        $('.results').append(`<h2>This breed is not found. Please try again.</h2>`);
    }
    else {
        $('.results').append(`<h2>You requested for a ${breed}: </h2>
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