import $ from 'jquery';

const toggleBurgerMenu = () => {
  const $burgerButton = $('#burgerButton');
  const $burgerContent = $('#burgerContainer');

  $burgerButton.toggleClass('active');
  $burgerContent.toggleClass('active');
};

const initBurgerMenu = () => {
  const $burgerButton = $('#burgerButton');
  $burgerButton.on('click', toggleBurgerMenu);
};

export { toggleBurgerMenu, initBurgerMenu };
