export const formatearFecha = (date) => {
   const fecha = new Date(date);
   const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

   const dia = fecha.getDate();
   const mes = meses[fecha.getMonth()];
   const año = fecha.getFullYear();

   return `${dia} de ${mes} de ${año}`;
}