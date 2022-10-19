<template>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
import NavBar from "@/components/navBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
body{
  background-color: #242526;
}
</style>