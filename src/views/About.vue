<template>
  <v-container class="fill-height login_bg" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-window v-model="step">
            <v-window-item :value="0">
              <SignIn @step="step++"/>
            </v-window-item>
            <v-window-item :value="1">
              <Register/>

            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  /* eslint-disable no-undef */
import Register from "../Auth/register";
  import SignIn from "../Auth/signin";
export default {
  name: "Login",
  components: {SignIn, Register},
  data:()=>({
    step: 0
  })
};
</script>