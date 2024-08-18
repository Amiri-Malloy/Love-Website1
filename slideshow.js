let slideIndex = 0;
const images = [
    'Gala.JPG',
    'Baseball.JPG',
    'Holding_WhiteDress_Water.JPG',
    'MiniGolf_Date.JPG',
    'Outlook_Antigua.JPG',
    'Thanksgiving.jpg',
    'Us_Antigua_Holding.JPG'
];

function showSlides() {
    document.body.style.backgroundImage = `url(${images[slideIndex]})`;
    slideIndex = (slideIndex + 1) % images.length;
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
