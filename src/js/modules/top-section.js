module.exports = function() {

  // begin top section
  $('.top-section__description-btn').on('click', function () {
    $(this).fadeOut();
    $(this).siblings('.top-section__description-text').slideDown();
  })
  // end top section

};