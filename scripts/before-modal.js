/* 
 * JavaScript for Accessible University Demo Site 
 * http://uw.edu/accesscomputing/AU
 *
 * before-modal.js = Inaccessible modal 
 */

$(document).ready(function(event) { 
  
  var spanText = 'For a cheat sheet of accessibility problems, '; 
  var spanLink = $('<a>').text('click here').on('click',function(event) { 
    event.stopPropagation();
    showModal();
  });
  $('#cheatSheetLinkSpan').text(spanText).append(spanLink).append('.');
  
  // handle click on X or Ok button in modal dialog 
  $(document).on('click','#modalXButton, #modalOkButton',function(event) { 
    $('#modalContent').hide();
    $('#modalMask').hide();      
  })
  
  function showModal() { 
    
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var modalSize = 400; 
    var modalLeft = ((winWidth-modalSize)/2) + 'px';
    var modalTop = ((winHeight-modalSize)/2) + 'px';
	
    $('#modalContent')
      .css({ 
        'top': modalTop,
        'left': modalLeft      
      })
      .show();

    $('#modalMask').show(); 
  }
});
