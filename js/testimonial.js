
    
    
let testimonialContainer = document.querySelector('.home__testimonial--container');
    
let testimonialBox = document.querySelector('.home__testimonial--overflowcontainer');
let testimonialCurrent = 0;
let testimonialTouchStart = 0;
let testimonialCurrentLeft = 0;
testimonialContainer.addEventListener( 'touchstart',function(e){
    let paddingRight = (window.innerWidth - testimonialBox.getBoundingClientRect().right);
    testimonialCurrent = testimonialContainer.getBoundingClientRect().left + paddingRight;
    testimonialTouchStart = e.touches[0].clientX;
    testimonialCurrentLeft = testimonialContainer.getBoundingClientRect().left - paddingRight;
} );
    
testimonialContainer.addEventListener( 'touchmove',function(e){
    testimonialContainer.style.left = testimonialCurrentLeft + ( -testimonialTouchStart + e.touches[0].clientX ) + 'px';
    
    testimonialCurrent = testimonialCurrentLeft + ( -testimonialTouchStart + e.touches[0].clientX );
    if( testimonialCurrent <= -1*(testimonialContainer.getBoundingClientRect().width - testimonialBox.getBoundingClientRect().width ) ){
        testimonialContainer.style.left = -1*(testimonialContainer.getBoundingClientRect().width - testimonialBox.getBoundingClientRect().width )+'px';
    }else if( testimonialCurrent >=0 ){
        testimonialContainer.style.left = '0px';
    }
    
} );

    
testimonialContainer.addEventListener( 'touchend',function(e){
    testimonialContainer.style.transition = '.3s';
    if( testimonialContainer.getBoundingClientRect().left < 0 && testimonialContainer.getBoundingClientRect().left >= -1*(testimonialContainer.getBoundingClientRect().width*.3333/2) ){
        testimonialContainer.style.left = '0px';
        testimonialCurrentLeft = 0;
    }else if( testimonialContainer.getBoundingClientRect().left < -1*(testimonialContainer.getBoundingClientRect().width*.3333/2) && testimonialContainer.getBoundingClientRect().left > -1*(testimonialContainer.getBoundingClientRect().width*(0.6667+.3333)/2) ){
        testimonialContainer.style.left = -1*(testimonialContainer.getBoundingClientRect().width*.3333)+'px';
        testimonialCurrentLeft = (testimonialContainer.getBoundingClientRect().width*.3333);
    }else if( testimonialContainer.getBoundingClientRect().left < -1*(testimonialContainer.getBoundingClientRect().width*.6667/2)){
        testimonialContainer.style.left = -1*(testimonialContainer.getBoundingClientRect().width*.6667)+'px';
        testimonialCurrentLeft = (testimonialContainer.getBoundingClientRect().width*.6667);
    }
    setTimeout( function(){
        testimonialContainer.style.transition = 'unset';
    },300 );
});
let mousepressed = false;

    
testimonialContainer.addEventListener( 'mousedown',function(e){
    let paddingRight = (window.innerWidth - testimonialBox.getBoundingClientRect().right);
    testimonialCurrent = testimonialContainer.getBoundingClientRect().x + paddingRight;
    testimonialTouchStart = e.pageX;
    testimonialCurrentLeft = testimonialContainer.getBoundingClientRect().x - paddingRight;
    mousepressed = true;
    
} );
    
testimonialContainer.addEventListener( 'mousemove',function(e){
    if(mousepressed === true){
        testimonialContainer.style.left = testimonialCurrentLeft + ( -testimonialTouchStart + e.pageX ) + 'px';
        testimonialCurrent = testimonialCurrentLeft + ( -testimonialTouchStart + e.pageX );
        if( testimonialCurrent <= -1*(testimonialContainer.getBoundingClientRect().width - testimonialBox.getBoundingClientRect().width ) ){
            testimonialContainer.style.left = -1*(testimonialContainer.getBoundingClientRect().width - testimonialBox.getBoundingClientRect().width )+'px';
        }else if( testimonialCurrent >=0 ){
            testimonialContainer.style.left = '0px';
        }
    }
    
} );

    
testimonialContainer.addEventListener( 'mouseup',function(e){
    mousepressed = false;
    testimonialContainer.style.transition = '.3s';
    if( testimonialContainer.getBoundingClientRect().left < 0 && testimonialContainer.getBoundingClientRect().left >= -1*(testimonialContainer.getBoundingClientRect().width*.3333/2) ){
        testimonialContainer.style.left = '0px';
        testimonialCurrentLeft = 0;
    }else if( testimonialContainer.getBoundingClientRect().left < -1*(testimonialContainer.getBoundingClientRect().width*.3333/2) && testimonialContainer.getBoundingClientRect().left > -1*(testimonialContainer.getBoundingClientRect().width*(0.6667+.3333)/2) ){
        testimonialContainer.style.left = -1*(testimonialContainer.getBoundingClientRect().width*.3333)+'px';
        testimonialCurrentLeft = (testimonialContainer.getBoundingClientRect().width*.3333);
    }else if( testimonialContainer.getBoundingClientRect().left < -1*(testimonialContainer.getBoundingClientRect().width*.6667/2)){
        testimonialContainer.style.left = -1*(testimonialContainer.getBoundingClientRect().width*.6667)+'px';
        testimonialCurrentLeft = (testimonialContainer.getBoundingClientRect().width*.6667);
    }
    setTimeout( function(){
        testimonialContainer.style.transition = 'unset';
    },300 );
    
});
