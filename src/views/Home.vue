<template>
  <div class="home">
    <v-toolbar>
      <v-spacer/>
      <v-btn v-if="user" @click="$emit('logout')">Logout</v-btn>
      <v-btn v-else @click="$router.push('login')">Login</v-btn>
    </v-toolbar>
<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  props:['user'],
  components: {
    HelloWorld
  }
};
</script>