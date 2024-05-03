<template>

    <div class="contenedor">
      <div class="imagen">
        <img src="https://i.ibb.co/SP4SsNP/57682dabe58e56826cf84d307efb5495-removebg-preview.png" alt="Tu nombre">
      </div>
      <div class="contenedor2">
          <h1>Mi Perfil</h1>
          <div class="margen">
            <div>
              <h4>Nombre:</h4>
              <h4>¿Qué busco?</h4>
              <h4>Ubicación:</h4>
              <h4>Teléfono:</h4>
            </div>
            <ul>
              <li>
                <label for="nombre"></label>
                <input type="text" id="nombre" name="nombre" value="">
              </li>
              <li>
                <label for="busqueda"></label>
                <input type="text" id="busqueda" name="busqueda" value="">
              </li>
              <li>
                <label for="ubicacion"></label>
                <input type="text" id="ubicacion" name="ubicacion" value="">
              </li>
              <li>
                <label for="telefono"></label>
                <input type="tel" id="telefono" name="telefono" value="">
              </li>
                <button type="submit">Ver más</button>
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