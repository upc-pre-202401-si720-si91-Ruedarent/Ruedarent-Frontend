<script>
import profileImage from "@/assets/bikeicon.png";
import {RouterLink} from "vue-router";

export default {
  name: "headerowner",
  components: {RouterLink},
  data() {
    return {
      checked: false,
      profileImage,
      visible: false
    }
  }
}
</script>

<template>

  <header class="header">
    <pv-menubar class="menubar">
      <template #start>

        <img class="ruedarenticon" src="../assets/ruedarenticon.png" alt="RuedaRent Logo" />
        <RouterLink to="/Recommendations"><pv-button class="buttonheader" label="Recomendaciones"/></RouterLink>
        <RouterLink to="/MyOwnerProfile"><pv-button class="buttonheader" label="Mi Perfil"/></RouterLink>
        <RouterLink to="/PlansOwner"><pv-button class="buttonheader" label="Planes"/></RouterLink>
        <RouterLink to="/vehicles"><pv-button class="buttonheader" label="Mis Vehiculos"/></RouterLink>
        <RouterLink to="/login"><pv-button class="buttonheader">Cerrar Sesion</pv-button></RouterLink>

      </template>

      <template #menubutton>

      </template>

      <template #end>
        <pv-inputswitch class="inputbutton" v-model="checked" />
      </template>
    </pv-menubar>

    <pv-menubar class="sidebarPart">
      <template #start>
        <img class="ruedarenticon2" src="../assets/ruedarenticon.png" alt="RuedaRent Logo" />
      </template>

      <template #end>
        <pv-button class="sidebarbutton" icon="pi pi-bars" @click="visible = true" />
      </template>
    </pv-menubar>

    <pv-sidebar v-model:visible="visible" header="RuedaRent" >
      <template #header>
        <h1>RuedaRent</h1>
        <img class="ruedarenticon2" src="../assets/ruedarenticon.png" alt="RuedaRent Logo" />
      </template>


        <RouterLink to="/MyOwnerProfile"><pv-button class="buttonheader1" label="Mi Perfil"/></RouterLink>
        <RouterLink to="/Recommendations"><pv-button class="buttonheader1" label="Recomendaciones"/></RouterLink>
        <RouterLink to="/PlansOwner"> <pv-button class="buttonheader1" label="Planes"/></RouterLink>
        <RouterLink to="/vehicles">  <pv-button class="buttonheader1" label="Mis Vehiculos"/></RouterLink>
        <RouterLink to="/login"><pv-button class="buttonheader1">Cerrar Sesion</pv-button></RouterLink>
    </pv-sidebar>


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

.ruedarenticon2{
  width: 8vh;
  height: 7vw;
}



.buttonheader{
  margin-right: 2%;
  margin-left: 4%;
  margin-bottom:3%;
  font-size: 100%;
  background-color: transparent;
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


.buttonheader1{
  margin-right:50%;
  padding:10px;
  margin-top: 10%;
  font-size: 100%;
  background-color: transparent;
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



.inputbutton{
  padding: 0.5%;
}

.sidebarPart{

  margin-top: 5%;
  margin-left: 7%;
  margin-right: 70%;
  align-items: center;
  padding: 0.5% 1% 0.5% 1%;
  background-color: #D9D9D9;
  border-radius: 1rem;
  justify-content: space-between;
}
.sidebarbutton{
  background-color: green;
  border: #00BD7E;
}

@media (max-width: 1370px) {
  .buttonheader {
    font-size: 100%;
    padding: 0.5%;
    margin-left: 4%;
    margin-bottom:3%
  }
}

@media (min-width: 1044px){
  .sidebarPart{
    display: none;
  }
}

@media (max-width: 1044px){
  .menubar{
    display: none;
  }
}

@media (max-width: 670px){
  .sidebarPart{
    width: 150px;
    height: 70px;
  }
  .ruedarenticon2{
    width: 70px;
    height: 55px;
  }

}

</style>