<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
        <RouterLink to="/OrderOwner">Order Owner</RouterLink>
        <RouterLink to="/PlansOwner">Plans</RouterLink>
        <RouterLink to="/OwnerProfileView">Owner Profile</RouterLink>
        <RouterLink to="/RentVehicle">Rent Vehicle</RouterLink>
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