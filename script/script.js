const menuButton = document.querySelector('.hamburger');
const menuShow = document.querySelector('.menu');

menuButton.addEventListener('click', ()=> {
    menuShow.classList.toggle('active');
    menuButton.classList.toggle('active');

})