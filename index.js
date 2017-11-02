

$(document).ready(function() {
    $('.thumbnail').on('click', function(event) {
    // console.log('cat thumbnail clicked');
    let newSource = $(event.currentTarget).find('img').attr('src');
    let newAlt = $(event.currentTarget).find('img').attr('alt');
    // console.log(newAlt);
    $('.hero img').attr({
        src: newSource,
        alt: newAlt 
    }) 
    
    });
})