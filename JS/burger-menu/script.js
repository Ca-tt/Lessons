var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

let activeClass = ('active');

icon.addEventListener('click', function() {
  icon1.classList.toggle(activeClass);
  icon2.classList.toggle(activeClass);
  icon3.classList.toggle(activeClass);
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});