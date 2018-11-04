var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
var menuGlitch = document.getElementById('menu-glitch');
var parallaxMenu = document.getElementById('image-text');
var parallaxMenu2 = document.getElementById('go-away');
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
    parallaxMenu.classList.remove('contain-position');
    parallaxMenu2.classList.remove('ptext');
};

function myTimeout(){
    menuGlitch.classList.add('glitch');
    parallaxMenu.classList.add('contain');
    parallaxMenu2.classList.add('ptext');
}

function glitchTimeOut(){
    menuGlitch.classList.remove('glitch');
}

$(window).scroll(function() {
    parallax();
})
  
function parallax() {
  var wScroll = $(window).scrollTop()
  $('.pimg-p1').css('background-position', 'center ' + (wScroll*0.75)+'px');
}
  