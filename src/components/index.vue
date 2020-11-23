<template>
  <div class="index-content">
    <div class="index-img"></div>
    <!-- <header>31</header> -->
    <div class="content-box">
      <div class="beader-box">
        <!-- <div class="logo-box">
          <img src="../assets/index/linlogo.gif" alt="">
        </div> -->
        <div class="header-nav">
          <div class="nav-list">首页</div>
          <div class="nav-list">个人中心</div>
          <div class="nav-right">
            <router-link class="nav-list" to="/denlu">登录</router-link>
            <div class="nav-list">关于我们</div>
            <div class="nav-list">设置</div>
          </div>
        </div>
      </div>
      <div class="index-top"></div>
    </div>
  </div>
</template>

<script>
  import header from '@/components/public/header.vue'
export default {
  comments:{
    header
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../../static/css/index.css");
</style>
