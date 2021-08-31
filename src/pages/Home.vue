<template>
  <div class="home">
    <div
      v-bind:class="{ hidden: showMenu }"
      id="home"
      class="container mx-auto my-auto item-center justify-center"
    >
      <div class="flex item-center justify-center py-4 mt-8">
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
              d="m512 64v424c0 8.84-7.16 16-16 16h-480c-8.84 0-16-7.16-16-16v-424c0-8.84 7.16-16 16-16h480c8.84 0 16 7.16 16 16z"
              fill="#e2e0e0"
            />
            <path
              d="m512 456v32c0 8.84-7.16 16-16 16h-480c-8.84 0-16-7.16-16-16v-424c0-8.84 7.16-16 16-16h32v284c0 68.48 55.52 124 124 124z"
              fill="#cecccc"
            />
            <path
              d="m362.72 362.35c-38.59 43.44-97.03 67.72-100.68 69.21-3.771 1.536-8.125 1.61-12.08 0-5.48-2.24-134.37-55.81-134.37-148.44 0-35.97 22.76-66.79 54.84-79.24 27.92-10.837 60.804-6.766 85.57 12.77 15.2-11.99 34.15-18.65 53.99-18.65 71.544 0 123.523 84.698 52.73 164.35z"
              fill="#f79caf"
            />
            <path
              d="m512 48v96c0 8.84-7.16 16-16 16h-480c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h480c8.84 0 16 7.16 16 16z"
              fill="#f79caf"
            />
            <path
              d="m362.72 362.35c-38.59 43.44-97.03 67.72-100.68 69.21-3.77 1.54-8.12 1.61-12.08 0-5.48-2.24-134.37-55.81-134.37-148.44 0-35.97 22.76-66.79 54.84-79.24-6.91 12.22-10.84 26.29-10.84 41.24 0 92.63 128.89 146.2 134.37 148.44 3.96 1.61 8.31 1.54 12.08 0 2.39-.98 28.26-11.72 56.68-31.21z"
              fill="#e3889b"
            />
            <path
              d="m512 112v32c0 8.84-7.16 16-16 16h-480c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h32c0 44.18 35.82 80 80 80z"
              fill="#e3889b"
            />
            <g fill="#9af9ff">
              <path
                d="m224 88c-8.836 0-16-7.164-16-16v-48c0-8.836 7.164-16 16-16s16 7.164 16 16v48c0 8.836-7.164 16-16 16z"
              />
              <path
                d="m160 88c-8.836 0-16-7.164-16-16v-48c0-8.836 7.164-16 16-16s16 7.164 16 16v48c0 8.836-7.164 16-16 16z"
              />
              <path
                d="m96 88c-8.836 0-16-7.164-16-16v-48c0-8.836 7.164-16 16-16s16 7.164 16 16v48c0 8.836-7.164 16-16 16z"
              />
              <path
                d="m288 88c-8.836 0-16-7.164-16-16v-48c0-8.836 7.164-16 16-16s16 7.164 16 16v48c0 8.836-7.164 16-16 16z"
              />
              <path
                d="m352 88c-8.836 0-16-7.164-16-16v-48c0-8.836 7.164-16 16-16s16 7.164 16 16v48c0 8.836-7.164 16-16 16z"
              />
              <path
                d="m416 88c-8.836 0-16-7.164-16-16v-48c0-8.836 7.164-16 16-16s16 7.164 16 16v48c0 8.836-7.164 16-16 16z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="flex item-center justify-center">
        <span
          class="text-3xl md:text-4xl tracking-tight text-gray-700 font-caveat"
        >
          We're finally tying the knot in...
        </span>
      </div>
      <Timer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Timer from "../components/Timer";

export default {
  name: "Home",
  components: {
    Timer,
  },
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
};
</script>

<style scoped>
.home {
  padding-bottom: 144px;
}
</style>
