var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function(){
    overlay.classList.add('show-menu')
    removeRemoveMenu()
});
document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.add('remove-menu')
    removeShowMenu();
});

function removeShowMenu(){
 overlay.classList.remove('show-menu')
};

function removeRemoveMenu(){
    overlay.classList.remove('remove-menu')
   };