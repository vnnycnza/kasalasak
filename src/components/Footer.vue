<template>
  <div
    v-bind:class="{ hidden: showMenu, flex: !showMenu }"
    class="
      relative
      md:absolute
      w-full
      bottom-0
      bg-gradient-to-r
      from-theme-50
      font-body
      text-gray-700
    "
  >
    <div class="container mx-auto px-4 py-3 space-y-1 text-center">
      <div id="footer-icon" class="block m-auto mb-2">
        <svg
          id="Layer_1"
          height="50"
          width="80"
          class="m-auto"
          enable-background="new 0 0 512.001 512.001"
          viewBox="0 0 512.001 512.001"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m335.471 151.85-72-38c-4.68-2.47-10.26-2.47-14.94 0l-40.53 21.39-31.47 16.61c-5.25 2.77-8.53 8.22-8.53 14.15v130c0 8.84 7.16 16 16 16h144c8.84 0 16-7.16 16-16v-130c0-5.93-3.28-11.38-8.53-14.15z"
              fill="#e2e0e0"
            />
            <path
              d="m224.001 256c-8.84 0-16-7.16-16-16v-104.76l-31.47 16.61c-5.25 2.77-8.53 8.22-8.53 14.15v130c0 8.84 7.16 16 16 16h144c8.84 0 16-7.16 16-16v-40z"
              fill="#cecccc"
            />
            <path
              d="m432.001 325.33v170.67c0 8.84-7.16 16-16 16h-320c-8.84 0-16-7.16-16-16v-170.67c0-8.84 7.16-16 16-16 4.37 0 156.174-75.428 160-77.33 0 0 155.58 77.33 160 77.33 8.84 0 16 7.16 16 16z"
              fill="#e2e0e0"
            />
            <path
              d="m432.001 464v32c0 8.84-7.16 16-16 16h-320c-8.84 0-16-7.16-16-16v-170.67c0-8.84 7.16-16 16-16 1.03 0 10.34-4.23 24-10.72v149.39c0 8.84 7.16 16 16 16z"
              fill="#cecccc"
            />
            <path
              d="m351.321 430.4c-17.63 50.65-85.96 79.06-89.28 80.42-3.772 1.536-8.125 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.373 57.707-79.925 99.45-51.13 48.635-33.549 117.329 12.152 95.32 75.17z"
              fill="#f79caf"
            />
            <path
              d="m288.001 32h-16v-16c0-8.836-7.164-16-16-16s-16 7.164-16 16v16h-16c-8.836 0-16 7.164-16 16s7.164 16 16 16h16v56c0 8.836 7.164 16 16 16s16-7.164 16-16v-56h16c8.836 0 16-7.164 16-16s-7.164-16-16-16z"
              fill="#b59f89"
            />
            <g fill="#a18b76">
              <path
                d="m456.001 512h-400c-8.836 0-16-7.164-16-16s7.164-16 16-16h400c8.836 0 16 7.164 16 16s-7.164 16-16 16z"
              />
              <path
                d="m456.471 365.048-200.47-106.915-200.471 106.915c-7.798 4.159-17.49 1.208-21.647-6.588-4.158-7.797-1.208-17.489 6.588-21.647l208-110.93c4.706-2.51 10.353-2.51 15.059 0l208 110.93c7.797 4.158 10.747 13.85 6.588 21.647-4.137 7.756-13.812 10.766-21.647 6.588z"
              />
              <path
                d="m352.471 189.588-96.47-51.454-96.47 51.454c-7.796 4.157-17.488 1.209-21.647-6.588-4.158-7.797-1.209-17.489 6.588-21.647l104-55.47c4.706-2.51 10.354-2.51 15.06 0l104 55.47c7.797 4.159 10.746 13.851 6.588 21.647-4.132 7.744-13.802 10.772-21.649 6.588z"
              />
            </g>
            <path
              d="m350.791 431.86c-18.41 49.74-85.46 77.61-88.75 78.96-3.77 1.54-8.12 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-23.07 12.11-41.78 29.24-52.5-.81 4-1.24 8.17-1.24 12.5 0 65.64 89.6 102.9 93.41 104.46 3.96 1.61 8.31 1.54 12.08 0 2.26-.93 34.72-14.42 60.75-38.96z"
              fill="#e3889b"
            />
          </g>
        </svg>
        <span class="text-xl tracking-tight text-gray-700 font-caveat"
          >Navarrete-Conoza Wedding</span
        >
      </div>
      <div id="footer-acknowledgment" class="leading-snug">
        <div class="text-xs">
          icons by
          <a
            href="https://www.flaticon.com/authors/bqlqn"
            target="_blank"
            class="text-gray-500 hover:text-gray-600"
            title="bqlqn"
            >bqlqn</a
          >
          from
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            title="Flaticon"
            class="text-gray-500 hover:text-gray-600"
            >www.flaticon.com</a
          >
        </div>
        <div class="text-xs">
          website made with 💙
          <a
            href="https://github.com/vnnycnza/kasalasak"
            target="_blank"
            title="vnnycnza"
            class="text-gray-500 hover:text-gray-600"
            >by @vnnycnza</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
};
</script>
