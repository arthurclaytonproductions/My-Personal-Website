var overlay = document.getElementById('overlay');
var photo = document.getElementById('arrow-left');
var photo2 = document.getElementById('arrow-right');
var closeMenu = document.getElementById('close-menu');
var menuGlitch = document.getElementById('menu-glitch');
var sliderImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');
current = 0;



//nav button icon
document.getElementById('open-menu').addEventListener('click', function(){
    overlay.classList.add('show-menu')
    
    removeRemoveMenu();
});
document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.add('remove-menu')
    
    
    removeShowMenu();
    setTimeout(myTimeout,1500);
    
});

function removeShowMenu(){
 overlay.classList.remove('show-menu');
 menuGlitch.classList.add('glitch');

};

function removeRemoveMenu(){
    overlay.classList.remove('remove-menu');
    photo.classList.remove('arrow');
    photo2.classList.remove('arrow');
    menuGlitch.classList.remove('glitch');
   };

function myTimeout(){
    photo.classList.add('arrow');
    photo2.classList.add('arrow');
    
}


//slide images
function reset(){
    for(var i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display ='none';
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}


function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current ++;
}
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
})

arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
})

startSlide();
