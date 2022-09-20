<template>
  <div id="event-page" class="home-page" v-bind:class="{ hidden: showMenu }">
    <section id="home-carousel">
      <div>
        <Carousel />
      </div>
    </section>

    <section id="countdown" class="py-4">
      <div class="container mx-auto my-auto items-center justify-center">
        <div class="mx-4 my-4">
          <!-- Icon -->
          <div class="flex items-center justify-center py-4 mt-4">
            <svg
              id="calendar"
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
          <!-- Caption -->
          <div class="flex items-center justify-center">
            <span
              class="
                text-3xl
                md:text-4xl
                tracking-tight
                text-gray-700
                font-caveat
              "
            >
              We got married! &nbsp;&#x1F973;
            </span>
          </div>
          <div class="flex items-center justify-center pt-2 pb-6">
            <span
              class="
                flex
                mx-8
                px-4
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
              We had an intimate wedding last January 26, 2022 and we celebrated
              our marriage with more family and friends last August 27, 2022.
              Indeed, God is so faithful!
            </span>
          </div>
          <div class="flex items-center justify-center pt-2 pb-6">
            <span
              class="
                px-4
                mx-auto
                text-base
                tracking-tight
                text-gray-600
                font-body
                text-center
                italic
              "
            >
              By God's grace, we've been enjoying married life for . . .
            </span>
          </div>
          <Timer />
          <!-- View our wedding -->
          <div class="flex items-center justify-center pt-2">
            <router-link to="/wedding">
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
                View our wedding
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section id="groom-and-bride" class="bg-blue-100 py-4">
      <div class="container mx-auto my-auto items-center justify-center">
        <div class="mx-4">
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

          <!-- Attire -->
          <div class="flex items-center justify-center">
            <span class="text-3xl md:text-4xl text-gray-700 font-caveat">
              The Couple
            </span>
          </div>

          <!-- HR -->
          <hr
            class="border-gray text-center text-2xl mt-2"
            style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
          />

          <!-- Groom and Bride -->
          <div class="flex flex-wrap -mx-2 overflow-hidden">
            <div
              class="
                my-2
                px-2
                w-full
                overflow-hidden
                sm:w-1/2
                md:w-full
                lg:w-1/2
                xl:w-1/2
              "
            >
              <Profile
                :images="getContent(0).images"
                :title="getContent(0).title"
                :desc="getContent(0).desc"
              />
            </div>

            <div
              class="
                my-2
                px-2
                w-full
                overflow-hidden
                sm:w-1/2
                md:w-full
                lg:w-1/2
                xl:w-1/2
              "
            >
              <Profile
                :images="getContent(1).images"
                :title="getContent(1).title"
                :desc="getContent(1).desc"
              />
            </div>
          </div>

          <!-- Link to Story -->
          <div class="flex items-center justify-center py-4">
            <router-link to="/story">
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
                Look into our story
              </button>
            </router-link>
          </div>

          <!-- Link to Gallery -->
          <div class="flex items-center justify-center mb-2">
            <router-link to="/gallery">
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
                View Gallery
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section id="message-us" class="pt-2 pb-2">
      <div class="container mx-auto my-auto items-center justify-center">
        <div class="mx-4">
          <!-- Icon -->
          <div class="flex items-center justify-center py-4">
            <svg
              id="message-us"
              enable-background="new 0 0 511.56 511.56"
              height="80"
              viewBox="0 0 511.56 511.56"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m507.905 212.724c-20.567-121.266-126.175-212.628-252.054-212.628-191.458 0-312.753 201.72-228.813 369.846l-26.334 115.839c-2.983 13.122 6.999 25.656 20.478 25.656 3.344 0-6.188 1.942 120.506-26.856 95.018 47.435 214.496 32.422 294.948-48.03 60.05-60.051 84.942-143.261 71.269-223.827z"
                fill="#ffebd2"
              />
              <path
                d="m507.905 212.723c-1.65-9.728-9.852-16.995-19.707-17.463-9.872-.473-18.71 5.988-21.274 15.516-33.53 124.522-153.213 148.863-221.569 152.29-27.722 1.39-51.862 18.323-63.001 44.194-.22.51-.446 1.016-.682 1.524-21.629 46.551 11.687 100.237 63.177 102.419 50.835 2.157 99.358-10.44 144.274-33.9 34.134-17.828 62.385-44.691 81.7-77.687 34.891-59.604 47.714-124.23 37.082-186.893z"
                fill="#ffcdba"
              />
              <g fill="#e0b7a2">
                <path
                  d="m362.518 192.1h-213.333c-11.598 0-21 9.402-21 21s9.402 21 21 21h213.334c11.598 0 21-9.402 21-21s-9.403-21-21.001-21z"
                />
                <path
                  d="m309.184 277.433h-160c-11.598 0-21 9.402-21 21s9.402 21 21 21h160c11.598 0 21-9.402 21-21s-9.402-21-21-21z"
                />
              </g>
            </svg>
          </div>

          <!-- Note on Gifts -->
          <div class="flex items-center justify-center">
            <span class="text-3xl md:text-4xl text-gray-700 font-caveat">
              We'd love to hear from you!
            </span>
          </div>

          <!-- HR -->
          <hr
            class="border-gray text-center text-2xl mt-2"
            style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
          />

          <!-- Message -->
          <div class="flex-col justify-center items-center text-center">
            <div class="my-3 px-6 py-4 w-full overflow-hidden">
              <div class="flex-1 space-y-1">
                <div class="text-2xl md:text-3xl text-gray-700 font-caveat">
                  Send us a message
                </div>
                <div
                  class="
                    items-center
                    justify-center
                    text-base text-gray-600
                    font-body
                  "
                >
                  <div class="flex w-1/2 mx-auto items-center">
                    Surely, we're gonna face a lot of challenges along the way
                    and also celebrate a lot of milestones too. Keep in touch
                    with us, leave us an advice or just drop a message
                    regardless. &#x1F92A;
                  </div>
                </div>

                <!-- Link to Contact -->
                <div class="flex items-center justify-center py-4 mt-6">
                  <router-link to="/contact">
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
                      Contact Us
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="back-to-top justify-center">
      <Scroll />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Timer from "../components/Timer";
