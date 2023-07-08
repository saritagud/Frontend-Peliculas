export const formatearFecha = (date) => {
   const fecha = new Date(date);
   const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

   const dia = fecha.getDate();
   const mes = meses[fecha.getMonth()];
   const año = fecha.getFullYear();

   return `${dia} de ${mes} de ${año}`;
}

export const formatearFechaInput = (date) => {
   const fecha = new Date(date);

   const dia = String(fecha.getDate()).padStart(2, '0');
   const mes = String(fecha.getMonth() + 1).padStart(2, '0');
   const año = fecha.getFullYear();

   return `${año}-${mes}-${dia}`;
}