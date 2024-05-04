<script>
import profileImage from "@/assets/bikeicon.png";

export default {
  name: "header",
  data() {
    return {
      checked: false,
      profileImage
    }
  }
}
</script>

<template>

  <header class="header">
    <pv-menubar class="menubar">
      <template #start>
        <img class="ruedarenticon" src="../assets/ruedarenticon.png" alt="RuedaRent Logo" />


        <pv-button class="buttonheader" label="Recomendaciones"/>
        <pv-button class="buttonheader" label="Mi Perfil"/>
        <pv-button class="buttonheader" label="Planes"/>
        <pv-button class="buttonheader" label="Mis Vehiculos"/>

        <pv-button class="buttonheader">

          Cerrar Sesion
        </pv-button>


      </template>


      <template #end>
        <pv-inputswitch class="inputbutton" v-model="checked" />
      </template>
    </pv-menubar>
  </header>
</template>


<style scoped>




.menubar {
  margin-top: 5%;
  margin-left: 7%;
  margin-right: 7%;
  display:  flex;

  align-items: center;
  justify-content: center;
  padding: 0.5% 1% 0.5% 1%;
  background-color: #D9D9D9;
  border-radius: 1rem;


  flex-wrap: nowrap;
}


.ruedarenticon{
  width: 9%;
  height: 9%;
  max-width: 100%;

  margin-right: 1%;
  margin-left: 1%;
}

.profileicon{
  width: 2rem;
  height: 2rem;
  margin-right: 0.3rem;
  margin-left: 1rem;
  margin-bottom: 0.7rem;

}


.buttonheader{
  margin-right: 2%;
  margin-left: 4%;
  margin-bottom:3%;
  font-size: 100%;
  background-color: green;
  color: black;
  border-radius: 1rem;
  min-width:1%;
  transition: font-size 0.2s ease-in-out, padding 0.2s ease-in-out;
  max-width: 100%;


  border: 0.1rem;
  width:auto;
  height:auto;

  flex-shrink:1;


}
@media (max-width: 1370px) {
  .buttonheader {
    font-size: 100%;
    padding: 0.5%;
    margin-left: 4%;
    margin-bottom:3%
  }
}

.inputbutton{
  padding: 0.5%;


}
</style>