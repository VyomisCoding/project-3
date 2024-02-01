burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')
//secondHalf=img.querySelector('.secondHalf')
//const secondHalf = img.querySelector('.secondHalf');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    //secondHalf.classList.toggle('secondHalf')

})