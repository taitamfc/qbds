<template>
  <!-- App Capsule -->
  <div id="appCapsule" class="pt-0">
    <div class="login-form mt-1">
      <div class="section">
        <img
          src="mobile/assets/img/sample/photo/vector4.png"
          alt="image"
          class="form-image"
        />
      </div>
      <div class="section mt-1">
        <h1>Get started</h1>
        <h4>Fill the form to log in</h4>
      </div>
      <div class="section mt-1 mb-5">
        <form action="app-pages.html">
          <div class="form-group boxed">
            <div class="input-wrapper">
              <input
                type="email"
                class="form-control"
                id="email1"
                placeholder="Email address"
              />
              <i class="clear-input">
                <ion-icon name="close-circle"></ion-icon>
              </i>
            </div>
          </div>

          <div class="form-group boxed">
            <div class="input-wrapper">
              <input
                type="password"
                class="form-control"
                id="password1"
                placeholder="Password"
                autocomplete="off"
              />
              <i class="clear-input">
                <ion-icon name="close-circle"></ion-icon>
              </i>
            </div>
          </div>

          <div class="form-links mt-2">
            <div>
              
            </div>
            <div>
              <router-link :to="{ name: 'users.forgot-password', params: {}}" class="text-muted">
                Forgot Password?
              </router-link>
            </div>
          </div>

          <div class="form-button-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- * App Capsule -->
</template>
 
<script>
import HeaderComponent from "./../includes/HeaderComponent.vue";
export default {
  name: "Login",
  components: {
    HeaderComponent,
  },
};
</script>