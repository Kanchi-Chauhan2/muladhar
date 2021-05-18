var productParallaxContent = document.querySelectorAll('.products__grid--2 .products__grid--content');

window.addEventListener('scroll',function(){
    Array.from(productParallaxContent).forEach( (content,index) => {
        let contentTop = content.getBoundingClientRect().top;
        let contentHeight = content.getBoundingClientRect().height;
        let totalLength = contentTop+contentHeight;
        
        if( contentTop > (-1*contentHeight) ){
            let newOffset = (contentTop/totalLength)*100*1.25;
            if( index%2 === 0 ){
                content.style.backgroundPosition = '0%'+newOffset+'%';
            }else{
                content.style.backgroundPosition = '100%'+newOffset+'%';
            }
        }
    } );
});