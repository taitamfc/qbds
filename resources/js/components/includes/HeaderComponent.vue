<template>
  <!-- HEADER -->
    <header class="header header--fixed" v-if="layout == 'login'">
      <div class="header__inner">
        <div class="header__icon">
          <a @click="$router.go(-1)"
            ><img
              src="mobile/assets/images/icons/white/arrow-back.svg"
              alt=""
              title=""
          /></a>
        </div>
      </div>
    </header>

    <header class="header header--page header--fixed" v-if="layout == 'main'">	
		  <div class="header__inner">	
			  <div class="header__icon header__icon--menu open-panel" data-panel="left"><span></span><span></span><span></span><span></span><span></span><span></span></div>
          <div class="header__logo header__logo--text">
            <a href="#">Mobio<strong>Kit</strong></a>
          </div>	
          <div class="header__icon open-panel" data-panel="right">
              <img src="mobile/assets/images/icons/white/search.svg" alt="" title=""/>
          </div>
      </div>
	  </header>
</template>

<script>
export default {
  props: ['layout'],
};
</script>

<style>
</style>