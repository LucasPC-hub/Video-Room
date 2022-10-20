<template>
  <nav-bar/>
  <router-view />
  <footer-bar/>
</template>

<script>
import NavBar from "@/components/navBar";
import FooterBar from "@/components/footer";

export default {
  name: 'App',
  components: {
    FooterBar,
    NavBar
  }
}
</script>

<style>
body{
  background-image: url("assets/backgroung.jpg");
  background-size: cover;
}
</style>