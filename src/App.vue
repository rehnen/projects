<template>
  <div id="app">
    <nav-bar id="nav">
      <router-link class="navbar-item" to="/">
        <img src="./assets/logo.png" alt="">
      </router-link>
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/projects">Projects</router-link>
    </nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
