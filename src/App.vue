<template>
  <div id="app">
    <div id="header">
      <Navbar />
    </div>
    <div id="body">
      <MobileMenu />
      <Home class="text-center" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MobileMenu from "./components/MobileMenu.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    Navbar,
    MobileMenu,
    Footer,
  },
};
</script>
