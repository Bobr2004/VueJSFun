<script>
export default {
   data() {
      return {
         greeting: "hello niggers",
         status: false,
         codeword: "",
         list: [1,2,3]
      };
   },

   computed:{
      inputStatus(){
        console.log("yoo")
        if (this.codeword === "nigger") return "true"
        if (this.codeword === "whiteboy") return "false"
        return ""
      }
   },

   methods: {
      showMeTheTruth() {
         this.status = !this.status;
      }
   }
};
</script>

<template>
   <h1>{{ greeting }}</h1>
   <button @click="showMeTheTruth" class="outline">oleg</button>
   <p v-if="status">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in quos amet
      facere deleniti earum nam, quibusdam nostrum accusantium recusandae!
   </p>

   <input type="text" v-model="codeword" :aria-invalid="inputStatus">
   <p v-if="codeword==='nigga'">Seriously??</p>
   <p v-else-if="codeword==='niggaYey'">Seriously??????</p>
   <p v-else>Okay</p>


   <h3>v-for</h3>
   <ul>
    <li v-for="(item, index) of list">{{item}} {{index}} : {{list}}</li>
   </ul>

   <h3>v-for in range</h3>
   <ul>
    <li v-for="_,i of 10" :key="i" :penis="status">{{i}}</li>
   </ul>
</template>
