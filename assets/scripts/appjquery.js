$(document).ready(function() {
  $('body .container .ctrl > li:nth-child(1)').click(function() {
    $('body .container .characters > li:nth-child(2)').addClass('animate');
  });

  $('body .container .ctrl > li:nth-child(2)').click(function() {
    $('body .container .characters > li:nth-child(2)').removeClass('animate');
  });
});
// start_transfer();
