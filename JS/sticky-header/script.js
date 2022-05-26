// let -- переменная
// находим элемент
let nav = document.querySelector('nav');

window.onscroll = function () {

  // console.log(window.pageYOffset);

  // когда мы прокрутили страницу вниз
  if (window.pageYOffset > 0) {
    // добавляем класс
    nav.classList.add('fixed');
  }
  // когда мы докрутили страницу вверх
  else {
    // удаляем класс
    nav.classList.remove('fixed');
  }
}