document.addEventListener('DOMContentLoaded', function() {
    var addRowBtn = document.getElementById('addRowBtn');
    var lastRow = document.querySelector('.table tbody tr:last-child'); // variable para almacenar la última fila agregada
    addRowBtn.addEventListener('click', function() {
      
      // Clonar la última fila agregada
      var newRow = lastRow.cloneNode(true);
  
      // Reiniciar los valores para la nueva fila

      newRow.querySelectorAll('input').forEach(function(input) {
        input.value = 0;
      });
  
      // Insertar la nueva fila después de la última fila
      lastRow.parentNode.insertBefore(newRow, lastRow.nextSibling);
  
      // Actualizar la variable lastRow
      lastRow = newRow;
    });
  });