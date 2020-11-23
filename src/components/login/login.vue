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
          <input type="text" placeholder="手机号">
          <div class="yz-tishi">请正确输入手机号</div>
        </div>
        <div class="login-yanzm">
          <input type="text" placeholder="请输入验证码">
          <div class="fas-box">58秒后重发</div>
          <div class="yzm-box">验证码不正确</div>
        </div>
        <div class="login-input">
          <input type="password" placeholder="密码">
          <div class="yz-tishi">请正确输入密码</div>
        </div>
        <div class="login-input">
          <input type="password" placeholder="确认密码">
          <div class="yz-tishi">两次输入密码不一样</div>
        </div>
        <div class="debnlu">注册</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  @import url("../../../static/css/login.css");
</style>
