export function sanitizePayload(payload) {
    
    const isEmpty = [];

  // Validar que el payload sea un objeto
  if (typeof payload !== 'object' || payload === null) {
    throw new Error('El payload debe ser un objeto válido');
  }



  const sanitized = {};

  // Sanitizar cada campo según su tipo esperado
  if (payload.Mensaje_Name) {
    sanitized.Mensaje_Name = payload.Mensaje_Name
      .toString()
      .trim()
      .replace(/[<>]/g, ''); // Eliminar caracteres potencialmente peligrosos
  }

  if (payload.Mensaje_Email) {
    sanitized.Mensaje_Email = payload.Mensaje_Email
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9@._-]/g, ''); // Mantener solo caracteres válidos para email
  }

  if (payload.Mensaje_Asunto) {
    sanitized.Mensaje_Asunto = payload.Mensaje_Asunto
      .toString()
      .trim()
      .replace(/[<>]/g, '');
  }

  if (payload.Mensaje_Body) {
    sanitized.Mensaje_Body = payload.Mensaje_Body
      .toString()
      .trim()
      .replace(/[<>]/g, '');
  }

  Object.entries(payload).forEach(( [clave, valor] )=>{
    if( valor == null  || valor == '' ){
        isEmpty.push(clave);
    }
})

  if( isEmpty.length != 0) return false;

  return sanitized;
}

