<script>
import profileImage from "@/assets/vehicleimage.png";


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


<template>
  <div class="container">


    <img class="arrowback"  src="../assets/arrowrent.png" alt="Arrow Rent" />


  </div>


  <div class="Rent">
    <pv-card class="card">
      <template #content>
        <div class="containerent">


          <div class="profileImage">
            <img src="https://i.ibb.co/cNxVqBL/image.png" alt="">
            <pv-image class="profileImage" :src="profileImage"  alt="profile Image" width="350" preview />
          </div>


          <div class="rentdescription">


            <div class="titleinformation">
              <h1>Mi Perfil</h1>
            </div>
            <div class="containersinformation">
              <div class="container1information">
                <div class="categories">
                  <p>Nombre:</p>
                  <p>Vehículos:</p>
                  <p>Ubicación:</p>
                  <p>Teléfono:</p>
                </div>
              </div>
              <div class="containerv2information">
                <p>información</p>
                <p>información</p>
                <p>información</p>
                <p>información</p>
              </div>
            </div>
            <pv-button class="buttonwpp" label="Contactar" ><p>Ver más</p></pv-button>
          </div>




        </div>
      </template>
    </pv-card>


  </div>


</template>


<style>
.menubar {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 1rem 0.5rem 0.1rem 1.5rem;
  background-color: #D9D9D9;
  border-radius: 0rem;
  overflow-x: auto; 
}

.ruedarenticon,
.profileicon {
  grid-column: 1;
}

.buttonheader,
.buttonsession {
  grid-column: 2;
}

.ruedarenticon {
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  margin-left: 1rem;
}

.profileicon {
  width: 2rem;
  height: 2rem;
  margin-right: 0.3rem;
  margin-left: 1rem;
  margin-bottom: 0.7rem;
}

.buttonheader {
  margin-right: 1rem;
  margin-left: 1rem;
  background-color: #D9D9D9;
  color: black;
  border-radius: 1rem;
  border: 1rem;
  padding: 0.5rem 4rem 1.5rem 1rem;
}

.buttonsession {
  margin-right: 1rem;
  background-color: #D9D9D9;
  color: black;
  border-radius: 0.5rem;
  border: 1rem;
  padding: 0.5rem 1rem 1.5rem 0;
}

.inputbutton {
  padding: 0.5rem;
}

.arrowback {
  width: 2.5rem;
  height: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transform: rotate(180deg);
}

.containersinformation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem;
}

.container {
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display:flex;
  align-items: center;
}

.Rent {
  justify-content: center;
  display:flex;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  margin-left:10rem;
  margin-right: 10rem;
  margin-bottom: 5%;
}

.containerent {
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: black;
  width: 1000px;
  max-width: calc(100% - 20%);
}

.titleinformation h1 {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
  color: black;
}

.container1information {
  flex:1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  width: 40%;
  border: solid;
  border-radius: 1rem;
  max-width: 50%;
  margin: 0.5rem;
}

.containerv2information {
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  width: 50%;
  border: solid;
  border-radius: 1rem;
  margin: auto;
  margin-top: 5px;
}

.containerv2information p {
  line-height: 0.5;
}

.buttonwpp {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 18rem;
  margin-right: 1rem;
  background-color: #01C880;
  color: black;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.1rem 1rem 0.1rem 1rem;
}

.buttonwpp:hover {
  transform: scale(1.1);
}
</style>