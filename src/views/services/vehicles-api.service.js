import http from "@/shared/services/http-common.js";
import { Axios } from "axios";

/**
 * VehículosApiService class
 * @description Service class for making HTTP request to the API
 */
export class TutorialsApiServer{

    /**
     * Get all vehículos
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getAll() {
        return http.get('/vehiculos');
    }

    /**
    * Create a new vehículos
    * @param vehiculosResource - vehículos object to create
    */

    create(vehiculosResource){
        return http.post("/vehiculos", vehiculosResource);
    }
    /**
     * Update a vehículos
     * @param id - vehículos id to updated
     * @param vehiculosResource - vehículos object with data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    update(id, vehiculosResource) {
        return http.put(`/vehiculos/${id}`, vehiculosResource);
    }

    /**
     * Delete all vehículos
     * @param {*} id - vehículos id to delete
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    delete(id) {
        return http.delete(`/vehiculos/${id}`);
    }
    /**
     * Get vehiculos by id
     * @param {*} id 
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getById(id) {
        return http.get(`/vehiculos/${id}`)
    }
    /**
     * Get all vehículos that match the given tipo
     * @param {*} tipo - vehículos tipo to apply as citeria
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    findByTipo(tipo) {
        return http.get(`/vehiculos?=title=${tipo}`)
    }
}