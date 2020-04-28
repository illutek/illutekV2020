/**
 * Created by stefan on 15-04-2020.
 *
 */

(function() {
	'use strict';

  var linkModal = document.querySelector('.n-links__title');
  var closeModal = document.querySelector('.c-close-btn');
  var overlayModal = document.querySelector('.n-links__modal-bcg--visible');

  function hideModal() {
    
  }

  console.log(linkModal);

  function showModal() {
    overlayModal.classList.add('n-links__modal-bcg--visible');
  }

  linkModal.addEventListener('click', showModal);

})();
