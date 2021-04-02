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

  const toggleSearchBar = () => {
    const $searchBar = $('#searchBarContainer');
    const $searchInput = $('#searchInput');
    const inputTrigger = $searchInput.is(':focus') ? 'blur' : 'focus';

    $searchBar.toggleClass('active');
    $searchInput.trigger(inputTrigger);
  };

  const addBurgerEvents = () => {
    const $burgerButton = $('#burgerButton');
    $burgerButton.on('click', toggleBurgerMenu);
  };

  const addSearchBarEvents = () => {
    const $searchButton = $('.search-button');
    const $closeSearchButton = $('#closeSearchButton');

    $searchButton.on('click', toggleSearchBar);
    $closeSearchButton.on('click', toggleSearchBar);
  };

  addBurgerEvents();
  addSearchBarEvents();
});
