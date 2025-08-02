/**
 * Vehículos
 * @description Vehículos entity
 */
export class Vehículos {
    constructor(id, tipo, marca,modelo, caracteristicas, image, published){
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.caracteristicas= caracteristicas;
        this.image = image;
        this.published = published;
        this.status = this.published === true ? 'Published' : 'Unpublished';
    }

    static fromDisplayableTutorial(displayableVehículos) {
        return new Vehículos(
            displayableVehículos.id,  
            displayableVehículos.tipo,  
            displayableVehículos.marca,  
            displayableVehículos.modelo,
            displayableVehículos.caracteristicas,
            displayableVehículos.image,
            displayableVehículos.status.label === 'Published');
    }
    static toDisplayableVehículos(Vehículos) {
        return {
            id: Vehículos.id,
            tipo: Vehículos.tipo,
            marca: Vehículos.marca,
            modelo: Vehículos.modelo,
            caracteristicas: Vehículos.caracteristicas,
            image: Vehículos.image,
            status: Vehículos.published === true ? 'Published' : 'Unpublished'
        }
    }
}