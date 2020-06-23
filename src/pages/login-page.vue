<template>
  <div class="home">
    

    <div v-if="!$auth.loading">
     
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
     
      <button class="login" v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
<style>
.home{
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
.login{
  display: flex;
  justify-content: center;
      box-shadow: inset 0px 1px 20px 1px #c3a263 ;
         padding: 15px 60px;
      align-items: center;
      font-size: 20px;
      border: none;
      
  /* align-items: center; */
  
}
</style>