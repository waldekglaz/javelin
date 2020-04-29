const customerImages = [...document.querySelectorAll('.customers img')];

customerImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        console.log(e.target)
    })
})