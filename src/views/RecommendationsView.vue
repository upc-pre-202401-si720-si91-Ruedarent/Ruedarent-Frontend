<template>
  <div class="container" style="margin-top: 40px;">
    <h2 class="titlecontainer">Lo más destacado</h2>
  </div>

  <div class="card">
    <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" :showItemNavigators="true" :showThumbnails="false" :showIndicators="true" containerStyle="max-width: 640px; margin: auto;">
      <template #item="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 100%" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 100px; height: auto;" />
      </template>
    </Galleria>
    <div class="buttoncontainer text-center"> 
      <pv-button class="btncontainer"> ‎ Ver más</pv-button>
    </div>
  </div>
</template>

<script>
import Galleria from 'primevue/galleria';

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
          src: 'https://i.ibb.co/wYYBQSL/image.png',
          alt: 'Bicicleta',
        },
        {
          id: 5,
          src: 'https://i.ibb.co/0DHvnnn/image.png',
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
        }
      ]
    };
  }
}
</script>

<style>
.ruedarenticon,
.profileicon {
  grid-column: 4;
}

.buttonheader,
.buttonsession {
  grid-column: 4;
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
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.5rem 4rem 1.5rem 1rem;
}

.buttonsession {
  margin-right: 1rem;
  border-radius: 1rem;
  border: 0.1rem;
  padding: 0.5rem 1rem 1.5rem 0;
}

.inputbutton {
  padding: 0.5rem;
}

.container {
  width: 100%;
  justify-content: space-between;
}

img {
  width: 120px;
  border-radius: 1rem;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
}

.card {
  width: 320px;
  margin: auto;
  margin-bottom: 100px;
  border: 1px solid white;
  padding: 30px;
  background-color: white;
  cursor: pointer;
}

.p-galleria-item-nav {
  color: black;
  top: 50%;
  transform: translateY(-50);
  z-index: 999;
}

.p-galleria {
  background-color: #cccccc;
  border-radius: 1rem;
}

.btncontainer {
  margin-top: 1rem;
  margin-right: 1rem;
  background: #34D399;
  border: none;
  padding: 8px 8px;
  border: none;
  border-radius: 5px;
  width: 80px;
  cursor: pointer;
}

.buttoncontainer {
  text-align: center; 
}

.btncontainer:hover {
  transform: scale(1.1);
}

</style>