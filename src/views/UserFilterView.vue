<script>
import profileImage from "@/assets/profileimage.png";


export default {
  name: "UserFilterView",
  components: {},
  data() {
    return {
      checked: false,
      profileImage
    }
  }
}
</script>

<template>

  <header>
    <pv-menubar class="menubar">
      <template #start>
        <img class="ruedarenticon" src="../assets/ruedarenticon.png" alt="RuedaRent Logo" />
        <router-link to="/login"> <pv-button class="buttonheader" label="Recomendaciones"/> </router-link>
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


  <div class="containerplans">

    <img class="arrowback"  src="../assets/arrowrent.png" alt="Arrow Rent" />

  </div>

  <div class="filter-columns ">

    <div class="filterpart1">

      <div class="headerfilterpart1">
        <h1 style="color: black">Filtro</h1>
      </div>

      <div class="contentfilterpart1">

        <pv-button class="buttoncontent1">Eco X</pv-button>
        <pv-button class="buttoncontent1">Motos Electricas</pv-button>
        <pv-button class="buttoncontent1">Económico</pv-button>
        <pv-button class="buttoncontent1">Eléctrico X</pv-button>
        <pv-button class="buttoncontent1">Popular</pv-button>
        <pv-button class="buttoncontent1">Monopatines</pv-button>
        <pv-button class="buttoncontent1">Bicicletas X</pv-button>
        <pv-button class="buttoncontent1">Patines electricos</pv-button>
        <pv-button class="buttoncontent1">Scooter X</pv-button>
        <pv-button class="buttoncontent1">Nuevo X</pv-button>


      </div>


    </div>

    <div class="filterpart2">
      <div class="headerfilterpart1">
        <h1 style="color: white">Vehiculos</h1>

      </div>

      <div class="contentfilterpart2">

        <pv-button class="buttoncontent2">
          <header>scooter</header>
          <img class="imgcontentbutton" src="../assets/filterbike1.png" alt="RuedaRent Logo" />
          <footer>Eco Electrico</footer>
        </pv-button>
        <pv-button class="buttoncontent2">
          <header>Bicicleta</header>
          <img class="imgcontentbutton" src="../assets/filterbike2.png" alt="RuedaRent Logo" />
          <footer>Eco Nuevo</footer>
        </pv-button>
        <pv-button class="buttoncontent2">
          <header>scooter</header>
          <img class="imgcontentbutton" src="../assets/filterbike3.png" alt="RuedaRent Logo" />
          <footer>Eco Electrico</footer>
        </pv-button>
        <pv-button class="buttoncontent2">
          <header>scooter</header>
          <img class="imgcontentbutton" src="../assets/filterbike4.png" alt="RuedaRent Logo" />
          <footer>Eco Nuevo</footer>
        </pv-button>
        <pv-button class="buttoncontent2">
          <header>scooter</header>
          <img class="imgcontentbutton" src="../assets/filterbike5.png" alt="RuedaRent Logo" />
          <footer>Eco Electrico</footer>
        </pv-button>
        <pv-button class="buttoncontent2">
          <header>Bicicleta</header>
          <img class="imgcontentbutton" src="../assets/bikeicon.png" alt="RuedaRent Logo" />
          <footer>Eco Nuevo</footer>
        </pv-button>


      </div>

    </div>

  </div>


</template>



<style scoped>

.contenedor{
  display:grid;
  grid-template-columns: 0.5fr 1fr; /* Define columns */
}


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


.arrowback{
  width: 2.5rem;
  height: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transform: rotate(180deg);
}

.containerplans{
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;

  display:flex;
  align-items: center;

}

.filter-columns{
  grid-template-columns: 0.8fr 1fr;
  grid-gap: 1rem;


  display: grid;
  margin-left:10rem;
  margin-right: 10rem;


}

.filterpart1{
  grid-column:1;

  display: grid;
  grid-template-rows: 0.3fr 1fr;

}

.filterpart1 h1{
  color: black;
  justify-content: start;
  margin-left: 1rem;
  grid-row: 1;

}

.contentfilterpart1{
  grid-row: 2;

  border: solid;
  border-radius: 3rem;
  background-color: #D9D9D9;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

}

.buttoncontent1{
  background-color: #454545;
  border-color: #454545;
  color: white;
  border-radius: 1rem;
  margin: 1rem 1rem 1rem 1rem;
  padding: 1rem 1rem 1rem 1rem;


}

.buttoncontent1:hover{
  background-color: #D9D9D9;

  border-color: #D9D9D9;
}

.headerfilterpart1{


}



.filterpart2{
  grid-column: 2;



}

.buttoncontent2{
  background-color: #D9D9D9;
  border-color: #454545;
  color: black;
  border-radius: 1rem;
  margin: 1rem 1rem 1rem 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;

  /* Añade las siguientes líneas */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.imgcontentbutton{
  width: 9rem;
  height: 6rem;
  border-radius: 2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color:black;

}

.contentfilterpart2{
  grid-row: 2;
  margin-top:2rem;

  color:black;
  border-radius: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr ;

}

</style>
