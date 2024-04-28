<template>
  <div class="login">
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
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
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
  } 

  button {
    padding: .5rem;
    border: none;
    margin-top: .5rem;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #eeee;
  }
}
</style>
