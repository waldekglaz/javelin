const elBurger = document.querySelector('.fa-th');
const menu = document.querySelector('nav');
let flag = true;
elBurger.addEventListener('click', () => {
    menu.classList.toggle('active');
})