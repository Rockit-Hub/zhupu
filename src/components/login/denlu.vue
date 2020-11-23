<template>
  <div class="login-box">
    <div class="login-right">
      <div class="login-right-top">
        <router-link to="/denlu" active-class="active11">登录</router-link>
        <router-link to="/login" active-class="active11">注册</router-link>
      </div>
      <router-link class="fanhui-home" to="/">返回首页</router-link>
      <div class="from-box">
        <div class="login-input">
          <input type="text" placeholder="账号">
        </div>
        <div class="login-input">
          <input type="password" placeholder="密码">
          <div class="yz-tishi">账号或密码不正确，请重新输入</div>
        </div>
        <router-link to="/wangjimima" class="wangjimima">忘记密码？</router-link>
        <div class="debnlu">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  @import url("../../../static/css/login.css");
</style>
