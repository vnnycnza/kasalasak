<template>
  <div class="flex justify-center items-center text-center">
    <div class="max-w-md pt-4 my-4">
      <div class="relative hover:shadow-xl transition duration-500 rounded-lg">
        <div class="flex flex-wrap justify-center items-center">
          <div class="px-4">
            <img
              :src="require(`../assets/${selectedImage}`)"
              alt="..."
              class="mx-auto shadow rounded-full h-full w-3/4 border-none"
            />
          </div>
        </div>
        <div class="py-6 px-8 rounded-lg">
          <h1
            class="text-gray-700 font-caveat text-3xl mb-3 hover:text-gray-900"
          >
            {{ title }}
          </h1>
          <p class="text-gray-700 tracking-wide mx-4 font-body">{{ desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
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
