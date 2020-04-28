/**
 * Created by stefan on 15-04-2020.
 *
 */

(function () {
  'use strict';

  function closeHeader() {
    var window_top = $(window).scrollTop();
    var div_top = $('#top').offset().top;

    if (window_top > div_top) {
      $('.header').addClass('header__remove');
      $('.header__content').addClass('header__content__remove');
    } else {
      $('.header').removeClass('header__remove');
      $('.header__content').removeClass('header__content__remove');
    }

  }

  $(function() {
    $(window).scroll(closeHeader);
    closeHeader();
  });

}());