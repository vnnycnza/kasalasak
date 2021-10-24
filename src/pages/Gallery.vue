<template>
  <div id="gallery" class="gallery" bind:class="{ hidden: showMenu }">
    <section id="gallery-details">
      <div class="container mx-auto my-auto items-center justify-center">
        <div class="mx-4 mt-8 mb-6 xl:mt-12">
          <!-- Icon -->
          <div class="flex items-center justify-center py-4 mt-8">
            <img
              :src="require(`../assets/camera.png`)"
              class="object-cover items-center"
              width="80"
              height="80"
              alt=""
            />
          </div>

          <!-- Gallery -->
          <div class="flex items-center justify-center">
            <span class="text-3xl md:text-4xl text-gray-700 font-caveat">
              Gallery
            </span>
          </div>

          <!-- HR -->
          <hr
            class="border-gray text-center text-2xl mt-2"
            style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
          />

          <!-- Label -->
          <div class="flex items-center justify-center mt-2 text-center">
            <span class="text-xl md:text-2xl text-gray-700 font-body">
              Engagement Shoot
            </span>
          </div>

          <!-- Notes -->
          <div class="flex items-center justify-center py-4 mx-6 text-center">
            <span
              class="
                mx-auto
                text-base
                tracking-tight
                text-gray-600
                font-body
                text-center
                w-full
                max-w-lg
              "
            >
              <a
                href="https://www.facebook.com/mokicruzphoto"
                target="_blank"
                title="Moki Cruz Photography"
                >Moki Cruz Photography</a
              >
              |
              <a
                href="https://www.facebook.com/ContemporaryArtVideos"
                target="_blank"
                title="Contemporary Art Studios"
                >Contemporary Art Studios</a
              >
            </span>
          </div>

          <!-- Gallery -->
          <div>
            <GalleryView />
          </div>

          <div class="flex items-center justify-center py-2 mt-4">
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
                Back to Home
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
import GalleryView from "../components/GalleryView";

export default {
  name: "Gallery",
  components: {
    GalleryView,
  },
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
.gallery {
  padding-bottom: 144px;
}
</style>
