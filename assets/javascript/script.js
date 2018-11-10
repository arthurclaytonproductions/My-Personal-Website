var overlay = document.getElementById('overlay');
var menuGlitch = document.getElementById('menu-glitch');
var scrollLink = $('.scroll');
    
//nav button icon
document.getElementById('open-menu').addEventListener('click', function(){
  overlay.classList.add('show-menu')
  removeRemoveMenu();
  setTimeout(glitchTimeOut, 500);
});
document.getElementById('close-menu').addEventListener('click', function(){
  overlay.classList.add('remove-menu')
  removeShowMenu();
  setTimeout(myTimeout, 1500);
  
});

function removeShowMenu(){
    overlay.classList.remove('show-menu');
};

function removeRemoveMenu(){
    overlay.classList.remove('remove-menu');
};
function myTimeout(){
    menuGlitch.classList.add('glitch');
};
function glitchTimeOut(){
  menuGlitch.classList.remove('glitch');
};

$(window).bind('scroll', parallax);
parallax();
  
  function parallax() {
    var scroll = $(window).scrollTop();
    var screenHeight = $(window).height();
  
    $('.pimg-p1').each(function() {
      var offset = $(this).offset().top;
      var distanceFromBottom = offset - scroll - screenHeight
      
      if (offset > screenHeight && offset) {
        $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.2) +'px');
      } else {
        $(this).css('background-position', 'center ' + (( -scroll ) * 0.2) + 'px');
      }
    })
  }


  
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
  
