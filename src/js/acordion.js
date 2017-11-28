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
