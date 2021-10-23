<template>
  <div class="flex items-center overflow-hidden">
    <div
      class="
        container
        mx-auto
        max-w-sm
        bg-white
        shadow-lg
        hover:shadow-2xl
        transform
        transition-all
        duration-500
      "
    >
      <img
        :src="require(`../assets/${selectedImage}`)"
        class="object-cover h-58 w-full items-center"
        alt=""
      />
      <div class="py-2">
        <h1
          class="
            mt-2
            mb-2
            text-lg
            xl:text-2xl
            font-caveat
            text-theme-200
            cursor-pointer
          "
          v-html="title"
        ></h1>
        <div class="flex">
          <div class="flex px-2">
            <img
              :src="require(`../assets/${speaker}`)"
              class="h-8 w-8 rounded-full ring-2 ring-white"
              alt=""
            />
          </div>
          <div class="flex-1">
            <p
              class="text-xs xl:text-base font-body text-gray-600 leading-tight"
              v-html="desc"
            ></p>
          </div>
        </div>
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
    speaker: {
      type: String,
      default: "story/groom01.png",
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
  mounted() {
    if (this.images.length > 1) {
      setInterval(() => {
        this.change();
      }, 2000);
    }
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
