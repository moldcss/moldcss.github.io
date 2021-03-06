$(function() {
  /* Nav stuff */
  var ulNav = $('ul.nav'),
      fade  = $('#fade'),
      navToggle = $('a.nav-toggle');

  navToggle.click(function() { ulNav.toggle(); });
  navToggle.blur(function() { ulNav.toggle(); });
  
  /* Modals */
  $('a[data-toggle="modal"]').click(function() {
    var modal = $($(this).attr('data-modal'));
    modal.show('fade');
    fade.show();
  });
  
  $('.close-modal').click(function() {
    fade.hide();
    $('.modal').hide();
  });
});
