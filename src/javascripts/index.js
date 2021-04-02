import $ from 'jquery';
import { initSearchBar } from './searchBar';
import { initBurgerMenu } from './burgerMenu';

window.jQuery = $;
window.$ = $;

$(() => {
  initSearchBar();
  initBurgerMenu();
});
