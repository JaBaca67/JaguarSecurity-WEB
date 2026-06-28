function formatearFecha(fecha = new Date()) {
  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(fecha);
}

function generarId(prefijo = "JS") {
  return `${prefijo}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}
