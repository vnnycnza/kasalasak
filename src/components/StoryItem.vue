<template>
  <div class="flex items-center overflow-hidden">
    <div
      class="
        container
        mx-auto
        max-w-sm
        bg-white
        rounded-xl
        shadow-lg
        hover:shadow-2xl
        transform
        transition-all
        duration-500
      "
    >
      <div v-show="hasMultipleImages" class="slider">
        <button
          @click="change()"
          class="absolute bg-gray-100 rounded-full w-11 h-11 shadow-md z-10"
        >
          <svg
            class="w-8 h-8 font-bold text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
      <img :src="require(`../assets/${selectedImage}`)" alt="" />
      <div class="py-2">
        <h1
          class="
            mt-2
            text-lg
            xl:text-2xl
            font-caveat
            text-theme-200
            cursor-pointer
          "
        >
          {{ title }}
        </h1>
        <p class="text-xs xl:text-base font-body text-gray-700">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryItem",
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  props: {
    images: {
      type: Array,
      default: () => ["story/01.png"],
    },
    title: {
      type: String,
      default: "Story Item",
    },
    desc: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in consectetur ante, sit amet mattis velit. Donec hendrerit lorem eu hendrerit commodo.",
    },
  },
  computed: {
    hasMultipleImages() {
      return this.images.length > 1;
    },
    selectedImage() {
      return this.images[this.currentImageIndex];
    },
  },
  methods: {
    change() {
      const total = this.images.length;
      if (total === this.currentImageIndex + 1) {
        this.currentImageIndex = 0;
      } else {
        this.currentImageIndex++;
      }
    },
  },
};
</script>

<style scoped>
.slider {
  position: absolute;
  top: 5px;
  right: 35px;
}
</style>
