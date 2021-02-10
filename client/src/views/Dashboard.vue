<template>

<div>

      <button style="marginLeft:80%"  class="btn btn-primary my-4" v-on:click="logout">Logout</button>

      <h1 class="mt-5 text-center">Dashboard</h1>
      <h2 class="text-center">Welcome {{userName}}</h2>

</div>

</template>


<script>

  import { logoutUser} from '../utils/auth';


  
  export default {

        name: 'Dashboard',


         data() {
          return {

            userName: 'username'
              
          }

          
        },

        created(){


          // get user name
          //console.log(this.$route.params.userName)
          //this.userName = this.$route.query.userName

          // Save or get user info from localstorage
          let getInfo = localStorage.getItem('userName', this.userName)
          //console.log(getInfo)

           this.userName = this.$route.params.userName

           if(getInfo == null){
             localStorage.setItem('userName', this.userName)
             this.userName = this.$route.params.userName

           } else{
              this.userName = localStorage.getItem('userName', this.userName)
           }
           
   


        },

        methods: {

          async logout(){

            try {
              localStorage.removeItem('userName', this.userName)
              await logoutUser()
              this.$router.push('/login')
            }
            catch (err) {
              alert(`Error: ${err}`)

            }   

          }  
        


        }

}



</script>


