const menuButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menuLinks');
const menuIcon = document.querySelector('.fa-solid');


menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active');
    menuIcon.classList.toggle('fa-square-xmark');
    menuIcon.classList.toggle('fa-bars');


    
});

menuLinks.forEach((e)=>{

    e.addEventListener('click', ()=>{
        
        menu.classList.toggle('active');
        menuButton.classList.toggle('active');
        menuIcon.classList.toggle('fa-square-xmark');
        menuIcon.classList.toggle('fa-bars');

    })
})






