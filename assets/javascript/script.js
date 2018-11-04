var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
var menuGlitch = document.getElementById('menu-glitch');


//nav button icon
document.getElementById('open-menu').addEventListener('click', function(){
    overlay.classList.add('show-menu')
    removeRemoveMenu();
    setTimeout(glitchTimeOut, 240);
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
    
}

function glitchTimeOut(){
    menuGlitch.classList.remove('glitch');
    
}
 
$(window).scroll(function(e) {
    parallax();
  })
  
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

  