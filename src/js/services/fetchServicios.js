export const serviciosFetch = async () => {
  try {
    const response = await fetch( '../../json/servicios.json' );
    console.log(response)
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud fetch:', error);
    return [];
  } 
};