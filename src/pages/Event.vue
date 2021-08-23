<template>
  <div class="event">
  <div
    v-bind:class="{ hidden: showMenu }"
    id="event"
    class="container mx-auto my-auto item-center justify-center"
  >
    <div class="mx-4 mt-8 mb-6 xl:mt-12 text-center">
      <div class="flex item-center justify-center py-4">
        <svg
          id="Layer_1"
          enable-background="new 0 0 512 512"
          height="80"
          viewBox="0 0 512 512"
          width="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m432 40v432c0 8.84-7.16 16-16 16h-320c-8.84 0-16-7.16-16-16v-432c0-8.84 7.16-16 16-16h320c8.84 0 16 7.16 16 16z"
              fill="#e2e0e0"
            />
            <path
              d="m360.03 192.14c-20.51 54.5-94.37 85.2-97.99 86.68-3.771 1.536-8.125 1.61-12.08 0-4.21-1.72-103.23-42.89-103.23-115 0-55.304 63.937-87.381 109.27-54.85 53.513-38.401 130.388 13.07 104.03 83.17z"
              fill="#f79caf"
            />
            <path
              d="m432 440v32c0 8.84-7.16 16-16 16h-320c-8.84 0-16-7.16-16-16v-432c0-8.84 7.16-16 16-16h32v320c0 53.02 42.98 96 96 96z"
              fill="#cecccc"
            />
            <path
              d="m464 0c-8.837 0-16 7.164-16 16v8h-384v-8c0-8.836-7.163-16-16-16s-16 7.164-16 16v48c0 8.836 7.163 16 16 16s16-7.164 16-16v-8h384v8c0 8.836 7.163 16 16 16s16-7.164 16-16v-48c0-8.836-7.163-16-16-16z"
              fill="#a18b76"
            />
            <path
              d="m464 432c-8.837 0-16 7.164-16 16v8h-384v-8c0-8.836-7.163-16-16-16s-16 7.164-16 16v48c0 8.836 7.163 16 16 16s16-7.164 16-16v-8h384v8c0 8.836 7.163 16 16 16s16-7.164 16-16v-48c0-8.836-7.163-16-16-16z"
              fill="#a18b76"
            />
            <path
              d="m360.03 192.14c-20.51 54.5-94.37 85.2-97.99 86.68-3.77 1.54-8.13 1.61-12.08 0-4.21-1.72-103.23-42.89-103.23-115 0-23.66 11.7-43.06 28.64-54.98-1.07 4.76-1.64 9.77-1.64 14.98 0 72.11 99.02 113.28 103.23 115 3.95 1.61 8.31 1.54 12.08 0 2.61-1.07 41.68-17.3 70.99-46.68z"
              fill="#e3889b"
            />
            <g fill="#98d7ce">
              <path
                d="m344 352h-176c-8.837 0-16-7.164-16-16s7.163-16 16-16h176c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
              />
              <path
                d="m344 416h-176c-8.837 0-16-7.164-16-16s7.163-16 16-16h176c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
              />
            </g>
          </g>
        </svg>
      </div>
      <span class="text-3xl md:text-4xl text-gray-700 font-caveat py-4">
        Event Details
      </span>

      <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
        <div class="relative w-full max-w-lg">
          <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div class="m-8 relative space-y-4">
            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div class="flex-1 flex justify-between items-center">
                <div class="h-4 w-48 bg-gray-300 rounded"></div>
                <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
              </div>
            </div>
            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div class="flex-1 flex justify-between items-center">
                <div class="h-4 w-48 bg-gray-300 rounded"></div>
                <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
              </div>
            </div>
            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div class="flex-1 flex justify-between items-center">
                <div class="h-4 w-48 bg-gray-300 rounded"></div>
                <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Event",
  components: {},
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
};
</script>

<style scoped>
.event {
  padding-bottom:144px; 
}
</style>