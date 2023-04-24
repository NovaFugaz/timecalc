$(document).ready(function() {
    $('#addRowBtn').click(function() {
      // Clonar la segunda fila
      var newRow = $('.row:eq(1)').clone();
  
      // Reiniciar los valores de los campos de entrada en la nueva fila
      newRow.find('input').val(0);
  
      // Insertar la nueva fila después de la segunda fila
      $('.row:eq(1)').after(newRow);
    });
  });