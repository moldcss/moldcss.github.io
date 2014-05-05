$(function() {
  /* Nav stuff */
  var ulNav = $('ul.nav'),
      navToggle = $('a.nav-toggle'),
      fade      = $('#fade');

  navToggle.click(function() {
    ulNav.toggle();
  });

  navToggle.blur(function() {
    ulNav.toggle();
  });
  
  $('a[data-toggle="modal"]').click(function() {
    var modal = $($(this).attr('data-modal'));
    modal.show('fade');
    modal.addClass('modal-open');
    fade.show();
  });
  
  $('.close-modal').click(function() {
    fade.hide();
    $('.modal-open').hide('fade');
  });
});
