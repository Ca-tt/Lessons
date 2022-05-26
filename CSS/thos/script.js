// let peremennaja
let header = document.querySelector("header");
console.log(header)

window.onscroll = function () {
    
    // когда мы прокрутили страницу вниз
  if (window.pageYOffset > 0) {
    // добавляем класс
    header.classList.add('fixed');
  }
  // когда мы докрутили страницу вверх
  else {
    // удаляем класс
    header.classList.remove('fixed');
  }

}
