<template>
  <div class="register">
    <div class="login__socials">
      <h1>Regístrate</h1>
      <div>
        <button class="social-button2">
          <img class="social-logo3" src="https://i.ibb.co/PgjqCyd/image.png" alt="Google Logo"/> Regístrate con Google</button>
        <button class="social-button">
        <img class="social-logo2" src="https://i.ibb.co/H4Zc1QR/image.png" alt="Microsoft Logo"/> Regístrate con Microsoft</button>
      </div>
    </div>
    <form class="form">
      <div class="form__group">
        <div class="form__group__top">
          <input id="name" type="text" placeholder="Nombres"/>
          <input id="lastName" type="text" placeholder="Apellidos"/>
        </div>
        <div class="form__group__bot">
          <input id="email" type="email" placeholder="Correo electrónico"/>
        </div>
      </div>
      <div class="form__group">
        <div class="form__group__top">
          <input id="password" type="password" placeholder="Contraseña"/>
          <input id="passwordConfirm" type="password" placeholder="Confirmación"/>
        </div>
        <div class="form__group__bot">
          <input id="dob" type="date" placeholder="Fecha de nacimiento"/>
          <label>DD/MM/AAAA</label>
        </div>
      </div>
      <div class="form__group">
        <div class="form__group__top">
         <div class="gender-select">
          <input type="radio" id="masculino"/>
          <label for="masculino" id="masculino">Masculino</label>
         </div>
         <div class="gender-select">
          <input type="radio" id="femenino" />
          <label for="female" id="femenino">Femenino</label>
         </div>
        </div>
      </div>
      <button type="submit">Crear cuenta</button>
    </form>
   <span>
    ¿Tienes una cuenta? <a href="/login">Inicia sesión</a>
   </span>
  </div>
</template>

<style>
 .register {
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
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    width: 420px;
  }

  .form__group {
    display: flex;
    gap: .8rem;
    width: 100%;
    flex-direction: column;
  }

  .form__group__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .form__group__top:last-child {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .form__group__bot {
    display: flex;
    gap: .8rem;
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

  .form__group__bot label {
    font-size: small;
    text-decoration: underline;
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

  .social-logo3 {
    width: 21px;
    float: left;
    vertical-align: middle;
  }

</style>