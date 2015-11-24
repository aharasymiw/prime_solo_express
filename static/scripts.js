function ajaxCall() {
  $.ajax({
    url:'/balance',
  }) .done(function(data) {
    $('p').html(data);
  });
}

$(function() {
  ajaxCall();

  $('button').on('click', function() {
    ajaxCall();
  });
});
