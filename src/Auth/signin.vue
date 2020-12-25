<template>
<v-app>
  <v-container text-center>
    <h3 class="alert alert-danger">{{errorMsg}}</h3>
    <v-btn
        class="ma-2"
        color="primary"
        dark
        @click="SignInWithGmail"
      >
        Sign In With Google
        <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
      </v-btn>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="[
        v => !!v || 'name requried',
        v => v.length<=20 || 'your name must be 10 length',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]"
      label="Email"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="emailReq"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="loginWithEmail"
    >
      Sign In
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
  </v-container>
</v-app>

</template>
<script>
import { firebaseAuth, firebase} from "../firebase";
  export default {
    data: () => ({
      errorMsg: "",
      valid: true,
      password: '',
      email: '',
      emailReq: [
        v => !!v || 'Password is required',
  
      ],
    
    }),

    methods: {
      loginWithEmail(){
        this.$refs.form.validate()
          firebaseAuth.signInWithEmailAndPassword(this.email, this.password)
  .then(() => {
      this.$router.push('/')
  })
  .catch((error) => {
    this.errorMsg = error
  })
    },
    SignInWithGmail(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebaseAuth.signInWithPopup(provider)
      .then(()=>{
        this.$router.push('/')
      }).catch((error)=>{
        this.errorMsg = error
      })
    },
      reset(){
        this.$refs.form.reset()
      },
      resetValidation(){
        this.$refs.form.resetValidation()
      }

    },
  }
</script>