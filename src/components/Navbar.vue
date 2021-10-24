<template>
  <!-- https://www.section.io/engineering-education/creating-a-responsive-navigation-bar-using-tailwind-css-and-javascript/ -->
  <!-- Navbar goes here -->
  <div class="header">
    <nav class="bg-theme-200 shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <!-- Website Logo -->
              <a href="/" class="flex items-center py-3 px-2">
                <!-- https://www.flaticon.com/free-icon/wedding-rings_3096904?related_id=3096904&origin=pack -->
                <svg
                  id="logo"
                  class="mr-2"
                  height="50"
                  viewBox="0 0 600 600"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="m377.797 238.228c-2.021-8.289-10.246-13.582-18.684-11.888-8.665 1.735-14.282 10.166-12.547 18.831.41 2.065 3.991 13.425 5.321 29.72 7.242 71.512-38.698 144.745-113.883 167.049-8.472 2.513-13.302 11.418-10.789 19.89 2.509 8.457 11.402 13.306 19.89 10.789 99.169-29.421 158.221-133.267 130.692-234.391zm.025.104c.063.258.1.445.121.554-.037-.186-.078-.37-.121-.554z"
                      fill="#e1c3a7"
                    />
                    <path
                      d="m184.344 448.318c-2.402 0-11.428-.695-22.634-2.759-118.6-23.157-174.739-170.255-86.76-265.436 71.492-77.345 193.211-66.524 251.782 21.331 4.902 7.352 14.836 9.339 22.188 4.438 7.353-4.902 9.34-14.836 4.438-22.188-51.182-76.773-141.239-102.333-216.802-79.11-65.877 20.245-116.92 75.584-132.02 142.531-22.993 101.94 43.598 208.913 151.13 229.859 7.799 1.471 21.124 3.335 28.679 3.335 8.836 0 16-7.164 16-16s-7.164-16.001-16.001-16.001z"
                      fill="#e1c3a7"
                    />
                    <path
                      d="m344.465 512.508c-92.636 0-168-75.364-168-168s75.364-168 168-168 168 75.364 168 168-75.365 168-168 168zm0-304c-74.99 0-136 61.009-136 136s61.01 136 136 136 136-61.009 136-136-61.01-136-136-136z"
                      fill="#f3d4b7"
                    />
                    <path
                      d="m512.914 62.868c0 13.87-4 26.48-10.35 37.75-23.7 42.05-80.06 65.48-83.06 66.71-3.771 1.536-8.125 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.068 57.442-80.108 99.45-51.13 41.388-28.55 99.45.455 99.45 51.13z"
                      fill="#f79caf"
                    />
                    <path
                      d="m501.574 102.328c-24.24 40.97-79.11 63.79-82.07 65-3.77 1.54-8.13 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-24.21 13.43-43.74 32.05-54.17-2.6 6.78-4.05 14.22-4.05 22.17 0 65.64 89.6 102.9 93.41 104.46 3.95 1.61 8.31 1.54 12.08 0 2.07-.85 29.471-12.24 54.07-33z"
                      fill="#e3889b"
                    />
                  </g>
                </svg>
                <span class="text-3xl tracking-tight text-gray-300 font-caveat"
                  >jm & vanny</span
                >
              </a>
            </div>
          </div>
          <!-- Primary Navbar items -->
          <div
            class="
              hidden
              md:flex
              items-center
              space-x-1
              font-body
              text-xl text-gray-300
              mt-3
            "
          >
            <router-link to="/" class="py-4 px-2 hover:text-white"
              >home</router-link
            >
            <router-link to="/event" class="py-4 px-2 hover:text-white"
              >event</router-link
            >
            <router-link to="/rsvp" class="py-4 px-2 hover:text-white"
              >rsvp</router-link
            >
            <router-link to="/gallery" class="py-4 px-2 hover:text-white"
              >gallery</router-link
            >
            <router-link to="/story" class="py-4 px-2 hover:text-white"
              >our story</router-link
            >
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button
              class="outline-none mobile-menu-button"
              @click="toggleNavbar()"
            >
              <svg
                class="w-8 h-8 text-gray-300 hover:text-white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
  methods: {
    toggleNavbar: function () {
      this.$store.commit("SET_SHOW_MENU", !this.showMenu);
    },
  },
};
</script>