import Carousel from "../components/Carousel";
import Profile from "../components/Profile";
import Scroll from "../components/Scroll";

export default {
  name: "Home",
  components: {
    Timer,
    Carousel,
    Profile,
    Scroll,
  },
  data() {
    return {
      content: [
        {
          images: ["story/profilev1/groom01.png"],
          title: "The Groom",
          desc: "JM is a born rockstar. He knows how to play all sorts of instruments but he's the best at drums and guitar. &#x1F941; &#x1F3B8; Oh, and he sings well too. When God showered talents, he probably had a suitcase while everyone else only got a plastic bag. &#128514; He loves playing video games when no one else is awake, and spends most of his free time watching basketball highlights. &#x1F3C0; He's also a passionate Instructional Design Specialist. That's his job title but I'm honestly not sure what that means, I just know he is passionate about it. &#x1F525;",
        },
        {
          images: ["story/profilev1/bride01.png"],
          title: "The Bride",
          desc: "Vanny is a software engineer by profession, backed with years of experience, but still copies code from Stack Overflow. &#x1F605; Don't be fooled by her height, she's one strong, independent woman. She's analytical and logical when it comes to her decision making, always taking calculated measures. &#x1F4C8; She probably drafted a flowchart in her mind when I asked her to marry me. &#128514; You'd catch her re-watching Friends, Brooklyn 99, or Hospital Playlist in between watching Hell's Kitchen or Masterchef. &#x1F4FA;",
        },
      ],
    };
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
    getContent(index) {
      return this.content[index];
    },
  },
};
</script>

<style scoped>
.home-page {
  padding-bottom: 144px;
}
</style>
