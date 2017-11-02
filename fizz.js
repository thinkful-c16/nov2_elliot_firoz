'use strict';

$(document).ready(function(){
  $('#number-chooser').submit(function(event){    //value from user
    event.preventDefault();                        //prevents default form submission
    $('.js-results').text('');
    let userChoice = $('#number-choice').val();
    for (let i = 0; i <= userChoice; i++) {
      if (i === 0) {
        $('.js-results').append(`
        <div class='fizz-buzz-item'>
            <span>${i}</span>
        </div>
        `);
      } else if ((i % 5 === 0) && (i % 3 === 0)) {
        $('.js-results').append(`
        <div class='fizz-buzz-item fizzbuzz'>
            <span>fizzbuzz</span>
        </div>`);
      } else if (i % 5 === 0) {
        $('.js-results').append(`
        <div class='fizz-buzz-item buzz'>
            <span>buzz</span>
        </div>
        `);
      } else if (i % 3 === 0) {
        $('.js-results').append(`
        <div class="fizz-buzz-item fizz">
            <span>fizz</span>
        </div>
        `);
      } else {
        $('.js-results').append(`
        <div class='fizz-buzz-item'>
            <span>${i}</span>
        </div>
        `)  
      }
    }
    $('#number-choice').val('');
  });
});