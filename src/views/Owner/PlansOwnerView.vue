<script></script>

<template>
  <div class="flex items-center m-2">
    <h1 class="titlecontainer">
      Explora nuestros planes<br />
      para ser propietario. Únete ahora!
    </h1>
  </div>

  <div class="plans">
    <div class="card-container-wrapper">
      <div class="card-container">
        <div class="card">
          <h1 class="cardtext">Plan 1</h1>
          <ul>
            <li>Plan Gratuito</li>
            <li>S/. 0 por 1 mes</li>
            <li>Después, S/. 5 por cada alquiler</li>
            <li>Alquila 3 vehículos</li>
          </ul>
          <div class="buttoncontainer">
            <pv-button class="btncontainer">Lo quiero</pv-button>
          </div>
        </div>

        <div class="card">
          <h2 class="cardtext">Plan 2</h2>
          <ul>
            <li>Plan Standard</li>
            <li>S/. 10 por 1 mes</li>
            <li>Después, S/. 6 por cada alquiler</li>
            <li>Alquila 50 vehículos</li>
          </ul>
          <div class="buttoncontainer">
            <pv-button class="btncontainer">Lo quiero</pv-button>
          </div>
        </div>

        <div class="card">
          <h2 class="cardtext">Plan 3</h2>
          <ul>
            <li>Plan Entusiasta</li>
            <li>Precio: S/. 21/mes</li>
            <li>Beneficios: Sin comisiones.</li>
            <li>Alquila vehículos ilimitados.</li>
          </ul>

          <div class="buttoncontainer">
            <pv-button class="btncontainer">Lo quiero</pv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menubar {
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: grid;
  grid-template-columns: auto 1fr auto; /* Define columns */
  align-items: center;
  padding: 0.1rem 0.5rem 0.1rem 1.5rem;
  background-color: #d9d9d9;
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
  background-color: #d9d9d9;
  color: black;
  border-radius: 1rem;

  border: 0.1rem;
  padding: 0.5rem 4rem 1.5rem 1rem;
}

.buttonsession {
  margin-right: 1rem;

  background-color: #d9d9d9;
  color: black;
  border-radius: 1rem;
  border: 0.1rem;
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

.containerplans {
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;

  display: flex;
  align-items: center;
}

.titlecontainer {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
  color: black;

  padding: 1rem;
  width: 100%;
  display: block;
  margin: 0 auto 2rem;
}

.card-container-wrapper {
  display: flex;
  justify-content: center;
}

.card-container {
  display: flex;
  justify-content: center;
}

.card {
  background-color: #ffffff;
  border: 1px solid #808080;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 6rem 2rem 0;

  transition: box-shadow 0.3s, transform 0.3s;
  margin-right: 1rem;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.4);
}

.card:hover .btncontainer {
  background: linear-gradient(to top, #514d54, #4ae49a);
}
.cardtext {
  font-size: 15px;
  padding: 1rem;
  color: gray;
}

.buttoncontainer {
  justify-content: center;
  display: flex;
}

.btncontainer {
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 5rem;
  background-color: #888888;
  color: white;
  border-radius: 1rem;

  border: 0.1rem;
}
</style>
