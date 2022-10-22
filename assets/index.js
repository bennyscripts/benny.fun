const portfolioDiv = document.querySelector('.portfolio');
const images = document.querySelectorAll('img');
const footerText = document.querySelector('#footer-text');
const footer = document.querySelector('.footer');

if (window.innerWidth > 768) {
    portfolioDiv.addEventListener("wheel", (e) => {
        portfolioDiv.scrollLeft += e.deltaY;
    })
} else {
    footerText.innerText = "scroll side to side to see my photos"
}

images.forEach((image) => {
    image.addEventListener('click', () => {
        window.open(image.src, '_blank').focus();
    })
})