
// script.js
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle 'active' class
});







const images = [
    "https://i.pinimg.com/enabled_lo/564x/ae/0c/65/ae0c6506aa74d3940a025715d9a8ee8b.jpg",
    "https://images.unsplash.com/photo-1550197833-2a3ea3ebe101?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621794212641-22b9f200bcf7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1586763365361-dfe8a05f66b6?q=80&w=956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let currentIndex = 0;

function showImage(index) {
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[index];
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showImage(currentIndex);
}

function autoChangeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(autoChangeImage, 6000); // Change image every 3 seconds
