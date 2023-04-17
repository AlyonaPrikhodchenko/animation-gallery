// Открытие модалки

const btnOpen = document.querySelector('.modal__button--open');
const btnClose = document.querySelector('.modal__button--close');
const modal = document.querySelector('.modal__container');
const modalWindow = modal.querySelector('.modal__content');

const animateIn = () => {
  modalWindow.classList.remove('modal-in');
  modalWindow.removeEventListener('animationend', animateIn);
};

const modalOpenHandler = () => {
  modalWindow.addEventListener('animationend', animateIn);
  modal.classList.add('modal__container--open');
  modalWindow.classList.add('modal-in');
}

const animateOut = () => {
  modalWindow.classList.remove('modal-out');
  modal.classList.remove('modal__container--open');
  modalWindow.removeEventListener('animationend', animateOut);
};

const modalCloseHandler = () => {
  modalWindow.addEventListener('animationend', animateOut);
  modalWindow.classList.add('modal-out');
}

btnOpen.addEventListener('click', modalOpenHandler);
btnClose.addEventListener('click', modalCloseHandler);