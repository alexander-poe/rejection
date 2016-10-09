var $span = $('#yea');
var $spanot = $('#nah');

$(document).ready(function() {
  $('#yes').click(function(){
  	$span.text(Number($span.text()) + 1);
  })

  $('#no').click(function() {
  	$spanot.text(Number($spanot.text()) + 10);
  })





});