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
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  created() {
    document.onreadystatechange = () => {
      //To load the app only after all libraries are loaded
      if (document.readyState == "complete") {
        this.loadApp = true;
      }
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
};
</script>
