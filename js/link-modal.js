/**
 * Created by stefan on 15-04-2020.
 *
 */

(function() {
	'use strict';

  var linkModal = document.querySelector('.n-links__title');
  var closeModal = document.querySelector('.c-close-btn');
  var overlayModal = document.querySelector('.n-links__modal-bcg--hidden');

function hiddenModal () {
  overlayModal.classList.remove('n-links__modal-bcg--visible');
  overlayModal.classList.add('n-links__modal-bcg--hidden');
}

  function showModal() {
    overlayModal.classList.add('n-links__modal-bcg--visible');
    overlayModal.classList.remove('n-links__modal-bcg--hidden');
  }

  linkModal.addEventListener('click', showModal);

  closeModal.addEventListener('click', hiddenModal);

})();