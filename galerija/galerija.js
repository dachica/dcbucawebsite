var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



var studioBtn = document.querySelector(".studioBtn");
var bandBtn = document.querySelector('.bandBtn');
var studiogal = document.querySelector('.studiogal');
var bandgal = document.querySelector('.bandgal');




// studioBtn.addEventListener('click', function() {
//   if(studiogal.style.display === "block"){
//   bandgal.style.display = "none";
//   }else {
//     studiogal.style.display = "block";
//   }
//   this.classList.add('active');
//   bandBtn.classList.remove('active');
// });

// bandBtn.addEventListener('click', function() {
//   if(bandgal.style.display === "block"){
//     studiogal.style.display = "none";
//     }else {
//       bandgal.style.display = "block";
//     }
//   this.classList.add('active');
//   studioBtn.classList.remove('active');
// });

  
studioBtn.addEventListener('click', function() {
  studiogal.style.display = "block";
  bandgal.style.display = "none";
  this.classList.add('active');
  bandBtn.classList.remove('active');
});

bandBtn.addEventListener('click', function() {
  studiogal.style.display = "none";
  bandgal.style.display = "block";
  this.classList.add('active');
  studioBtn.classList.remove('active');
});




