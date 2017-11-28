// SLIDER
var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("slider__dot");

  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" slider__dot--hover", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slider__dot--hover";
}

// POPUP
function showPopup(popName) {
    var popup = document.getElementById(popName);

    popup.classList.toggle("show");

}

// TABS
document.getElementById("duo").style.display = "block";
document.getElementById("active").classList.add("active");

function openTab(evt, tabName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tabs__link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// LIGHTBOX
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// ACORDION
var acc = document.getElementById("accordion");
var panel = document.getElementById("panel");

 function accordion() {
   if (panel.style.display === "block") {
     panel.style.display = "none";
     acc.innerHTML = "show more";
     acc.classList.remove("button-active");
    } else {
      panel.style.display = "block";
      acc.classList.add("button-active");
      acc.innerHTML = "read more";
      }
}
