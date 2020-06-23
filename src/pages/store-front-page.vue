<template>
<div>
<div v-if="store">
  Name: {{store.name}}
  id: {{store.id}}
  type: {{store.type}}
  category: {{store.category}}
  description: {{store.description}}
  </div>

  <button @click="logout" v-if="isLoggedin">logout</button>
  </div>
</template>
<script>

export default {
  name: "storeFrontPage",
  data() {
    return {
      store:[],
      isLoggedin: this.$cookies.get('auth0.is.authenticated')
    };
  },
  components: {

  },
  mounted: function() {
this.getStoreData()
     },

  methods: {
    getStoreData(){
      console.log(this.$route.query.id)
      fetch(`http://localhost:3000/api/store?id=${this.$route.query.id}`)
      .then(res=> res.json())
      .then(res=> {
        this.store = res.result[0]
      })
    },
    logout(){
      console.log("hi", this.$auth)
        this.$cookies.set('auth0.is.authenticated', false)
        localStorage.removeItem('user')
        this.isLoggedin = false;
    }
  }
};
</script>

<style>

</style>