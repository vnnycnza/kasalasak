<template>
  <div id="virtual" class="virtual" bind:class="{ hidden: showMenu }">
    <section id="virtual-details">
      <div class="container mx-auto my-auto items-center justify-center">
        <div class="mx-4 mt-8 mb-6 xl:mt-12">
          <!-- Icon -->
          <div class="flex items-center justify-center py-4 mt-8">
            <svg
              id="invite"
              enable-background="new 0 0 512 512"
              height="80"
              viewBox="0 0 512 512"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m506.24 204.29-96 80c-10.398 8.659-26.24 1.268-26.24-12.29v-160c0-13.606 15.889-20.927 26.24-12.29l96 80c7.671 6.389 7.68 18.183 0 24.58z"
                  fill="#e1c3a7"
                />
                <path
                  d="m128 112v160c0 13.614-15.915 20.924-26.24 12.29l-96-80c-7.671-6.389-7.68-18.183 0-24.58l96-80c10.363-8.647 26.24-1.299 26.24 12.29z"
                  fill="#e1c3a7"
                />
                <path
                  d="m416 16v256c0 4.75-2.11 9.25-5.76 12.29l-144 120c-5.923 4.943-14.548 4.95-20.48 0l-144-120c-3.65-3.04-5.76-7.54-5.76-12.29v-256c0-8.84 7.16-16 16-16h288c8.84 0 16 7.16 16 16z"
                  fill="#e2e0e0"
                />
                <path
                  d="m355.45 142.36c0 13.87-4 26.48-10.35 37.75-23.7 42.05-80.06 65.48-83.06 66.71-3.771 1.536-8.125 1.611-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.068 57.442-80.108 99.45-51.13 41.388-28.55 99.45.455 99.45 51.13z"
                  fill="#f79caf"
                />
                <path
                  d="m416 192v80c0 4.75-2.11 9.25-5.76 12.29l-144 120c-5.92 4.94-14.55 4.95-20.48 0l-144-120c-3.65-3.04-5.76-7.54-5.76-12.29v-80c0 4.75 2.11 9.25 5.76 12.29l144 120c5.93 4.95 14.56 4.94 20.48 0l144-120c3.65-3.04 5.76-7.54 5.76-12.29z"
                  fill="#cecccc"
                />
                <path
                  d="m512 192v304c0 8.84-7.16 16-16 16h-480c-8.84 0-16-7.16-16-16v-304c0-13.606 15.889-20.927 26.24-12.29 21.519 17.938 173.574 144.641 229.76 191.46l229.76-191.46c10.363-8.647 26.24-1.299 26.24 12.29z"
                  fill="#f3d4b7"
                />
                <path
                  d="m512 472v24c0 8.84-7.16 16-16 16h-480c-8.84 0-16-7.16-16-16v-304c0-13.61 15.89-20.93 26.24-12.29 2.69 2.24 7.42 6.19 13.76 11.47v264.82c0 8.84 7.16 16 16 16z"
                  fill="#e1c3a7"
                />
                <path
                  d="m344.11 181.82c-24.24 40.97-79.11 63.79-82.07 65-3.77 1.54-8.13 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-24.21 13.43-43.74 32.05-54.17-2.6 6.78-4.05 14.22-4.05 22.17 0 65.64 89.6 102.9 93.41 104.46 3.95 1.61 8.31 1.54 12.08 0 2.07-.85 29.47-12.24 54.07-33z"
                  fill="#e3889b"
                />
              </g>
            </svg>
          </div>

          <!-- Event Details -->
          <div class="flex items-center justify-center">
            <span class="text-3xl md:text-4xl text-gray-700 font-caveat">
              You are invited virtually!
            </span>
          </div>

          <!-- HR -->
          <hr
            class="border-gray text-center text-2xl mt-2"
            style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
          />

          <!-- Event Date -->
          <div class="flex items-center justify-center py-4 text-center">
            <span class="text-xl md:text-2xl text-gray-700 font-body">
              August 27, 2022 • 3:00pm
            </span>
          </div>

          <!-- Timer -->
          <div class="flex items-center justify-center py-2">
            <img
              :src="require(`../assets/virtual.jpg`)"
              class="object-cover rounded-2xl h-1/4 w-3/4 items-center"
              alt=""
            />
          </div>

          <!-- Invite -->
          <div class="flex items-center justify-center pb-6 mt-8 mx-6">
            <span
              class="
                flex
                mx-6
                px-4
                mx-auto
                text-lg
                tracking-tight
                text-gray-600
                font-body
                text-center
                w-full
                max-w-lg
              "
            >
              While we really want to celebrate our union with everyone dear,
              the current situation limits us to do so. Good news is you can
              still celebrate with us virtually. You are invited to join and
              witness our wedding ceremony online. &#x1F499;
            </span>
          </div>

          <div class="flex items-center justify-center py-2">
            <a href="https://fb.me/e/1lMBzMoVP">
              <button
                class="
                  text-xs
                  xl:text-base
                  bg-transparent
                  hover:bg-theme-200
                  text-theme-200
                  font-body
                  hover:text-theme-50
                  py-2
                  px-4
                  border border-blue-500
                  hover:border-transparent
                  rounded
                  uppercase
                "
              >
                Join our virtual event
              </button>
            </a>
          </div>

          <div class="flex items-center justify-center py-2">
            <router-link to="/">
              <button
                class="
                  text-xs
                  xl:text-base
                  bg-transparent
                  hover:bg-theme-200
                  text-theme-200
                  font-body
                  hover:text-theme-50
                  py-2
                  px-4
                  border border-blue-500
                  hover:border-transparent
                  rounded
                  uppercase
                "
              >
                Explore our website
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Virtual",
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.virtual {
  padding-bottom: 144px;
}
</style>
