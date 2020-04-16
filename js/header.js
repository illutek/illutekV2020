/**
 * Created by stefan on 01-11-2019.
 *
 */

(function () {
  'use strict';

  function closeHeader() {
    var window_top = $(window).scrollTop();
    var div_top = $('#top').offset().top;

    if (window_top > div_top) {
      $('.header__content').addClass('header__content__remove');
      $('.header__video').addClass('header__video__remove');
      $('.header__overlay').addClass('header__overlay__remove');
    } else {
      $('.header__content').removeClass('header__content__remove');
      $('.header__video').removeClass('header__video__remove');
      $('.header__overlay').removeClass('header__overlay__remove');
    }

  }

  $(function() {
    $(window).scroll(closeHeader);
    closeHeader();
  });

}());