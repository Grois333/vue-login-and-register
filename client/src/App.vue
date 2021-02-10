<template>


  <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <router-link to="/" class="nav-link navbar-brand">Logo</router-link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                          <li class="nav-item">
                          <router-link to="/" class="nav-link">Home</router-link>
                          </li>
                          <li class="nav-item">
                             <router-link to="/about" class="nav-link">About</router-link>
                          </li>
                          <li class="nav-item">
                              <router-link to="/login" class="nav-link">Account</router-link>
                          </li>
                          <li class="nav-item">
                              <router-link to="/contact" class="nav-link">Contact</router-link>
                          </li>
                      </ul>
                  </div>
     </nav>




  <router-view/>



</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#navbarNav{
  justify-content: flex-end;
}


</style>
