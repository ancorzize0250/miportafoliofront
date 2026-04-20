
import type { DatosPersonales } from '../types/DatosPersonales';

const API_BASE_URL = 'http://localhost:5046/api/DatosPersonales';

export const getDatosPersonales = async (): Promise<DatosPersonales[]> => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error('Error al obtener los datos');
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

// Obtener por ID (útil para una vista de detalle)
export const getDatosPersonalesById = async (id: number): Promise<DatosPersonales | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    return null;
  }
};