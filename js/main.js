/* ========== Модальные окна услуг ========== */
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.services-modal');
    const openBtns = document.querySelectorAll('.learn-more-btn[data-modal]');
    const closeBtns = document.querySelectorAll('.modal-close-btn');

    function openModal(modal) {
        modal.classList.add('show');
        document.body.classList.add('no-scroll');
    }

    function closeModal(modal) {
        modal.classList.remove('show');
        // Если других открытых модалок не осталось — возвращаем прокрутку
        if (!document.querySelector('.services-modal.show')) {
            document.body.classList.remove('no-scroll');
        }
    }

    // Открытие по кнопке «Подробнее»
    openBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById(btn.dataset.modal);
            if (modal) openModal(modal);
        });
    });

    // Закрытие по крестику
    closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => closeModal(btn.closest('.services-modal')));
    });

    // Закрытие по клику на затемнённый фон
    modals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    // Закрытие по клавише Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const open = document.querySelector('.services-modal.show');
            if (open) closeModal(open);
        }
    });
});