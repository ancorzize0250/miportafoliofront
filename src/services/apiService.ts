// src/services/apiService.ts

const BASE_URL = import.meta.env.VITE_API_URL;

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
    const response = await fetch(`${BASE_URL}/Fotos`);
    if (!response.ok) throw new Error('Error al obtener fotos');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};