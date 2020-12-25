
<template>
  <v-app>
    <v-main>
      <router-view :user="user" @logout="logout" />
    </v-main>
  </v-app>
</template>

<script>
import {firebaseAuth} from "../src/firebase";

export default {
  name: "App",
  data: () => ({
    user:null
  }),
  methods:{
    logout(){
      firebaseAuth.signOut().then(()=>{
        this.user = null;
        this.$router.push({name:"login"})
      })
    }
  },
  mounted() {

    firebaseAuth.onAuthStateChanged((user)=>{
      if (user){
        this.user = user;
      }else{
        this.user = null
      }
    })
  }
};
</script>