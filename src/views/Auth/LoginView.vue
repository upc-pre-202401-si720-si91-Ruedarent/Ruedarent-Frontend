<template>
  <div class="login">
    <div class="login__socials">
      <h1>Inicia sesión</h1>
      <div>
        <button class="social-button2">
          <img class="social-logo3" src="https://i.ibb.co/PgjqCyd/image.png" alt="Google Logo"/> Iniciar sesión con Google
        </button>
        <button class="social-button">
        <img class="social-logo2" src="https://i.ibb.co/H4Zc1QR/image.png" alt="Microsoft Logo"/> Iniciar sesión con Microsoft
        </button>
      </div>
    </div>
    <form class="form">
      <div class="form__group">
        <label for="email">Correo electrónico</label>
        <input id="email" type="email" placeholder="Correo electrónico"/>
      </div>
      <div class="form__group">
        <label for="contraseña">Contraseña</label>
        <input type="contraseña" placeholder="Contraseña"/>
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
   <span>
    ¿No tienes una cuenta? <a href="/register">Regístrate</a>
   </span>
  </div>
</template>

<style>
 .login {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }

  .login__socials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login__socials div {
    display: flex;
    flex-direction: column;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 1rem;
    width: 420px;
  }

  .form__group {
    display: flex;
    gap: .2rem;
    flex-direction: column;
  }

  input {
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    border: 1px solid #333;
  } 

  button {
    padding: .5rem;
    border: none;
    margin-top: .5rem;
    border-radius: 5px;
    cursor: pointer;
    background-color: #34D399;
    color: white;
  }

  button:hover {
    background-color: #53A37B;
  }

  span a {
    color: #34D399
  }

  .social-logo2 {
    width: 17px;
    text-align: center;
    vertical-align: middle;
  }
  
  .social-button {
    text-align: center;
  }

 .social-logo3 {
   width: 21px;
   float: left;
   vertical-align: middle;
 }

</style>