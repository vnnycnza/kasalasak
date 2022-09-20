<template>
  <div class="mobile-menu">
    <!-- mobile menu -->
    <div
      v-bind:class="{ hidden: !showMenu, flex: showMenu }"
      class="
        lg:hidden
        h-screen
        bg-gradient-to-r
        from-theme-200
        to-blue-200
        py-4
      "
    >
      <ul class="font-body text-xl text-gray-200 px-6 items-center">
        <li>
          <router-link
            to="/"
            @click.native="toggleNavbar()"
            class="block py-2 hover:text-theme-300"
            >home</router-link
          >
        </li>
        <li>
          <router-link
            to="/wedding"
            @click.native="toggleNavbar()"
            class="block py-2 hover:text-theme-300"
            >wedding</router-link
          >
        </li>
        <li>
          <router-link
            to="/event"
            @click.native="toggleNavbar()"
            class="block py-2 hover:text-theme-300"
            >event</router-link
          >
        </li>
        <li>
          <router-link
            to="/gallery"
            @click.native="toggleNavbar()"
            class="block py-2 hover:text-theme-300"
            >gallery</router-link
          >
        </li>
        <li>
          <router-link
            to="/story"
            @click.native="toggleNavbar()"
            class="block py-2 hover:text-theme-300"
            >our story</router-link
          >
        </li>
        <li>
          <router-link
            to="/contact"
            @click.native="toggleNavbar()"
            class="block py-2 hover:text-theme-300"
            >contact us</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MobileMenu",
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
  methods: {
    toggleNavbar: function () {
      this.$store.commit("SET_SHOW_MENU", false);
    },
  },
};
</script>
