var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// var acc = document.getElementsByClassName("accordion");
// var panel = document.getElementsByClassName("panel");
// var acc1 = document.querySelectorAll("accordion");
// var panel2 = document.querySelectorAll("panel");


// for (var i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
    
//     var panel = document.getElementsByClassName('panel');
//     panel[i].classList.toggle('active');
//   });
// }