import axios from 'axios';

// Cambia esta URL por la URL de tu API en Mocky.io
const API_BASE_URL = 'https://run.mocky.io/v3/be8f67e4-5590-40d7-87a8-2ff367d4d5a3';

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-type': 'application/json' }
});

export async function obtenerVehiculos() {
  try {
    const response = await http.get('/');
    if (response.status !== 200) {
      throw new Error('No se pudo obtener la información de los vehículos');
    }
    const data = response.data;
    return data.vehiculos; // Ajusta esto según la estructura de tu JSON en Mocky.io
  } catch (error) {
    console.error('Error al obtener datos de vehículos:', error);
    return null;
  }
}

export async function obtenerUsuarios() {
  try {
    const response = await http.get('/');
    if (response.status !== 200) {
      throw new Error('No se pudo obtener la información de los usuarios');
    }
    const data = response.data;
    return data.usuarios; // Ajusta esto según la estructura de tu JSON en Mocky.io
  } catch (error) {
    console.error('Error al obtener datos de usuarios:', error);
    return null;
  }
}

export default http;
