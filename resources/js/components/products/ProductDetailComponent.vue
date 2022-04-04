<template>
  <HeaderComponent layout="single" title="Sản phẩm đang đảm nhận" search="1" />

  

  <!-- App Capsule -->
  <div id="appCapsule">
    <!-- carousel full -->
    <div class="carousel-full">
      <div class="splide__track">
        <img
          src="https://kingreal.com/wp-content/uploads/2022/02/27850a5844bdb6e3efac.jpg"
          alt="alt"
          class="imaged w-100 square"
        />
      </div>
    </div>
    <!-- * carousel full -->

    <div class="section full">
      <div class="wide-block pt-2 pb-2 product-detail-header">
        <h1 class="title">KHU ĐÔ THỊ PHỐ CHỢ ĐIỆN NAM TRUNG</h1>
        <div class="text">Thị xã Điện Bàn, Quảng Nam</div>
        <div class="text-center">
          <!-- price -->
          <div class="price">
            <div class="current-price form-control mt-2">Giá: 1 tỷ - 3 tỷ</div>
          </div>
          <!-- * price -->
        </div>
      </div>
    </div>

    <div class="section full">
      <div class="section-title">Chi tiết sản phẩm</div>
      <div class="wide-block pt-2 pb-2">
        Chủ đầu tư: Công ty cổ phần đầu tư bất động sản VGroup <br />
        Diện tích: 40.000m2<br />
        Quy mô dự án: 90m2, 100m2, 110m2, 120m2, 150m2<br />
        Pháp lý: Sổ đỏ sở hữu lâu dài<br />
        Loại hình bất động sản: Khu dân cư và khu tái định cư sẽ có hơn 500 hộ
        dân sinh sống
      </div>
    </div>

    <!-- Review -->
    <div class="section full mt-2">
      <div class="section-title">Reviews (2)</div>
      <div class="wide-block pt-2 pb-2">
        <!-- comment block -->
        <div class="comment-block">
          <!--item -->
          <div class="item">
            <div class="avatar">
              <img
                src="/mobile/assets/img/sample/avatar/avatar1.jpg"
                alt="avatar"
                class="imaged w32 rounded"
              />
            </div>
            <div class="in">
              <div class="comment-header">
                <h4 class="title">Diego Morata</h4>
                <span class="time">just now</span>
              </div>
              <div class="rate-block mb-1 mt-05">
                <ion-icon name="star" class="active"></ion-icon>
                <ion-icon name="star" class="active"></ion-icon>
                <ion-icon name="star" class="active"></ion-icon>
                <ion-icon name="star" class="active"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="comment-footer">
                <a href="#" class="comment-button">
                  <ion-icon name="happy-outline"></ion-icon>
                  Helpful (523)
                </a>
                <a href="#" class="comment-button">
                  <ion-icon name="flag-outline"></ion-icon>
                  Report
                </a>
              </div>
            </div>
          </div>
          <!-- * item -->
          <!--item -->
          <div class="item">
            <div class="avatar">
              <img
                src="/mobile/assets/img/sample/avatar/avatar4.jpg"
                alt="avatar"
                class="imaged w32 rounded"
              />
            </div>
            <div class="in">
              <div class="comment-header">
                <h4 class="title">Carmelita Marsham</h4>
                <span class="time">Sep 23, 2020</span>
              </div>
              <div class="rate-block mb-1 mt-05">
                <ion-icon name="star" class="active"></ion-icon>
                <ion-icon name="star" class="active"></ion-icon>
                <ion-icon name="star" class="active"></ion-icon>
                <ion-icon name="star" class="active"></ion-icon>
                <ion-icon name="star" class="active"></ion-icon>
              </div>
              <div class="text">
                Vivamus lobortis, orci et commodo pulvinar, eros nibh volutpat
                ipsum, in rhoncus risus dolor sed ipsum. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Donec nisi odio, dapibus
                in felis vel, lobortis iaculis quam.
              </div>
              <div class="comment-footer">
                <a href="#" class="comment-button">
                  <ion-icon name="happy-outline"></ion-icon>
                  Helpful (43)
                </a>
                <a href="#" class="comment-button">
                  <ion-icon name="flag-outline"></ion-icon>
                  Report
                </a>
              </div>
            </div>
          </div>
          <!-- * item -->
        </div>
        <!-- * comment block -->
        <div class="divider mt-3 mb-2"></div>
        <a href="#" class="btn btn-block btn-primary">Add a review</a>
      </div>
    </div>
    <!-- * Review -->
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