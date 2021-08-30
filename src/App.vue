<template>
  <div id="app" class="relative min-h-full">
    <div id="header">
      <Navbar />
    </div>
    <div id="body">
      <MobileMenu />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MobileMenu from "./components/MobileMenu.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MobileMenu,
    Footer,
  },
};
</script>
