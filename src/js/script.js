'use strict';

(function () {
  var hamburger = document.querySelector('.header__toggle-button--hamburger');
  var cross = document.querySelector('.header__toggle-button--cross');
  var nav = document.querySelector('.nav');
  var upperHeader = document.querySelector('.header__upper');
  var contactsBlock = document.querySelector('.header__contacts-block');

  hamburger.addEventListener('click', onDisplayNav);
  cross.addEventListener('click', onCloseNav);

  function onDisplayNav() {
    nav.style.display = 'flex';
    contactsBlock.style.display = 'flex';
    hamburger.style.display = 'none';
    cross.style.display = 'block';
  }
  function onCloseNav() {
    nav.style.display = 'none';
    contactsBlock.style.display = 'none';
    hamburger.style.display = 'block';
    cross.style.display = 'none';
  }
})();