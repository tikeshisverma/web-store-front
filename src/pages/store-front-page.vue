<template>
<div v-if="store">
  <button class="logout" @click="logout" v-if="isLoggedin">logout</button>
  <table>
    <tr>
      <th>Name:</th>
      <td>{{store.name}}</td>
    </tr>
    <tr>
      <th>Id:</th>
      <td>{{store.id}}</td>
    </tr>
    <tr>
      <th>Type:</th>
      <td>{{store.type}}</td>
    </tr>
    <tr>
      <th>Category:</th>
      <td>{{store.category}}</td>
    </tr>
    <tr>
      <th>Description:</th>
      <td>{{store.description}}</td>
    </tr>
  </table>  
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
  mounted: function() {
    this.getStoreData()
  },
  methods: {
    getStoreData(){
      fetch(`http://localhost:3000/api/store?id=${this.$route.query.id}`)
      .then(res=> res.json())
      .then(res=> {
        this.store = res.result[0]
      })
    },
    logout(){
        this.$cookies.set('auth0.is.authenticated', false)
        localStorage.removeItem('user')
        this.isLoggedin = false;
    }
  }
};
</script>

<style>
table {
  border-collapse: collapse;
  background: white;
  display: table;
  margin: auto;
  margin-top: 5rem;
}
table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.logout {
  position: absolute;
  right: 20px;
  top: 5px;
  padding: 8px 22px;
  font-size: 14px;
  border: none;
  background: #f62a2ae0;
  color: white;
  letter-spacing: 0.5px;
  cursor: pointer;
}
</style>