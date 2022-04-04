<template>
  <!-- HEADER -->
  <div class="appHeader no-border transparent position-absolute" v-if="layout == 'login'">
    <div class="left">
      <a
        @click="$router.go(-1)"
        href="javascript:;"
        class="headerButton goBack"
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a>
    </div>
    <div class="pageTitle"></div>
    <!-- <div class="right">
      <a href="page-login.html" class="headerButton"> Login </a>
    </div> -->
  </div>

  <div class="appHeader bg-primary text-light" v-if="layout == 'single'">
    <div class="left">
      <a
        @click="$router.go(-1)"
        href="javascript:;"
        class="headerButton goBack"
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a>
    </div>
    <div class="pageTitle">{{ title }}</div>
    <div class="right">
      <a href="#" class="headerButton toggle-searchbox" v-if="search == 1">
        <ion-icon name="search-outline"></ion-icon>
      </a>
    </div>
  </div>

  <div class="appHeader bg-primary  text-light" v-if="layout == 'main'">
    <div class="left">
      <a
        href="#"
        class="headerButton"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarPanel"
      >
        <ion-icon name="menu-outline"></ion-icon>
      </a>
    </div>
    <div class="pageTitle">{{ title }}</div>
    <div class="right">
      <a href="#" class="headerButton toggle-searchbox" v-if="search == 1">
        <ion-icon name="search-outline"></ion-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["layout","title","search"],
};
</script>

<style>
</style>