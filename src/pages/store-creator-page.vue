<template>

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
<button class="click" @click="onclick" >Create Store</button>
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
  created() {
  let a = this.$auth.user
  console.log("authhhhh=-----????", a)
  
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
    width: 25%;
    margin: 10rem auto;
    background: #86b1ff;
    padding: 10px;
  

}
input,select,textarea{
  box-shadow: inset 0px 0px 3px 2px #919191cc ;
  border: none;
  padding: 10px;
}
.click{
  padding: 10px;
  font-size: 18px;
}
</style>