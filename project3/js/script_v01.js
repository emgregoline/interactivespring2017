$(function(){
  
  $('body').click(function(){
  	$('.star').toggleClass('pause');
  });
  
  $('.star').click(function(){
  	$('.letter').toggleClass('show');
  });

});