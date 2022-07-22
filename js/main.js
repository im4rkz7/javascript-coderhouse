
const CosasQueHacerHoy = [];

let entrada;
do {
  entrada = prompt('Ingrese sus tareas de hoy. Ingrese FIN para terminar');
  if (entrada != 'FIN') {
    CosasQueHacerHoy.push(entrada);
  }

} while (entrada != 'FIN');


alert('Sus tareas diarias son ' + CosasQueHacerHoy.length + ' tareas');

alert('Sus tareas de hoy son:\n' + CosasQueHacerHoy.join('\n'));
