'use strict';

$(document).ready(function() {
  $('.thumbnail').on('click', function(event) {
    let newSource = ($(event.currentTarget).find('img').attr('src'));
    let newAlt = ($(event.currentTarget).find('img').attr('alt'));
    console.log(newAlt);

    $('.hero img').attr({
      src: newSource,
      alt: newAlt      
    })
    

  });


})