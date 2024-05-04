<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/Recommendations">Recommendations</RouterLink>
        <RouterLink to="/myProfile">My Profile</RouterLink>
        <RouterLink to="/vehicles">See Vehicles</RouterLink>
        <RouterLink to="/RentVehicle">Rent Vehicle</RouterLink>
        <RouterLink to="/OwnerProfileView">Perfil Propietario</RouterLink>
        <RouterLink to="/PlansOwner">Plans Owner</RouterLink>
        <RouterLink to="/OrderOwner">Order Owner</RouterLink>
        <RouterLink to="/VehicleRegisterOwner">Owner: Registro vehículos</RouterLink>
        <RouterLink to="/OwnerViewVehicles">Owner: Ver vehículos</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
.wrapper {
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 20px;
}

nav {
  background-color: #D9D9D9;
  overflow: hidden;
  border-radius: 50px;
  font-size: 0.99rem;
}

nav a {
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 30px 25px;
  text-decoration: none;
  text-align: center;
}

nav a:hover {
  background-color: #a5bdabcb;
}

/* Estilos para el menú responsive */
@media screen and (max-width: 600px) {
  nav a {
    float: none;
    display: block;
    text-align: left;
    text-align: center;
  }
}
</style>