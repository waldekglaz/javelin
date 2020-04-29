const slider = document.querySelector('.gallery-slider');
const elImg = document.querySelector('.gallery-slider img')
let images = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg', 'img/slide5.jpg', 'img/slide6.jpg', 'img/slide7.jpg']

// create dots

const dotsContainer = document.querySelector('.gallery-dots');

let id = 0;

for (let i = 0; i < images.length; i++) {

    const dot = document.createElement('div');
    dot.className = 'dot'
    dot.id = id;

    dotsContainer.appendChild(dot)
    id++;
}

const elDots = [...document.querySelectorAll('.dot')];

elDots.forEach((dot) => {
    dot.addEventListener('click', function (e) {
        console.log(e.target.id);
        elImg.src = images[e.target.id];
        elDots[e.target.id].classList.toggle('active')
    });
})