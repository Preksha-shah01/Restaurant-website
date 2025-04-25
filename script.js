const nightToggle = document.getElementById('night-mode');
nightToggle.addEventListener('change', () => {
    document.body.classList.toggle('night-mode', nightToggle.checked);
});


const soundBtn = document.getElementById('sound-btn');
const ambientSound = document.getElementById('ambient-sound');
let isPlaying = false;

soundBtn.addEventListener('click', () => {
    if (isPlaying) {
        ambientSound.pause();
    } else {
        ambientSound.play();
    }
    isPlaying = !isPlaying;
    soundBtn.classList.toggle('playing');
});


const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        menuItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeLightbox = document.querySelector('.close-lightbox');

galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        lightbox.style.display = 'flex';
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


const specialModal = document.querySelector('.special-modal');
const closeSpecial = document.querySelector('.close-special');

window.addEventListener('load', () => {
    setTimeout(() => {
        specialModal.style.display = 'flex';
    }, 2000);
});

closeSpecial.addEventListener('click', () => {
    specialModal.style.display = 'none';
});


const reservationForm = document.getElementById('reservation-form');
const successMessage = document.querySelector('.reservation-success');

reservationForm?.addEventListener('submit', function (e) {
    e.preventDefault();

    reservationForm.style.display = 'none';
    successMessage.style.display = 'block';

    setTimeout(() => {
        successMessage.style.display = 'none';
        reservationForm.reset();
        reservationForm.style.display = 'block';
    }, 5000);
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
