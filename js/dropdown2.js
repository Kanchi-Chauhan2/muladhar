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