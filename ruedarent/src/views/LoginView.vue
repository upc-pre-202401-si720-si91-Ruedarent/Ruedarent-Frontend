<template>
  <div class="login">
    <div class="login__socials">
      LOGO
      <h1>Inicia Sesión</h1>
      <div>
        <button>Iniciar sesión con Google</button>
        <button>Iniciar sesión con Microsoft</button>
      </div>
    </div>
    <form class="form">
      <div class="form__group">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="john@email.com" />
      </div>
      <div class="form__group">
        <label for="password">Password</label>
        <input type="password" placeholder="*********" />
      </div>
      <button type="submit">Login</button>
    </form>
   <span>
    No tienes cuenta? <a href="/register">Registrate</a>
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
</style>
