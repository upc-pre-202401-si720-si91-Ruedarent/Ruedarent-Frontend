<script>
  import { obtenerUsuarios } from '@/shared/services/http-common.js';
  
  export default {
    data() {
      return {
        usuarios: []
      };
    },
    async created() {   
      this.usuarios = await obtenerUsuarios();
    }
  };

</script>
<template>
  <div class="contenedor">
    <div v-if="usuarios.length > 0" class="imagen">
      <img src="https://i.ibb.co/SP4SsNP/57682dabe58e56826cf84d307efb5495-removebg-preview.png" alt="Tu nombre">
    </div>
    <div class="contenedor2">
        <h1>Mi Perfil</h1>
        <div class="margen">
          <div v-if="usuarios.length > 0">
            <h4>Nombre: </h4>
            <h4>Vehículos: </h4>
            <h4>Ubicación: </h4>
            <h4>Teléfono: </h4>
          </div>
          <div v-if="usuarios.length > 0" class="lista">
            <p> {{ usuarios[1].nombre }}</p>
            <p> {{ usuarios[1].Vehículos }}</p>
            <p>{{ usuarios[1].ubicación }}</p>
            <p>{{ usuarios[1].telefono }}</p>
          </div>
        </div>
    </div>
  </div>

</template>

<style>

img {
  width: 50%;
  height: auto;
  margin: 20px auto;
  display: flex;
}

@media (max-width: 768px) {
  img {
    width: 40%;
    margin: 10px auto;
  }
}

.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -250px;
  padding-top: 100px;
}

.contenedor2 {
  display: grid;
  grid-template-columns: repeat(1, 2fr);
}

.margen {
  display: flex;
}

.margen .lista{
  list-style: none;
  margin-top: 8px;
}

.margen p {
  margin-bottom: 21px;
}

button[type="submit"] {
  background-color: #34D399;
  color: white;
  padding: 8px 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style> 