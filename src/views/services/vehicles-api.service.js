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
        return http.get('/vehículos');
    }

    /**
    * Create a new vehículos
    * @param vehículosResource - vehículos object to create
    */

    create(vehículosResource){
        return http.post("/vehículos", vehículosResource);
    }
    /**
     * Update a vehículos
     * @param id - vehículos id to updated
     * @param vehículosResource - vehículos object with data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    update(id, vehículosResource) {
        return http.put(`/vehículos/${id}`, vehículosResource);
    }

    /**
     * Delete all vehículos
     * @param {*} id - vehículos id to delete
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    delete(id) {
        return http.delete(`/vehículos/${id}`);
    }
    /**
     * Get vehículos by id
     * @param {*} id 
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getById(id) {
        return http.get(`/vehículos/${id}`)
    }
    /**
     * Get all vehículos that match the given tipo
     * @param {*} tipo - vehículos tipo to apply as citeria
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    findByTipo(tipo) {
        return http.get(`/vehículos?=title=${tipo}`)
    }
}