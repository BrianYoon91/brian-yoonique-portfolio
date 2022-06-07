const menuButton = document.querySelector('.hamburger');
const menuShow = document.querySelector('.menu');
const changeIcon = document.getElementsByClassName('')

menuButton.addEventListener('click', (e) => {

    menuShow.classList.toggle('active');
    menuButton.classList.toggle('active');
    e.target.classList.toggle('fa-square-xmark');
    e.target.classList.toggle('fa-bars');
})