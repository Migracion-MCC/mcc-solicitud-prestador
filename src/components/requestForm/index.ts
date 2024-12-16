import { RS_ListarTipoUsuario } from '../../constants/ExternalServices';

export async function getUserTypes(): Promise<object> {
  try {
    const response = await fetch(RS_ListarTipoUsuario, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error en la solicitud POST:', error);
    throw error;
  }
}
