<script>
import { obtenerVehiculos } from '@/shared/services/http-common.js';
import { useRouter } from 'vue-router';
import ButtonSelect from '@/Components/Button.vue';

export default {
  data() {
    return {
      vehicles: []
    };
  },
  async created() {
    this.vehicles = await obtenerVehiculos();
  },
  components: {
    ButtonSelect // Corregir el nombre del componente
  },
  methods: {
    handleButtonClick() {
      // Utilizar this.$router en lugar de router
      this.$router.push('/RentVehicle');
    }
  },
  setup() {
    const router = useRouter(); // Inicializar router dentro de setup
    return { router };
  }
};
</script>

<template>
    <div class="container">
      <h1>Vehículos</h1>
  
      <div class="cards">
        <!-- Iterar sobre los vehículos obtenidos de la API -->
        <div class="card" v-for="vehicle in vehicles" :key="vehicle.id">
          <img :src="vehicle.image" :alt="vehicle.tipo">
          <h2>{{ vehicle.tipo }}</h2>
          <p>{{ vehicle.caracteristicas }}</p>
          <ButtonSelect @click="handleButtonClick"/>
        </div>
      </div>
    </div>

</template>

<style scoped>

.container {
padding: 20px;
margin: 0 auto;
}

h1 {
text-align: center;
color: #00BD7E;
margin-bottom: 20px;
font-size: 2.2rem;
}

.cards {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

.card {
width: calc(33% - 20px); /* Responsive width based on percentage */
border: 3px solid #ccc;
margin-bottom: 20px;
padding: 15px;
border-radius: 20px;
}
.card img {
border-radius: 20px;
}

/* Added media query for smaller screens */
@media (max-width: 768px) {
.card {
    width: calc(50% - 20px);
  }
}

.card img {
width: 100%;
object-fit: cover;
}

.card h2 {
margin: 10px 0;
}

.card p {
margin-bottom: 0;
}

</style>
