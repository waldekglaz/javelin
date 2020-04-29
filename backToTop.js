const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 400) {
        backToTop.style.opacity = '1'
    } else {
        backToTop.style.transition = '1s'
        backToTop.style.opacity = '0'
    }
})