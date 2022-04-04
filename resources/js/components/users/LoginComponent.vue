<template>
  <div class="page page--login" data-page="login">
    
    <div class="login">
      <div class="login__content">
        <h2 class="login__title">Welcome back</h2>
        <p class="login__text">Login to your account</p>
        <div class="login-form">
          <form id="LoginForm" method="post" action="main.html">
            <div class="login-form__row">
              <label class="login-form__label">Username</label>
              <input
                type="text"
                name="Username"
                value=""
                class="login-form__input required"
              />
            </div>
            <div class="login-form__row">
              <label class="login-form__label">Password</label>
              <input
                type="password"
                name="password"
                value=""
                class="login-form__input required"
              />
            </div>
            <div class="login-form__row">
              <input
                type="submit"
                name="submit"
                class="login-form__submit button button--main button--full"
                id="submit"
                value="SIGN IN"
              />
            </div>
          </form>
          <div class="login-form__forgot-pass">
            <router-link to="/forgot-password">Forgot Password?</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import HeaderComponent from './../includes/HeaderComponent.vue'
export default {
  name: "Login",
  components: { 
    HeaderComponent 
  }
};
</script>