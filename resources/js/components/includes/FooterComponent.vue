<template>
  <!-- App Bottom Menu -->
  <div class="appBottomMenu">
    <router-link :to="{ name: 'home', params: {} }" class="item" active-class="active">
      <div class="col">
        <ion-icon name="home-outline"></ion-icon>
      </div>
    </router-link>

    <router-link :to="{ name: 'products.index', params: {} }" class="item" active-class="active">
      <div class="col">
        <ion-icon name="cube-outline"></ion-icon>
      </div>
    </router-link>
    <a href="page-chat.html" class="item">
      <div class="col">
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
        <span class="badge badge-danger">5</span>
      </div>
    </a>
    <a href="app-pages.html" class="item">
      <div class="col">
        <ion-icon name="layers-outline"></ion-icon>
      </div>
    </a>
    <a href="#sidebarPanel" class="item" data-bs-toggle="offcanvas">
      <div class="col">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </a>
  </div>
  <!-- * App Bottom Menu -->
</template>

<script>
export default {};
</script>

<style>
</style>