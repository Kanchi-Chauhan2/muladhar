let menuBurger = document.querySelector('.mobile__burger');
let mobileMenu = document.querySelector('.mobile__menu');
let mobiledropdownButton = document.querySelector('.mobile__dropdownbutton');
let mobliedowpdownIcon = document.querySelector('.mobile__dropdownbutton span');
let mobileDropdown = document.querySelector('.mobile__dropdown');

let mobmenuActive = false;
let mobdropdowmActive = false;

menuBurger.addEventListener('click',function(){
    if( mobmenuActive === false ){
        mobmenuActive = true;
        mobileMenu.style.right = '0%';
        document.querySelector('body').style.overflow = 'hidden';
    }else{
        mobmenuActive = false;
        mobileMenu.style.right = '-100%';
        document.querySelector('body').style.overflow = 'auto';
    }
});

mobiledropdownButton.addEventListener( 'click',function(){
    if( mobdropdowmActive === false ){
        mobdropdowmActive = true;
        mobileDropdown.style.height = mobileDropdown.scrollHeight+'px';
        mobliedowpdownIcon.classList.add('fa-chevron-up');
        mobliedowpdownIcon.classList.remove('fa-chevron-down');
    }else{
        mobdropdowmActive = false;
        mobileDropdown.style.height = '0px';
        mobliedowpdownIcon.classList.remove('fa-chevron-up');
        mobliedowpdownIcon.classList.add('fa-chevron-down');
    }
} );

let mobiledropdownButton2 = document.getElementsByClassName('mobile__dropdownbutton')[1];
let mobliedowpdownIcon2 = mobiledropdownButton2.querySelector('span');
let mobileDropdown2 = document.getElementsByClassName('mobile__dropdown')[1];

let mobdropdowmActive2 = false;


mobiledropdownButton2.addEventListener( 'click',function(){
    if( mobdropdowmActive2 === false ){
        mobdropdowmActive2 = true;
        mobileDropdown2.style.height = mobileDropdown.scrollHeight+'px';
        mobliedowpdown2Icon.classList.add('fa-chevron-up');
        mobliedowpdown2Icon.classList.remove('fa-chevron-down');
    }else{
        mobdropdowmActive2 = false;
        mobileDropdown2.style.height = '0px';
        mobliedowpdownIcon2.classList.remove('fa-chevron-up');
        mobliedowpdownIcon2.classList.add('fa-chevron-down');
    }
} );