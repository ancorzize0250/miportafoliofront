// src/services/apiService.ts
const BASE_URL = 'http://localhost:5046/api';
import type { Foto } from '../types/Portfolio';

export const fetchData = async <T>(endpoint: string): Promise<T[]> => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) throw new Error(`Error en ${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getFotos = async (): Promise<Foto[]> => {
  try {
    const response = await fetch('http://localhost:5046/api/Fotos');
    if (!response.ok) throw new Error('Error al obtener fotos');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};