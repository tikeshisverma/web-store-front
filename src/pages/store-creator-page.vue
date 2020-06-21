<template>
<div>

  <div class="wrapper">
      
  <input v-model="storeName" placeholder="store name">
  <input v-model="storeId" placeholder="store id">
<select v-model="storeType">
   <option disabled value="">Store type</option>
   <option>kirana store</option>
   <option>home busine</option>
   <option>boutique</option>
   <option>multi brand S</option>
   <option>mall</option>
</select>
<select v-model="storeCategory">
   <option disabled value="">Store type</option>
   <option>cooked food</option>
   <option>grocery</option>
   <option>fashion</option>
   <option>yoga</option>
   <option>dance</option>
</select>
<textarea v-model="storeDiscription" placeholder="store discription"></textarea>
<button class="click" @click="onclick" >creat store front</button>
 </div>
  </div>
</template>
<script>

export default {
  name: "storeCreatorPage",
     data() {
     return{
     storeType:"",
     storeDiscription:"",
     storeName:"",
     storeId:"",
     storeCategory:"",
   }
   },
  components: {

  },
   methods:{
     onclick(){
       const payload = {
         store_name: this.storeName,
         store_id: this.storeId,
         store_type: this.storeType,
         store_category : this.storeCategory,
         store_discription: this.storeDiscription
       }
       console.log("data-->",payload)
       this.creatStore(payload)
     },
    creatStore(payload){
      fetch('http://localhost:3000/api/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(res => res.json())
      .then(res => console.log("dfasdfsdfsdf", res))
    } 
   },
   
};
</script>
<style>
.wrapper{
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>