<template>
  <HeaderComponent layout="login" />
  <!-- App Capsule -->
  <div id="appCapsule">
    <div class="login-form">
      <div class="section">
        <h1>Reset Password</h1>
        <h4>Type your email to reset your password</h4>
      </div>
      <div class="section mt-2 mb-5">
        <form action="app-pages.html">
          <div class="form-group boxed">
            <div class="input-wrapper">
              <input
                type="email"
                class="form-control"
                id="name1"
                placeholder="Email address"
              />
              <i class="clear-input">
                <ion-icon name="close-circle"></ion-icon>
              </i>
            </div>
          </div>

          <div class="form-button-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg">
              Reset
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
  // name: "Login",
  components: {
    HeaderComponent,
  },
};
</script>