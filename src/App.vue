<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <Header />
  </header>
  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>

<style>
@import "@/assets/base.css";
@import "@/index.css";
</style>
