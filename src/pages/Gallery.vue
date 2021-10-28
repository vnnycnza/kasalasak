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
          <div
            class="flex items-center justify-center py-2 mt-2 mb-2 text-center"
          >
            <span class="text-xl md:text-2xl text-gray-700 font-body">
              Engagement Shoot
            </span>
          </div>

          <!-- Video -->
          <div class="flex items-center justify-center py-4 mt-2">
            <div>
              <video controls autoplay>
                <source
                  src="https://video-downloads.googleusercontent.com/AGQNM9Ln2Q0YlKglfWVJJINswikvIX3GiuAUXw6kTnD00C3nCT5O2yU8BBlLi_N-ltXSzj9JzZ-xRpQkN6H9kTqmAVHW9Fzzw7FMLw3rKSoIcmId331pUUxBYivdOx_Uo0jspvzv1hdFrVqGehcZW_GkdUEHrGlpuDwOlgFnLtA8t7cO4g6bOfPedIrqUKVUYfGhfkK4XUf-pr0GrcPj3F5kpYhWiLpKmmt4hcyB6bhRv1KZjhrXk0IyRF_Yi1sMgQqkB_pErgxh-ABRDQVqVvuoABfW7JpSqp0E9xJae5ogJZWNQz4EvHK3KPnjrJqg_r8hxo8zvNnkHe3qR7otuO4vYNNVTJI390xdKwO4_RHqAcp9kSw4s7JXbaohmG7c-q5OW6f-XDiYMoTl3NlxW7DfH6lV9ioL7up3owYWQo9JEncU15iOJrfVp51YP2frVC4eFgMdvvxAyedrmrVbtkK3hhnSPJxVRdAG4o6y6iDcs1ldz9YZ_jLtj5MRe010dAblaAnJGd7welvbCdjeIuUgBHW0fQ4EZmAcIKPGt6HAEo79vRhUcXEuh_J92lcp-14ucsL6GSMxknNmvg8i4c2moC91B2wKmKteW8wKz9l6iq_YaVA5FHaJP0dIDGNm81cjsa1QPQxIEEGx_sYUCWd7iFuS6kwKWorQDJuV_i4nW6bDv1RUQEiXpHDs_WhHWhb0nqia5aGmI_OTyVlE96al8qBrj8I4279h1x1gDY8TiWIMWIRVHc1OxX5uxNyZ1YtUjd7ocDL9bEDeiyCeSYqt9Af-w3pAnfvqP6hgJZ62C27OZ-wN7ILaZ-vmQSr6g9yJNp0jaZ1TlRVG-kc8bwBO-FQth8hrfnbBlTv5nviN2stlEtEfkzo?authuser=0"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <!-- Gallery -->
          <div>
            <GalleryView />
          </div>

          <!-- Notes -->
          <div
            class="flex items-center justify-center py-4 mt-4 mx-6 text-center"
          >
            <ul>
              <li>
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
                  Photos by:
                  <a
                    class="underline"
                    href="https://www.facebook.com/mokicruzphoto/posts/4579124828822154"
                    target="_blank"
                    title="Moki Cruz Photography"
                    >Moki Cruz Photography</a
                  >
                </span>
              </li>
              <li>
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
                  Video by:
                  <a
                    class="underline"
                    href="https://fb.watch/8WyqX7EaWx/"
                    target="_blank"
                    title="Contemporary Art Studios"
                    >Contemporary Art Studios</a
                  >
                </span>
              </li>
              <li>
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
                  HMUA:
                  <a
                    class="underline"
                    href="https://www.instagram.com/arlenedoesmakeup/"
                    target="_blank"
                    title="Arlene Bulactial"
                    >Arlene Bulactial</a
                  >
                  &
                  <a
                    class="underline"
                    href="https://www.instagram.com/johnerik.ph/"
                    target="_blank"
                    title="John Erik"
                    >John Erik</a
                  >
                </span>
              </li>
              <li>
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
                  Coordinator:
                  <a
                    class="underline"
                    href="https://twp.events/"
                    target="_blank"
                    title="The Weekend Planner"
                    >The Weekend Planner</a
                  >
                </span>
              </li>
            </ul>
          </div>

          <div class="flex items-center justify-center py-2 mt-2">
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
