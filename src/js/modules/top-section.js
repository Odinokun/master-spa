module.exports = function() {

  // begin top section
  $('.top-section__description-btn').on('click', function () {
    $(this).addClass('hide');
    $(this).siblings('.top-section__description-text').addClass('active');
  })
  // end top section

};