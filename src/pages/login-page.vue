<template>
  <div class="home">
    <div v-if="!$auth.loading">
      <button class="login" v-if="!$auth.isAuthenticated" @click="login">Log in</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  methods: {
    login() {
      this.$auth.loginWithRedirect()
    },
  }
};
</script>
<style>
.home {
  background-image: url("../assets/banner.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
}
.login {
  display: flex;
  justify-content: center;
  box-shadow: inset 0px 1px 20px 1px #c3a263 ;
  padding: 15px 60px;
  align-items: center;
  font-size: 20px;
  border: none;
}
</style>