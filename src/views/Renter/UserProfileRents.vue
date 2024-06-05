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
          <h4>Nombre: {{ usuarios[1].nombre }}</h4>
          <h4>Vehículos: {{ usuarios[1].Vehículos }}</h4>
          <h4>Ubicación: {{ usuarios[1].ubicación }}</h4>
          <h4>Teléfono: {{ usuarios[1].telefono }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 50%;
  height: auto;
  margin: 20px auto;
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
  padding-top: 100px;
}

@media (max-width: 768px) {
  .contenedor {
    flex-direction: column;
    margin-left: 0;
  }
}

.contenedor2 {
  display: grid;
  grid-template-columns: repeat(1, 2fr);
}

.margen {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 8px;
}

.margen h4 {
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
