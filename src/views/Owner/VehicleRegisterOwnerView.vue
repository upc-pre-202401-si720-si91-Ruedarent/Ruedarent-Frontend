<template>

  <div class="contenedor">
    <div class="imagen">
      <img src="https://i.ibb.co/dkWqH5V/image.png" alt="Tu nombre">
    </div>
    <div class="contenedor2">
        <h1>Mi Vehículo</h1>
        <div class="margen">
          <div>
            <h4>Tipo de vehículo:</h4>
            <h4>Marca:</h4>
            <h4>Estado:</h4>
            <h4>Color:</h4>
            <h4>Teléfono:</h4>
          </div>
          <ul>
            <li>
              <label for="nombre"></label>
              <input type="text" id="nombre" name="nombre" value="">
            </li>
            <li>
              <label for="marca"></label>
              <input type="text" id="marca" name="marca" value="">
            </li>
            <li>
              <label for="estado"></label>
              <input type="text" id="estado" name="estado" value="">
            </li>
            <li>
              <label for="color"></label>
              <input type="text" id="color" name="color" value="">
            </li>
            <li>
              <label for="telefono"></label>
              <input type="id" id="telefono" name="telefono" value="">
            </li>
              <button type="submit">¡Lo quiero!</button>
          </ul>
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

.margen ul {
  list-style: none;
  margin-top: 20px;
}

.margen ul li {
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