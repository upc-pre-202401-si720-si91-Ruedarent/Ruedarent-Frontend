<template>

  <main>
    <section class="informacion-personal">
      <h2></h2>
      <div class="contenedor">
        <div class="imagen">
          <img src="https://i.ibb.co/SP4SsNP/57682dabe58e56826cf84d307efb5495-removebg-preview.png" alt="Tu nombre">
        </div>
        <div class="texto">
          <ul>
            <h2>Mi Perfil</h2>
            <li>
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" value="">
            </li>
            <li>
              <label for="busqueda">¿Qué busco?</label>
              <input type="text" id="busqueda" name="busqueda" value="">
            </li>
            <li>
              <label for="ubicacion">Ubicación:</label>
              <input type="text" id="ubicacion" name="ubicacion" value="">
            </li>
            <li>
              <label for="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" value="">
            </li>
            <button type="submit">Ver más</button>
          </ul>
        </div>
      </div>
    </section>
  </main>

</template>

  <style>
.informacion-personal .imagen img {
  border-radius: 80%;
  width:80%;
}

.informacion-personal ul {
  list-style: none;
  padding: 0;
}

.informacion-personal li {
  margin-bottom: 10px;
}

.informacion-personal label {
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .informacion-personal {
    flex-direction: column; 
  }

}
.contenedor {
  display: flex;
}
</style>