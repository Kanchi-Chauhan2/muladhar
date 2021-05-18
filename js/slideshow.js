var slidesexchange = function( current, next ){
    current.classList.remove('current');
    current.classList.add('previous');
    current.querySelector('.slideshow__image').classList.remove('current');
    current.querySelector('.slideshow__image').classList.add('previous');
    current.querySelector('.slideshow__title').classList.remove('current');
    current.querySelector('.slideshow__title').classList.add('previous');
    current.querySelector('.slideshow__heading').classList.remove('current');
    current.querySelector('.slideshow__heading').classList.add('previous');
    current.querySelector('.slideshow__paragraph').classList.remove('current');
    current.querySelector('.slideshow__paragraph').classList.add('previous');
    current.querySelector('.slideshow__button').classList.remove('current');
    current.querySelector('.slideshow__button').classList.add('previous');
    document.querySelector('.slideshow__progress').style.transition = '0s';
    document.querySelector('.slideshow__progress').style.width = '0%';

    next.classList.remove('previous');
    next.classList.add('current');
    next.querySelector('.slideshow__image').classList.remove('previous');
    next.querySelector('.slideshow__image').classList.add('current');
    next.querySelector('.slideshow__title').classList.remove('previous');
    next.querySelector('.slideshow__title').classList.add('current');
    next.querySelector('.slideshow__heading').classList.remove('previous');
    next.querySelector('.slideshow__heading').classList.add('current');
    next.querySelector('.slideshow__paragraph').classList.remove('previous');
    next.querySelector('.slideshow__paragraph').classList.add('current');
    next.querySelector('.slideshow__button').classList.remove('previous');
    next.querySelector('.slideshow__button').classList.add('current');
    setTimeout(() => {
        document.querySelector('.slideshow__progress').style.transition = '10s';
        document.querySelector('.slideshow__progress').style.width = '100%';
    }, 10);

}

var slidesDots = document.getElementsByClassName('slideshow__dot');
var slides = document.getElementsByClassName('slide');
var currentSlide = 0;
document.querySelector('.slideshow__progress').style.width = '100%';

function slideexchangeAdapter( dot, index ){
    slidesexchange( slides[currentSlide] , slides[index] );
    currentSlide = index;
    Array.from(slidesDots).forEach(
        d=>{
            d.classList.remove('select');
            d.removeEventListener('click',slideexchangeAdapter);
        }
    );
    dot.classList.add('select');
    
}

function slidesDotEffect(){
    Array.from(slidesDots).forEach( (dot,index) => {
        dot.addEventListener('click',function(){
            clearInterval(slideshowAutmate);
            if(currentSlide === index){

            }else{
                clearInterval(slideshowAutmate);
                slideexchangeAdapter( dot,index );
                setTimeout( function(){
                    slidesDotEffect();
                },2010 );
                setTimeout( function(){
                    slideshowAutmate = setInterval(
                        function(){
                            if( currentSlide === 2){
                                slideexchangeAdapter( slidesDots[0], 0 );
                            }else{
                                slideexchangeAdapter( slidesDots[currentSlide+1], currentSlide+1 );
                            }
                            
                        },10000
                    );
                },10 );
                
            }

        });
    } );
}

slidesDotEffect();
var slideshowAutmate = setInterval(
    function(){
        if( currentSlide === 2){
            slideexchangeAdapter( slidesDots[0], 0 );
        }else{
            slideexchangeAdapter( slidesDots[currentSlide+1], currentSlide+1 );
        }
        
    },10000
);

