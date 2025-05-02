// Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {myFunction()};

// Получить заголовок
var header = document.getElementById("header");

// Получить смещение позиции навигационной панели
var sticky = header.offsetTop;

// Добавить класс "sticky" к заголовку, когда вы достигнете его позиции прокрутке.
// Удалить "sticky" при выходе из положения прокрутки
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("header__sticky");
  } else {
    header.classList.remove("header__sticky");
  }
}