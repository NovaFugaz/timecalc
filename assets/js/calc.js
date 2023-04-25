function sumarTiempos() {
  let horasTotales = 0;
  let minutosTotales = 0;
  let segundosTotales = 0;
  let milisegundosTotales = 0;

  // Each por cada columna
  $('tr').each(function() {
    const horas = parseInt($(this).find('.horas').val());
    const minutos = parseInt($(this).find('.minutos').val());
    const segundos = parseInt($(this).find('.segundos').val());
    const milisegundos = parseInt($(this).find('.milis').val());

    horasTotales += isNaN(horas) ? 0 : horas;
    minutosTotales += isNaN(minutos) ? 0 : minutos;
    segundosTotales += isNaN(segundos) ? 0 : segundos;
    milisegundosTotales += isNaN(milisegundos) ? 0 : milisegundos;
  });

  // Convertir cada uno para lo que sobre :p

  segundosTotales += Math.floor(milisegundosTotales / 1000);
  milisegundosTotales = milisegundosTotales % 1000;

  minutosTotales += Math.floor(segundosTotales / 60);
  segundosTotales = segundosTotales % 60;

  horasTotales += Math.floor(minutosTotales / 60);
  minutosTotales = minutosTotales % 60;

  // Mostrar el tiempo total
  const tiempoTotal = `${horasTotales.toString().padStart(2, '0')}h ${minutosTotales.toString().padStart(2, '0')}m ${segundosTotales.toString().padStart(2, '0')}s ${milisegundosTotales.toString().padStart(3, '0')}ms`;
  $('#totalTime').val(tiempoTotal);
}

$('#calculateBtn').click(sumarTiempos);
