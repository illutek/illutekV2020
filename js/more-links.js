/**
 * Created by stefan on 15-04-2020.
 *
 */

(function() {
	'use strict';

  var showMoreLinks = document.querySelector('.c-show-more');
  var moreLinks = document.querySelector('.r-more-links');
  var showMoreBtn = document.querySelector('.c-show-more');

  // Functions

  function showMore() {
    moreLinks.classList.toggle('r-more-links--visible');
    showMoreBtn.classList.toggle('c-show-more--less');
  }

  showMoreLinks.addEventListener('click', showMore);

})();