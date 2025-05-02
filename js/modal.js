const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);


/* Анимация стрелки без удержания кнопки*/
// Находим все кнопки с классом .carousel-button
document.querySelectorAll('.carousel-button, .modal-btn-open').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('carousel-button')) {
            // Анимация для кнопки с классом .carousel-button
            button.classList.add('animate');
            
            // Удаляем класс после завершения анимации (0.5s)
            setTimeout(() => {
                button.classList.remove('animate');
            }, 500);
        } 
        
        if (button.classList.contains('modal-btn-open')) {
            // Анимация для кнопки с классом .modal-btn-open
            button.classList.add('modal-animate');
            
            // Удаляем класс после завершения анимации (0.5s)
            setTimeout(() => {
                button.classList.remove('modal-animate');
            }, 500);
        }
    });
});
