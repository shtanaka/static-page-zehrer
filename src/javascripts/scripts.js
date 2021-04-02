import $ from 'jquery';

window.jQuery = $;
window.$ = $;

$(() => {
  const toggleBurgerMenu = () => {
    const $burgerButton = $('#burgerButton');
    const $burgerContent = $('#burgerContainer');

    $burgerButton.toggleClass('active');
    $burgerContent.toggleClass('active');
  };

  const addBurgerEvents = () => {
    const $burgerButton = $('#burgerButton');
    $burgerButton.on('click', toggleBurgerMenu);
  };

  addBurgerEvents();
});
