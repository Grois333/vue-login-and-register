<template>
  <div class="login">

    <h1 class="mt-5 text-center">Login</h1>

    <div class="notification" v-if="success">Error: Incorrect Credentials</div>

        <form onSubmit="">

          <input type="text" name="email" class="form-control my-3" placeholder="email" v-model="email">

          <input type="password" name="password" class="form-control my-3" placeholder="password" v-model="password">

          <button class="btn btn-success btn-block" v-on:click="login">Submit</button>

          <router-link to="/register">register</router-link>
        </form>

        
        

  </div>
</template>


<script>

  
  import { userInfo, loginUser } from '../utils/auth'
  
 

    export default {
        name: 'Login',

        data() {
          return {
              email: '',
              password: '',

              userName: '',

              success: false


          }
          
        },


        methods: {

          async login(e){

            e.preventDefault();

            //console.log(this.email)

            //alert('trying to login!')

            try {
              const res = await loginUser(this.email, this.password)

              //console.log(userInfo.data.uName.user_name)
              this.userName = userInfo.data.uName.user_name;
              //console.log(this.userName)

              
              // route to dashboard and send user data
              this.$router.push({name:'Dashboard', params:{userName: this.userName}})
            }
            catch (err) {
              console.log(`Error: ${err}`)
              this.success = true
            }


            // try {
            //     //const body = { email, password };
            //     const response = await fetch(
            //       "http://localhost:5000/authentication/login",
            //       {
            //         method: "POST",
            //         headers: {
            //           "Content-type": "application/json"
            //         },
            //         body: JSON.stringify({
            //           email: this.email,
            //           password: this.password
            //         })
            //       }
            //     );

            //     const parseRes = await response.json();

            //     console.log(parseRes)

            //     // if (parseRes.jwtToken) {
            //     //   localStorage.setItem("token", parseRes.jwtToken);
            //     //   setAuth(true);
            //     //   toast.success("Logged in Successfully");
            //     // } else {
            //     //   setAuth(false);
            //     //   toast.error(parseRes);
            //     // }

            //   } catch (err) {
            //     console.error(err.message);
            //   }



          }

        }

      }
    
</script>


<style>

form{
  max-width: 50%;
  margin: auto;
}

.notification{
  max-width: 40%;
  margin: auto;
  border: 1px solid red;
  border-radius: 5px;
  background-color: lightpink;
}



</style>
