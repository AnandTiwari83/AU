/* 
 * JavaScript for Accessible University Demo Site 
 * http://uw.edu/accesscomputing/AU
 *
 * before-form.js = Handle form validation 
 */

$(document).ready(function(event) { 

console.log('form.js is ready');
  $('#submit').on('click',function(event) { 
    var heading = $('<div>').addClass('errorHeading').text('ERROR');     
    var errorMsg = $('<p>')
      .text('Your form has errors. Please correct them and resubmit.');
    $('#error').append(heading,errorMsg).show(); 
    $(document).scrollTop(1); // scroll up so users can see the message! 
    event.preventDefault();
  });   
});
