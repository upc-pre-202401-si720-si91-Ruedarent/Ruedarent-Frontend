import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-type': 'application/json' }
});

export async function obtenerVehiculos() {
  try {
    const response = await http.get('vehiculos');
     if (response.status !== 200) {
      throw new Error('No se pudo obtener la información de los vehículos');
    }
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error al obtener datos de vehículos:', error);
    return null;
  }
}

export async function obtenerUsuarios() {
    try {
      const response = await http.get('usuarios');
       if (response.status !== 200) {
        throw new Error('No se pudo obtener la información de los vehículos');
      }
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error al obtener datos de vehículos:', error);
      return null;
    }
}

export default http;