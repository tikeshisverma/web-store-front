<template>
  <div class="store-list-page">
    <div v-for="(store,index) in storeList.result" :key="index">
      <router-link :to="{name:`store`, query:{id:store.id}}">
        <div class="store-card">
          <h3>{{store.name}}</h3>
          <p class="small light">{{store.id}}</p>
          <p class="bold">{{store.type}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "storeListPage",
  components: {},
  data() {
    return {
      userDetails: null,
      storeList: []
    };
  },
  mounted: async function() {
    try {
      console.log("localStorage.getItem", localStorage.getItem("user"));
      this.userDetails = JSON.parse(localStorage.getItem("user"));
      console.log("storeList--->", this.storeList);
      console.log("userDetails -->", this.userDetails);
      this.storeList = await this.getUserStoreList(this.userDetails.email);

      const totalStores = this.storeList.result.length;
      console.log("storeList --->", this.storeList);
      if (totalStores === 0) {
        this.$router.push({ name: "creator" });
      } else if (totalStores === 1) {
        const storeID = this.storeList.result[0].id;
        this.$router.push({ name: "store", query: { id: storeID } });
      }
    } catch (e) {
      this.$router.push({ name: "login" });
      console.log("this is the error -->", e);
    }
  },
  methods: {
    getUserStoreList(email) {
      console.log("email--->", email);
      return fetch(`http://localhost:3000/api/store?email=${email}`).then(res =>
        res.json()
      );
    }
  }
};
</script>
<style>
.bold {
  font-weight: bold;
}
.small {
  font-size: 12px;
  line-height: 0;
}
.light {
  font-weight: light;
}
.store-list-page {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  line-height: 0.5em;
}
.store-card:hover {
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.1),
    0 18px 36px -18px rgba(0, 0, 0, 0.1), 0 -12px 36px -8px rgba(0, 0, 0, 0.01);
}
.store-card {
  flex: 1;
  color: black;
  text-decoration: none;
  padding: 20px;
  display: flex;
  background: white;
  margin: 25px;
  flex-direction: column;
  text-align: left;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.1),
    0 8px 16px -8px rgba(0, 0, 0, 0.1), 0 -6px 16px -6px rgba(0, 0, 0, 0.01);
  border-radius: 4px;
}
</style>