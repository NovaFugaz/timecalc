$(document).ready(function() {
    $('#resetBtn').click(function() {
      $('input[type="number"]').val('0');
      $('input[type="text"]').val('');
    });
  });