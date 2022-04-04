<template>
  <HeaderComponent layout="main" title="Sản phẩm đang đảm nhận" search="1" />

  <div id="search" class="appHeader show" v-if="false">
    <form class="search-form" style="padding:10px">
      <div class="form-group mb-1">
        <input type="text" class="form-control" placeholder="Nhập tên sản phẩm" />
      </div>
      <div class="form-group mb-1">
        <select class="form-control">
          <option>Quảng Trị</option>
        </select>
      </div>
      <div class="form-group ">
        <button type="button" class="btn btn-sm btn-dark float-start mb-1" >
          <ion-icon name="close"></ion-icon>
        </button>
        <button type="button" class="btn btn-sm btn-primary float-end mb-1" >
          <ion-icon name="paper-plane-outline"></ion-icon>
        </button>
      </div>
    </form>
  </div>

  <div id="appCapsule">
    <div class="section mt-2">
      <!-- item -->
      <div class="card cart-item mb-2">
        <div class="card-body">
          <div class="in">
            
            <div class="text">
              <h3 class="title">CĂN HỘ SƠN TRÀ OCEAN VIEW ĐÀ NẴNG</h3>
              <p class="detail">Quận Sơn Trà, Đà Nẵng </p>
              <p class="detail">Quận Sơn Trà, Đà Nẵng </p>
              <strong class="price">Niêm yết: 1,5 tỷ - 2,5 tỷ</strong>
            </div>
          </div>
          <div class="cart-item-footer">
           <strong class="price">Giá bán: 1,5 tỷ - 2,5 tỷ</strong>
           <router-link :to="{ name: 'products.show', params: {id:1} }" class="btn btn-primary btn-sm" >Chi tiết</router-link>
          </div>
        </div>
      </div>
      <!-- * item -->

      

    </div>


    <div class="section mb-2">
      <a href="#" class="btn btn-primary btn-block">Xem thêm</a>
    </div>
  </div>
  <!-- * App Capsule -->
  <FooterComponent layout="main" />
</template>

<script>
import HeaderComponent from "../includes/HeaderComponent.vue";
import FooterComponent from "../includes/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
</style>