function sumarTiempos() {
  let horasTotales = 0;
  let minutosTotales = 0;
  let segundosTotales = 0;
  let milisegundosTotales = 0;

  // Iterar por todas las filas de tiempos
  $('.row:not(:last-child)').each(function() {
    const horas = parseInt($(this).find('.horas').val());
    const minutos = parseInt($(this).find('.minutos').val());
    const segundos = parseInt($(this).find('.segundos').val());
    const milisegundos = parseInt($(this).find('.milis').val());

    horasTotales += isNaN(horas) ? 0 : horas;
    minutosTotales += isNaN(minutos) ? 0 : minutos;
    segundosTotales += isNaN(segundos) ? 0 : segundos;
    milisegundosTotales += isNaN(milisegundos) ? 0 : milisegundos;
  });

  // Convertir milisegundos excedentes en segundos y minutos
  segundosTotales += Math.floor(milisegundosTotales / 1000);
  milisegundosTotales = milisegundosTotales % 1000;

  minutosTotales += Math.floor(segundosTotales / 60);
  segundosTotales = segundosTotales % 60;

  horasTotales += Math.floor(minutosTotales / 60);
  minutosTotales = minutosTotales % 60;

  // Formatear y mostrar el tiempo total
  const tiempoTotal = `${horasTotales.toString().padStart(2, '0')}:${minutosTotales.toString().padStart(2, '0')}:${segundosTotales.toString().padStart(2, '0')}.${milisegundosTotales.toString().padStart(3, '0')}`;
  $('#totalTime').val(tiempoTotal);
}

$('#calculateBtn').click(sumarTiempos);
