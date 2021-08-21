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
          <a href="" class="block py-2 hover:text-theme-300">home</a>
        </li>
        <li>
          <a href="#" class="block py-2 hover:text-theme-300">event</a>
        </li>
        <li>
          <a href="#" class="block py-2 hover:text-theme-300">faqs</a>
        </li>
        <li>
          <a href="#" class="block py-2 hover:text-theme-300">our story</a>
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
};
</script>
