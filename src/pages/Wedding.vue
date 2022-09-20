<template>
  <div id="wedding" class="wedding" bind:class="{ hidden: showMenu }">
    <section id="wedding-details">
      <div class="container mx-auto my-auto items-center justify-center">
        <div class="mx-4 mt-8 mb-6 xl:mt-12">
          <!-- Icon -->
          <div class="flex items-center justify-center py-4">
            <svg
              id="couple"
              enable-background="new 0 0 512.119 512.119"
              height="80"
              viewBox="0 0 512.119 512.119"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m365.33 67.931c0 17.57-5.88 33.31-14.83 47.08-27.8 42.75-85.22 66.62-88.4 67.92-3.765 1.533-8.117 1.613-12.08 0-4.21-1.72-103.23-42.89-103.23-115 0-55.113 63.735-87.526 109.27-54.85 45.054-32.332 109.27-.719 109.27 54.85z"
                  fill="#f79caf"
                />
                <path
                  d="m296.06 336.111h-24c-8.837 0-16-7.164-16-16s7.163-16 16-16h24c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
                  fill="#f8e9d2"
                />
                <path
                  d="m240.06 336.111h-24c-8.837 0-16-7.164-16-16s7.163-16 16-16h24c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
                  fill="#f8e9d2"
                />
                <path
                  d="m232.06 317.031v83.08c0 61.88-50.064 112-112 112-66.17 0-120-53.83-120-120 0-16.861-.691-19.794 2.66-24.84 2.86-4.32 7.77-7.16 13.34-7.16 35.601 0 33.641-.203 80 1.01v-45.01c0-37.441 30.176-67.73 67.51-68 37.831-.275 68.49 31.366 68.49 68.92z"
                  fill="#e2e0e0"
                />
                <path
                  d="m280.06 317.031v83.08c0 61.88 50.064 112 112 112 66.17 0 120-53.83 120-120 0-16.861.691-19.794-2.66-24.84-2.86-4.32-7.77-7.16-13.34-7.16-35.601 0-33.641-.203-80 1.01v-45.01c0-37.441-30.176-67.73-67.51-68-37.832-.275-68.49 31.366-68.49 68.92z"
                  fill="#e2e0e0"
                />
                <path
                  d="m232.06 352.111v48c0 61.88-50.06 112-112 112-66.17 0-120-53.83-120-120 0-16.31-.65-19.58 2.34-24.35 11.02 54.89 59.59 96.35 117.66 96.35 61.94 0 112-50.12 112-112z"
                  fill="#cecccc"
                />
                <path
                  d="m512.06 392.111c0 66.17-53.83 120-120 120-61.94 0-112-50.12-112-112v-48c0 61.88 50.06 112 112 112 58.07 0 106.64-41.46 117.66-96.35 2.99 4.77 2.34 8.04 2.34 24.35z"
                  fill="#cecccc"
                />
                <path
                  d="m152.06 392.111c0 26.47-21.53 48-48 48-39.7 0-72-32.3-72-72 0-7.472-.784-12.6 3.46-17.94 2.93-3.69 7.46-6.06 12.54-6.06h56c26.497 0 48 21.543 48 48z"
                  fill="#acebe2"
                />
                <path
                  d="m480.06 360.111v8c0 39.7-32.3 72-72 72-35.069 0-58.137-36.468-43.64-68 7.6-16.51 24.3-28 43.64-28h56c8.8 0 16 7.124 16 16z"
                  fill="#acebe2"
                />
                <path
                  d="m152.06 392.111c0 26.47-21.53 48-48 48-39.7 0-72-32.3-72-72 0-7.47-.78-12.6 3.46-17.94 9.33 28.94 36.53 49.94 68.54 49.94 19.33 0 36.03-11.49 43.64-27.99 2.8 6.09 4.36 12.86 4.36 19.99z"
                  fill="#98d7ce"
                />
                <path
                  d="m480.06 360.111v8c0 39.7-32.3 72-72 72-35.07 0-58.14-36.47-43.64-68 .01-.02.02-.03.03-.05 7.42 16.12 23.55 28.05 43.61 28.05 32.01 0 59.2-20.99 68.54-49.93 2.17 2.72 3.46 6.17 3.46 9.93z"
                  fill="#98d7ce"
                />
                <path
                  d="m347.12 119.911c-28.81 39.67-81.96 61.77-85.02 63.02-3.76 1.53-8.12 1.61-12.08 0-4.21-1.72-103.23-42.89-103.23-115 0-31.64 21.01-55.8 47.53-64.45-2.91 7.46-4.53 15.66-4.53 24.45 0 72.11 99.02 113.28 103.23 115 3.96 1.61 8.32 1.53 12.08 0 1.79-.73 20.79-8.63 42.02-23.02z"
                  fill="#e3889b"
                />
              </g>
            </svg>
          </div>

          <!-- Wedding -->
          <div class="flex items-center justify-center">
            <span class="text-3xl md:text-4xl text-gray-700 font-caveat">
              Our Wedding
            </span>
          </div>

          <!-- HR -->
          <hr
            class="border-gray text-center text-2xl mt-2 mb-2"
            style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
          />

          <!-- Intimate Wedding -->
          <div class="flex items-center justify-center py-4">
            <div
              class="
                max-w-3xl
                sm:max-w-xl
                rounded
                overflow-hidden
                shadow-lg
                pb-2
              "
            >
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/kQyv56ffMVw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </div>
              <div class="px-6 py-4">
                <div
                  class="
                    mt-2
                    mb-2
                    text-lg
                    xl:text-2xl
                    font-caveat
                    text-theme-200
                  "
                >
                  Our Intimate Wedding
                </div>
                <p
                  class="
                    text-xs
                    xl:text-base
                    font-body
                    text-gray-600
                    leading-tight
                  "
                >
                  Our original wedding date was January 16, 2022. However,
                  during the first week of January, almost everyone in our
                  family got covid -- including us. We then decided to postpone
                  the originally planned wedding but still have an intimate one
                  with close family and friends. We only had 2 weeks to plan it
                  all out. It was stressful, yes, but God is faithful and
                  gracious because everything fell into place. We were blessed
                  with supportive family and friends, plus extra reliable
                  suppliers. The moment we recovered and finished isolation, we
                  eventually tied the knot on the morning of January 26, 2022.
                  &#x1F499;
                </p>
              </div>
              <div class="px-4 pb-2">
                <span
                  class="
                    inline-block
                    bg-gray-200
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-body
                    text-gray-700
                    mr-2
                    mb-2
                  "
                >
                  <router-link to="/letter"> View our letter </router-link>
                </span>
                <span
                  class="
                    inline-block
                    bg-gray-200
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-body
                    text-gray-700
                    mr-2
                    mb-2
                  "
                >
                  <a
                    href="https://www.facebook.com/vannycnavs/videos/542587843374922/"
                    target="_blank"
                  >
                    View our Onsite Photo AVP
                  </a>
                </span>
                <span
                  class="
                    inline-block
                    bg-gray-200
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-body
                    text-gray-700
                    mr-2
                    mb-2
                  "
                >
                  <a
                    href="https://www.facebook.com/mokicruzphoto/posts/pfbid033jNT62Aes9DPptBKhMe8FVeK8nAHpvXFHwestya68sAQybMaNb3miLApAT857wZ7l"
                  >
                    View our photos by Moki Cruz Photography
                  </a>
                </span>
              </div>
            </div>
          </div>

          <!-- August Livestream Wedding -->
          <div class="flex items-center justify-center py-4">
            <div
              class="
                max-w-3xl
                sm:max-w-xl
                rounded
                overflow-hidden
                shadow-lg
                pb-2
              "
            >
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/Ev_G-H_Cjig?start=702"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </div>
              <div class="px-6 py-4">
                <div
                  class="
                    mt-2
                    mb-2
                    text-lg
                    xl:text-2xl
                    font-caveat
                    text-theme-200
                  "
                >
                  Our Wedding Ceremony
                </div>
                <p
                  class="
                    text-xs
                    xl:text-base
                    font-body
                    text-gray-600
                    leading-tight
                  "
                >
                  In a span of just 7 months, we had our renewal of vows. Funny
                  as it seems but it was as meaningful and memorable as our
                  first wedding. We get to affirm our commitment and declare
                  God's faithfulness in our relationship in the presence of the
                  people God blessed us with. Our furbaby Ginny even walked the
                  aisle too! &#x1F499;
                </p>
              </div>
            </div>
          </div>

          <!-- August SDE Wedding -->
          <div class="flex items-center justify-center py-4">
            <div
              class="
                max-w-3xl
                sm:max-w-xl
                rounded
                overflow-hidden
                shadow-lg
                pb-2
              "
            >
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/fj8xbpGw_eI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="px-6 py-4">
                <div
                  class="
                    mt-2
                    mb-2
                    text-lg
                    xl:text-2xl
                    font-caveat
                    text-theme-200
                  "
                >
                  Our August Wedding
                </div>
                <p
                  class="
                    text-xs
                    xl:text-base
                    font-body
                    text-gray-600
                    leading-tight
                  "
                >
                  #ItsANavsStory finally happened! 8 years of being together,
                  with 2 years LDR, a year of wedding planning plus 7 months of
                  being newlyweds -- all celebrated on August 27, 2022. Though
                  this is technically our renewal of vows, we treasure this day
                  as much as our intimate wedding. This is because we've always
                  viewed our wedding as a once in a lifetime experience where
                  almost everyone closest to our hearts, people who've played
                  significant roles in our lives in all the different seasons of
                  our life together (and even apart) are all together in one
                  room, celebrating with us in this milestone. Praise God for
                  His goodness and faithfulness! &#x1F499;
                </p>
              </div>
              <div class="px-4 pb-2">
                <span
                  class="
                    inline-block
                    bg-gray-200
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-body
                    text-gray-700
                    mr-2
                    mb-2
                  "
                >
                  <a
                    href="https://www.facebook.com/ContemporaryArtVideos/videos/400750512198695/"
                    target="_blank"
                  >
                    View our summary video by Contemporary Art Videos
                  </a>
                </span>
                <span
                  class="
                    inline-block
                    bg-gray-200
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    font-body
                    text-gray-700
                    mr-2
                    mb-2
                  "
                >
                  <a
                    href="https://www.facebook.com/AngguloPrintss/posts/pfbid0PvRvfVnoSKAqGc6fpWWG5fvYvdLkCAguBp1NREuT5i7T1QiWaDjVi9Hx7iyU4rG8l"
                    target="_blank"
                  >
                    Photos from Anggulo Prints
                  </a>
                </span>
              </div>
            </div>
          </div>

          <!-- View Events -->
          <div class="flex items-center justify-center mt-2">
            <router-link to="/event">
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
                View Event Details
              </button>
            </router-link>
          </div>

          <!-- Back to Home -->
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

export default {
  name: "Gallery",
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
.wedding {
  padding-bottom: 144px;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
