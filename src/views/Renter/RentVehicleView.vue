<template>
  <div class="container">
    <img class="arrowback" src="/src/assets/img/arrowrent.png" alt="Arrow Rent" />
  </div>
  <div class="Rent">
    <pv-card class="card">
      <template #content>
        <div class="containerent">
          <div class="profileImage">
            <pv-image class="profileImage" :src="profileImage" alt="profile Image" width="350" preview />
          </div>
          <div class="rentdescription">
            <div class="titleinformation">
              <h1>Alquilar vehículo </h1>
            </div>
            <div class="containersinformation">
              <div class="container1information">
                <div class="categories">
                  <p>Propietario(a):</p>
                  <p>Tipo:</p>
                  <p>Marca:</p>
                  <p>Placa:</p>
                  <p>Color:</p>
                </div>
              </div>
              <div class="containerv2information">
                <p>información</p>
                <p>información</p>
                <p>información</p>
                <p>información</p>
                <p>información</p>
              </div>
            </div>
            <pv-button class="buttonwpp" label="Contactar">
              <p>Contactar</p> <img class="whatsappicon" src="/src/assets/img/whatsappicon.png" alt="WhatsApp" />
            </pv-button>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<script>
import profileImage from "@/assets/img/vehicleimage.png";

export default {
  name: "RentVehicleView",
  data() {
    return {
      checked: false,
      profileImage
    }
  }
}
</script>

<style scoped>
/* Estilos actuales */

.arrowback {
  width: 2.5rem;
  height: 3rem;
  margin: 2rem 1rem;
  transform: rotate(180deg);
}

.buttonwpp {
  margin: 1rem 1rem 1rem 10%; /* Ajuste del margen izquierdo */
  background-color: #01C880;
  color: black;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.5rem 1rem;
}

.whatsappicon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem; /* Ajuste del margen derecho */
}

/* Estilos adicionales para mejorar la flexibilidad */

.Rent {
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 0 10%;
}

.containerent {
  display: flex;
  flex-direction: column; /* Cambio a columna para mejor adaptabilidad */
  align-items: center;
  color: black;
  max-width: 100%; /* Hacer el contenedor flexible */
}

.titleinformation h1 {
  font-size: 2rem;
  margin: 2rem 0;
  text-align: center;
  color: black;
}

.containersinformation {
  display: flex;
  flex-direction: column; /* Cambio a columna para mejor adaptabilidad */
  align-items: center;
  margin: 2rem 0;
}

.container1information {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.containerv2information {
  display: flex;
  flex-direction: column; /* Cambio a columna para mejor adaptabilidad */
  align-items: center;
  margin-top: 5px;
}

.margen {
  list-style: none;
  margin-top: 8px;
}

.margen p {
  margin-bottom: 21px;
}
</style>