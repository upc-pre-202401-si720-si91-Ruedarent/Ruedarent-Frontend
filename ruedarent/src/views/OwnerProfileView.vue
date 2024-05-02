<script>

import profileImage from "../assets/profileimage.png";
export default {
  name: "OwnerProfileView",
  data() {
    return {
      checked: false,
      profileImage
    }
  }

}




</script>

<template>
  <header>
    <pv-menubar class="menubar">
      <template #start>
        <img class="ruedarenticon" src="../assets/ruedarenticon.png" alt="RuedaRent Logo" />
        <pv-button class="buttonheader" label="Recomendaciones"/>
        <pv-button class="buttonheader" label="Mi Perfil"/>
        <pv-button class="buttonheader" label="Planes"/>
        <pv-button class="buttonheader" label="Mis Vehiculos"/>
        <img class="profileicon" src="../assets/profileicon.png" alt="Profile Icon" />
        <pv-button class="buttonsession" label="Cerrar Sesion"/>
      </template>


      <template #end>
        <pv-inputswitch class="inputbutton" v-model="checked" />
      </template>
    </pv-menubar>
  </header>


  <div class="container">
    <pv-card>
      <template #content>
        <div class="containercard">

          <div class="profileImage">
            <pv-image class="profileImage" :src="profileImage"  alt="Profile Image" width="350" preview />
          </div>

          <div class="profiledescription">
            <div class="titleinformation">
              <h1 >Mi Perfil</h1>
            </div>

            <div class="containerinformation">
              <h3>Nombre:</h3>
              <h3>Vehiculos:</h3>
              <h3>Ubicacion:</h3>
              <h3>Telefono:</h3>

            </div>

          </div>

          <div class="profiledescriptionv2">
            <div class="containerinformationv2">
              <h3>Ingresar informacion</h3>
              <h3>Ingresar informacion</h3>
              <h3>Ingresar informacion</h3>
              <h3>Ingresar informacion</h3>
            </div>

            <div >
              <pv-button class="buttonprofile" label="Editar Perfil" />
            </div>
          </div>
        </div>
      </template>


    </pv-card>


  </div>




</template>

<style scoped>


.menubar {
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: grid;
  grid-template-columns: auto 1fr auto; /* Define columns */
  align-items: center;
  padding: 0.1rem 0.5rem 0.1rem 1.5rem;
  background-color: #D9D9D9;
  border-radius: 1rem;
  /* Additional styling for responsiveness (optional) */
  overflow-x: auto; /* Enable horizontal scrollbar if content overflows */
}

.ruedarenticon,
.profileicon {
  grid-column: 1;
}

.buttonheader,
.buttonsession {
  grid-column: 2;
}
.ruedarenticon{
  width: 4rem;
  height: 4rem;

  margin-right: 1rem;
  margin-left: 1rem;
}

.profileicon{
  width: 2rem;
  height: 2rem;
  margin-right: 0.3rem;
  margin-left: 1rem;
  margin-bottom: 0.7rem;

}


.buttonheader{
  margin-right: 1rem;
  margin-left: 1rem;
  background-color: #D9D9D9;
  color: black;
  border-radius: 1rem;

  border: 0.1rem;
  padding: 0.5rem 4rem 1.5rem 1rem;
}

.buttonsession{
  margin-right: 1rem;

  background-color: #D9D9D9;
  color: black;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.5rem 1rem 1.5rem 0;
}

.inputbutton{
  padding: 0.5rem;
}

.container{



  margin-top: 5rem;
  margin-left:10rem;
  margin-right: 10rem;
}

.containercard{
  display: grid;
  grid-template-columns: 0.8fr 0.5fr 1fr; /* Define columns */
}

.profileImage{
  margin-left:3rem;
  border-radius: 68px;
  grid-column: 1 / span 1;

  width:88%

}

.profiledescription {
  grid-column: 2 / span 1;

  width: 100%;
}

.containerinformation{

  width: 70%;
  margin-top: 3rem;
  margin-left: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  border-radius: 1.5rem;
  border: 2px solid;
  border-color: black;


}

.containerinformation h3{
  color: black;
}

.titleinformation{
  margin-left: 3rem;
  margin-top: 0.5rem;

}

.titleinformation h1{
  color: black;
}

.profiledescriptionv2{


}

.containerinformationv2{

  min-height: 50px;
  margin-top:6.8rem;

  border: 2px solid;
  border-radius: 1.5rem;
  border-color: black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}

.containerinformationv2 h3{
  color:black;

}

.buttonprofile{
  margin-top: 1rem;
  margin-left: 3rem;
  background-color: #454545;
  color: white;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.3rem 2rem 0.5rem 2rem;
}


</style>
