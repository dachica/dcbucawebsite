// =============================TESTIMONY SWIPER ======================

var swiper2 = new Swiper('.testimony-swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// ======================CONTACT FORMA VISIBILITY===================

const button = document.querySelector('.message-box');
const contact = document.querySelector('.contact-visibility');
const contact2 = document.querySelector('.contact-visibility2');


button.addEventListener("click", function(){
  button.classList.add("open");
  contact.classList.add("open");
  contact2.classList.add("open");
});


// ==========================================

const audioplay = document.getElementById('audioplay');

audioplay.volume = 0.2;

function playsong() {
  setTimeout(function(){ 
    audioplay.play()
  }, 3000);
}
