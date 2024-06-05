<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from '@/Components/Logo.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/register">Sing Up</RouterLink>
        <RouterLink to="/login">Sing In</RouterLink>
        <RouterLink to="/Recommendations">Recommendations</RouterLink>
        <RouterLink to="/myProfile">My Profile</RouterLink>
        <RouterLink to="/vehicles">See Vehicles</RouterLink>
        <RouterLink to="/RentVehicle">Rent Vehicle</RouterLink>
        <RouterLink to="/PlansOwner">Plans</RouterLink>
        <RouterLink to="/OrderOwner">Order Owner</RouterLink>
        <RouterLink to="/OwnerProfileView">Owner Profile</RouterLink>
        <RouterLink to="/VehicleRegisterOwner">Vehicle registration</RouterLink>
        <RouterLink to="/OwnerViewVehicles">Owner: See Vehicle</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
.wrapper {
  max-width: 1700px;
  margin: 10px auto 90px auto;
  padding: 0 15px;
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
}

nav a:hover {
  background-color: #a5bdabcb;
}

/* Estilos para el menú responsive */
@media screen and (max-width: 600px) {
  nav a {
    float: none;
    display: block;
    text-align: center;
  }
}
</style>