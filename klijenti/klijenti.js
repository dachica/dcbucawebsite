// ======================CONTACT FORMA VISIBILITY===================

const button = document.querySelector('.message-box');
const contact = document.querySelector('.contact-visibility');
const contact2 = document.querySelector('.contact-visibility2');


button.addEventListener("click", function(){
  button.classList.add("open");
  contact.classList.add("open");
  contact2.classList.add("open");
});