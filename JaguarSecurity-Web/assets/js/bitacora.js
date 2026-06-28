const claveBitacora = "jaguarsecurity-bitacora";

function obtenerBitacora() {
  const datos = localStorage.getItem(claveBitacora);
  return datos ? JSON.parse(datos) : [];
}

function guardarBitacora(registros) {
  localStorage.setItem(claveBitacora, JSON.stringify(registros));
}

function agregarRegistro(registro) {
  const registros = obtenerBitacora();
  registros.unshift({
    id: generarId("BIT"),
    fecha: formatearFecha(),
    ...registro,
  });
  guardarBitacora(registros);
  return registros;
}
