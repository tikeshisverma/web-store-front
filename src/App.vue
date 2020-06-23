<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
   
  },

};
</script>

<style>
html,body,#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
      background: rgba(223,223,223,1)
}
input, select, textarea, button{
  margin: 10px;
}

</style>
