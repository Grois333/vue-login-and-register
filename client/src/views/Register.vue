<template>


    <h1 class="mt-5 text-center">Register</h1>

    <div class="notification" v-if="success">Error: User is already registered</div>

        <form onSubmit="">

        <input
            type="text"
            name="name"
            placeholder="name"
            class="form-control my-3"
            v-model="name"
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            class="form-control my-3"
            v-model="email"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            class="form-control my-3"
            v-model="password"
          />

          <button class="btn btn-success btn-block" v-on:click="register">Submit</button>
          <router-link to="/login">login</router-link>
        </form>



</template>


<script>

import { newUserInfo, registerUser } from '../utils/auth'

 export default {
        name: 'Register',

        data() {
          return {
              name: '',
              email: '',
              password: '',

              userName: '',

              success: false
          }
          
        },

        methods: {


          async register(e){

            e.preventDefault();

            //console.log(this.email)

            //alert('trying to login!')

            try {

             
              await registerUser(this.name, this.email, this.password)


              //console.log(newUserInfo.data.uName.user_name)
              this.userName = newUserInfo.data.uName.user_name;
              //console.log(this.userName)

            
              // route to dashboard and send user data
              //this.$router.push('/dashboard')
              this.$router.push({name:'Dashboard', params:{userName: this.userName}})
            }
            catch (err) {
              console.log(`Error: ${err}`)
              this.success = true
            }
          }

          

        }

 }



</script>


<style>

.notification{
  max-width: 40%;
  margin: auto;
  border: 1px solid red;
  border-radius: 5px;
  background-color: lightpink;
}



</style>