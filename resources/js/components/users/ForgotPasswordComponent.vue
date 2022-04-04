<template>
  <div class="page page--login" data-page="login">
    
    <HeaderComponent layout="login"/>

    <div class="login">
      <div class="login__content">
        <h2 class="login__title">Don't worry</h2>
        <p class="login__text">Will send the new password by email</p>
        <div class="login-form">
          <form id="LoginForm" method="post" action="main.html">
            <div class="login-form__row">
              <label class="login-form__label">Email</label>
              <input
                type="text"
                name="email"
                value=""
                class="login-form__input required email"
              />
            </div>
            <div class="login-form__row">
              <input
                type="submit"
                name="submit"
                class="login-form__submit button button--main button--full"
                id="submit"
                value="RESEND PASSWORD"
              />
            </div>
          </form>
          <div class="login-form__bottom">
            <p>
              Check your email and follow the instructions to reset your
              password.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import HeaderComponent from './../includes/HeaderComponent.vue'
export default {
  // name: "Login",
  components: { 
    HeaderComponent 
  }
};
</script>