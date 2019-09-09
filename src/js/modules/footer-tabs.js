module.exports = function() {

  // begin footer tabs
  $('.footer-menu__link').on('click', function (e) {
    e.preventDefault();

    var tab   = $('.footer-tab');

    var fLink = $('.footer-menu__link');
    var linkVal = $(this).attr('href');


    if($(this).hasClass('active')){

      $(fLink).removeClass('active');
      $(tab).hide('slow');

    } else{
      $(fLink).removeClass('active');
      $(tab).hide('slow');

      $(this).addClass('active');
      $(linkVal).show('slow');

      $('html, body').animate({
        scrollTop: $('.footer').offset().top
      }, 1000);

    }
  });

  $('.tab-close').on('click', function (e) {
    e.preventDefault();

    var fLink = $('.footer-menu__link');
    var tab   = $('.footer-tab');

    $(fLink).removeClass('active');
    $(tab).hide('slow');

  });
  //end footer tabs

};
