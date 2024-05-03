<script>
import Galleria from 'primevue/galleria';
import profileImage from "@/assets/profileimage.png";

export default {
  components: {
    Galleria
  },
  data() {
    return {
      checked: false,
      images: [
        {
          id: 1,
          src: 'https://i.ibb.co/jZ4dBdT/image.png',
          alt: 'Scooter',
        },
        {
          id: 2,
          src: 'https://i.ibb.co/C5G2hXP/image.png',
          alt: 'Scooter',
        },
        {
          id: 3,
          src: 'https://i.ibb.co/7z1VtND/image.png',
          alt: 'Bicicleta',
        },
        {
          id: 5,
          src: 'https://i.ibb.co/fDWbxv6/image.png',
          alt: 'Patín',
        },

      ],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          breakpointNumVisible: 3
        },
        {
          breakpoint: '768px',
          numVisible: 2,
          breakpointNumVisible: 2
        },
        {
          breakpoint: '560px',
          numVisible: 1,
          breakpointNumVisible: 1
        } ]
    };
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
    <h1 class="titlecontainer"> Lo más destacado </h1>
  </div>

  <div class="card">
    <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" :showItemNavigators="true" :showThumbnails="false" :showIndicators="true" containerStyle="max-width: 640px; margin: auto;" >
      <template #item="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 100%" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 100px; height: auto;" />
      </template>
    </Galleria>
    <div class="buttoncontainer">
      <pv-button class="btncontainer">Ver más</pv-button>
    </div>

  </div>

</template>

<style>


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
  width: 100%;
  justify-content: space-between;
}
img{
  width: 120px;
  border-radius: 1rem;
}

h1 {
  text-align: center;
  color: black;
  margin-bottom: 50px;
  font-size: 2.2rem;
}

.card {
  width: 500px;
  max-width: calc(100% - 20%);
  margin: 0 auto;
  margin-bottom: 100px;
  border: 3px solid #ccc;
  padding: 50px;
  border-radius: 20px;
  background-color: #ECE9F1;
}

.p-galleria-item-nav {
  color: black;
}

.p-galleria{
  background-color: #cccccc;
  border-radius: 1rem;
}

.btncontainer{
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 17rem;
  background-color: #454545;
  color: white;
  border-radius: 1rem;
  border: 0.1rem;
  transition: transform 0.1s ease;
}
.buttoncontainer:hover {
  transform: scale(1.1);
}

</style>