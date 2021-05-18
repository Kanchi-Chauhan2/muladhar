let dropdownLink = document.querySelector('.header__dropdown');
let dropdown = document.querySelector('.dropdown');
let header = document.querySelector('.header__dropdown');
let dropdownActive = false;

dropdownLink.addEventListener( 'mouseover',function(){
    let left = dropdownLink.getBoundingClientRect().left ;
    let top = header.getBoundingClientRect().bottom  + 10;
    console.log(top);
    dropdown.style.top = top+'px';
    dropdown.style.left = left + 'px';
    dropdown.style.zIndex = '1000';
    dropdown.classList.add('select');
    dropdownActive = true;
} );
dropdownLink.addEventListener( 'mouseout',function(){
    dropdown.classList.remove('select');
    dropdownActive = false;
    setTimeout( () => {
        if((dropdownActive === false))
            dropdown.style.zIndex = '-1';
        },300 );
});
dropdown.addEventListener( 'mouseover',function(){
    let left = dropdownLink.getBoundingClientRect().left ;
    let top = header.getBoundingClientRect().bottom  + 10;
    console.log(top);
    dropdown.style.top = top+'px';
    dropdown.style.left = left + 'px';
    dropdown.style.zIndex = '1000';
    dropdown.classList.add('select');
    dropdownActive = true;
} );
dropdown.addEventListener( 'mouseout',function(){
    dropdown.classList.remove('select');
    dropdownActive = false;
    setTimeout( () => {
        if((dropdownActive === false))
            dropdown.style.zIndex = '-1';
        },300 );
});


let dropdownLink2 = document.getElementsByClassName('header__dropdown')[1];
let dropdown2 = document.getElementsByClassName('dropdown')[1];
let header2 = document.getElementsByClassName('header__dropdown')[1];
let dropdownActive2 = false;

dropdownLink2.addEventListener( 'mouseover',function(){
    let left = dropdownLink2.getBoundingClientRect().left ;
    let top = header2.getBoundingClientRect().bottom  + 10;
    console.log(top);
    dropdown2.style.top = top+'px';
    dropdown2.style.left = left + 'px';
    dropdown2.style.zIndex = '1000';
    dropdown2.classList.add('select');
    dropdownActive2 = true;
} );
dropdownLink2.addEventListener( 'mouseout',function(){
    dropdown2.classList.remove('select');
    dropdownActive2 = false;
    setTimeout( () => {
        if((dropdownActive2 === false))
            dropdown2.style.zIndex = '-1';
        },300 );
});
dropdown2.addEventListener( 'mouseover',function(){
    let left = dropdownLink2.getBoundingClientRect().left ;
    let top = header2.getBoundingClientRect().bottom  + 10;
    console.log(top);
    dropdown2.style.top = top+'px';
    dropdown2.style.left = left + 'px';
    dropdown2.style.zIndex = '1000';
    dropdown2.classList.add('select');
    dropdownActive2 = true;
} );
dropdown2.addEventListener( 'mouseout',function(){
    dropdown2.classList.remove('select');
    dropdownActive2 = false;
    setTimeout( () => {
        if((dropdownActive2 === false))
            dropdownActive2.style.zIndex = '-1';
        },300 );
});