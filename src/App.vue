<template>
  <div class="container-fluid d-flex justify-content-between align-items-stretch flex-column">
    <header class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-black d-lg-flex justify-content-between col-12">
        <router-link class="navbar-brand font-weight-bolder text-nowrap text-decoration-none text-light"
           to="/">kidaData</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler16"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"
                style="background-color: black;">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse col-md-5 d-lg-flex justify-content-end" id="navbarToggler16">
          <ul class="navbar-nav mr-auto mr-md-0 mt-2 mt-lg-0">
            <li class="nav-item text-center">
              <router-link class="nav-link text-white font-weight-bold" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-danger font-weight-bold" href="#">Sign Up</router-link>
            </li>
            <li class="nav-item text-center">
              <router-link class="nav-link text-white font-weight-bold" href="#">Sign In</router-link>
            </li>
            <li class="nav-item text-center">
              <router-link class="nav-link text-white font-weight-bold" href="#">Pricing</router-link>
            </li>
            <li class="nav-item text-center">
              <router-link class="nav-link text-white font-weight-bold" href="#">About Us</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="row mt-5">
      <div class="container-fluid text-center">
        <p class="text-white small">kidaData Gh c 2020</p>
      </div>
    </footer>
  </div>
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
</style>
