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
        <RouterLink to="/MyOwnerProfile">Owner Profile</RouterLink>
        <RouterLink to="/PlansOwner">Plans Owner</RouterLink>
        <RouterLink to="/OrderOwner">Order Owner</RouterLink>
        <RouterLink to="VehicleRegisterOwner">Vehicle Register Owner</RouterLink>
        <RouterLink to="/UserFilterView">Filter User View</RouterLink>
        <RouterLink to="/header">Home View</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>

</style>