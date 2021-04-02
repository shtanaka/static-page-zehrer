import $ from 'jquery';

const toggleSearchBar = () => {
  const $searchBar = $('#searchBarContainer');
  const $searchInput = $('#searchInput');
  const inputTrigger = $searchInput.is(':focus') ? 'blur' : 'focus';

  $searchBar.toggleClass('active');
  $searchInput.trigger(inputTrigger);
};

const initSearchBar = () => {
  const $searchButton = $('.search-button');
  const $closeSearchButton = $('#closeSearchButton');

  $searchButton.on('click', toggleSearchBar);
  $closeSearchButton.on('click', toggleSearchBar);
};

export { toggleSearchBar, initSearchBar };
