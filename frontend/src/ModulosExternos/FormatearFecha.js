const FormatearFecha = (dato, formato, idiomaRegion = 'es-AR') => {
  console.log(dato);
  if (dato) {
    const options = {
      hour12: false,
      concatenacion: '',
    };

    switch (formato) {
      case 'fecha':
        options['dateStyle'] = 'medium';
        break;
      case 'hora':
        options['timeStyle'] = 'short';
        options.concatenacion = ' hs.';
        break;
      default:
        options['dateStyle'] = 'medium';
        options['timeStyle'] = 'short';
        options.concatenacion = ' hs.';
        break;
    }

    if (typeof dato === 'string') {
      const fecha = new Date(dato);
      return fecha.toLocaleString(idiomaRegion, options) + options.concatenacion;
    } else if (dato instanceof Date) {
      return dato.toLocaleString(idiomaRegion, options) + options.concatenacion;
    }
  }

  return '-/-/- -:-';
};
export default FormatearFecha;
