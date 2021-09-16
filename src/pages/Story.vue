<template>
  <div class="story">
    <div
      v-bind:class="{ hidden: showMenu }"
      id="story"
      class="container mx-auto my-auto item-center justify-center h-3/4"
    >
      <section id="title">
        <div class="flex items-center justify-center py-4 mt-8">
          <svg
            id="Layer_1"
            enable-background="new 0 0 512.02 512.02"
            height="80"
            viewBox="0 0 512.02 512.02"
            width="80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m152.02 376.01c-14.119 0-21.431-17.196-11.314-27.314l120-120c6.249-6.248 16.379-6.248 22.628 0 6.248 6.249 6.248 16.379 0 22.628l-120 120c-3.124 3.124-7.219 4.686-11.314 4.686z"
                fill="#a18b76"
              />
              <path
                d="m168.02 360.01v64c0 4.24-1.69 8.31-4.69 11.31l-72 72c-10.035 10.035-27.31 2.903-27.31-11.31v-48h-48c-14.208 0-21.387-17.255-11.31-27.31l72-72c3-3 7.07-4.69 11.31-4.69h64c8.84 0 16 7.16 16 16z"
                fill="#e2e0e0"
              />
              <path
                d="m403.15 124.88c-14.126 0-21.421-17.206-11.313-27.313l91.87-91.87c6.248-6.249 16.379-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627l-91.87 91.87c-3.125 3.124-7.219 4.686-11.314 4.686z"
                fill="#b59f89"
              />
              <path
                d="m364 324.96c-42.86 31.74-85.16 49.14-86.94 49.87-3.771 1.536-8.125 1.61-12.08 0-1.78-.73-44.08-18.13-86.94-49.87-110.901-82.157-106.445-175.415-55.48-223.04 41.687-38.973 105.962-39.646 148.46-3.28 19.96-17.08 45.57-26.63 72.43-26.63 102.688 0 176.799 137.199 20.55 252.95z"
                fill="#f79caf"
              />
              <path
                d="m496.02.01c-21.564 0-42.963 0-52 0-13.234 0-24 10.766-24 24s10.766 24 24 24h20v20c0 13.234 10.766 24 24 24s24-10.766 24-24c0-8.214 0-37.625 0-52 0-8.837-7.163-16-16-16z"
                fill="#cecccc"
              />
              <path
                d="m447.23 221.24c-11.22 33.73-37.25 69.66-83.23 103.72-42.86 31.74-85.16 49.14-86.94 49.87-3.77 1.54-8.12 1.61-12.08 0-1.78-.73-44.08-18.13-86.94-49.87-110.9-82.16-106.45-175.41-55.48-223.04.01-.01.01-.01.02-.02-10.6 48.58 11.05 110.45 87.46 167.06 42.86 31.74 85.16 49.14 86.94 49.87 3.96 1.61 8.31 1.54 12.08 0 1.78-.73 44.08-18.13 86.94-49.87 21.12-15.65 38.03-31.68 51.23-47.72z"
                fill="#e3889b"
              />
              <path
                d="m131.33 467.32-40 40c-10.03 10.03-27.31 2.9-27.31-11.31v-48h-48c-14.21 0-21.39-17.25-11.31-27.31l40-40c-10.08 10.06-2.9 27.31 11.31 27.31h48v48c0 14.21 17.28 21.34 27.31 11.31z"
                fill="#cecccc"
              />
            </g>
          </svg>
        </div>

        <div class="flex items-center justify-center">
          <span
            class="
              mx-6
              text-3xl
              md:text-4xl
              tracking-tight
              text-gray-700 text-center
              font-caveat
            "
          >
            Our Story
          </span>
        </div>

        <div class="flex item-center justify-center py-2">
          <span
            class="
              mx-6
              text-lg
              tracking-tight
              text-gray-700
              font-body
              text-center
            "
          >
            There's so much to tell, but here's our journey &#x1f697;
          </span>
        </div>
      </section>

      <div class="container">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div
              class="
                col-start-1 col-end-5
                p-4
                rounded-xl
                my-4
                ml-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(0).images"
                :title="getContent(0).title"
                :desc="getContent(0).desc"
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-6">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-6 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
            <div
              class="
                col-start-6 col-end-10
                p-4
                rounded-xl
                my-4
                mr-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(1).images"
                :title="getContent(1).title"
                :desc="getContent(1).desc"
              />
            </div>
          </div>
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div
              class="
                col-start-1 col-end-5
                p-4
                rounded-xl
                my-4
                ml-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(2).images"
                :title="getContent(2).title"
                :desc="getContent(2).desc"
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-6">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-6 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
            <div
              class="
                col-start-6 col-end-10
                p-4
                rounded-xl
                my-4
                mr-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(3).images"
                :title="getContent(3).title"
                :desc="getContent(3).desc"
              />
            </div>
          </div>
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div
              class="
                col-start-1 col-end-5
                p-4
                rounded-xl
                my-4
                ml-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(4).images"
                :title="getContent(4).title"
                :desc="getContent(4).desc"
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-6">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-6 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
            <div
              class="
                col-start-6 col-end-10
                p-4
                rounded-xl
                my-4
                mr-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(5).images"
                :title="getContent(5).title"
                :desc="getContent(5).desc"
              />
            </div>
          </div>
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div
              class="
                col-start-1 col-end-5
                p-4
                rounded-xl
                my-4
                ml-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(6).images"
                :title="getContent(6).title"
                :desc="getContent(6).desc"
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-6">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-6 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
            <div
              class="
                col-start-6 col-end-10
                p-4
                rounded-xl
                my-4
                mr-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(7).images"
                :title="getContent(7).title"
                :desc="getContent(7).desc"
              />
            </div>
          </div>
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div
              class="
                col-start-1 col-end-5
                p-4
                rounded-xl
                my-4
                ml-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(8).images"
                :title="getContent(8).title"
                :desc="getContent(8).desc"
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-6">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-6 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
            <div
              class="
                col-start-6 col-end-10
                p-4
                rounded-xl
                my-4
                mr-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(9).images"
                :title="getContent(9).title"
                :desc="getContent(9).desc"
              />
            </div>
          </div>
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div
              class="
                col-start-1 col-end-5
                p-4
                rounded-xl
                my-4
                ml-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(10).images"
                :title="getContent(10).title"
                :desc="getContent(10).desc"
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-6">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-6 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
            <div
              class="
                col-start-6 col-end-10
                p-4
                rounded-xl
                my-4
                mr-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(11).images"
                :title="getContent(11).title"
                :desc="getContent(11).desc"
              />
            </div>
          </div>
          <!-- left -->
          <div class="flex flex-row-reverse md:contents">
            <div
              class="
                col-start-1 col-end-5
                p-4
                rounded-xl
                my-4
                ml-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(12).images"
                :title="getContent(12).title"
                :desc="getContent(12).desc"
              />
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-6">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
          </div>
          <!-- right -->
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-6 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-theme-300 pointer-events-none"></div>
              </div>
              <div
                class="
                  w-6
                  h-6
                  absolute
                  top-1/2
                  -mt-3
                  rounded-full
                  bg-theme-300
                  shadow
                "
              ></div>
            </div>
            <div
              class="
                col-start-6 col-end-10
                p-4
                rounded-xl
                my-4
                mr-auto
                shadow-md
              "
            >
              <StoryItem
                :images="getContent(13).images"
                :title="getContent(13).title"
                :desc="getContent(13).desc"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Up -->
      <section id="back-to-top">
        <div class="flex item-center justify-center pt-4">
          <Scroll />
        </div>
      </section>

      <!-- Back to Home -->
      <div class="flex item-center justify-center py-2">
        <router-link to="/">
          <button
            class="
              bg-transparent
              text-xs
              xl:text-base
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
</template>

<script>
import { mapGetters } from "vuex";
import StoryItem from "../components/StoryItem";
import Scroll from "../components/Scroll";

export default {
  name: "Story",
  components: {
    StoryItem,
    Scroll
  },
  data() {
    return {
      content: [
        {
          images: ["story/01.png"],
          title: "Orgmates",
          desc: "They first met when Vanny applied as an org member in UP CURSOR in 2011 where JM is already a member of. They became orgmates and had quite a number of common friends & college experiences. #cursorsexy",
        },
        {
          images: ["story/02.png"],
          title: "UP Fair 2014",
          desc: "Few years later, JM had a crush on Vanny and he started hanging out with her more. One of the most memorable ones would be UP Fair 2014 where Vanny went with JM to watch him perform.",
        },
        {
          images: ["story/0301.png", "story/0302.png"],
          title: "First Date",
          desc: "Feb 14 2014 was their first Valentines together. For JM, this was their first date. For Vanny, he was just asking her to grab dinner with her. &#x1F602; The next day, JM went to a party organised by CS Dept which Vanny led & was a part of. It's probably when sparks started flying.",
        },
        {
          images: ["story/04.png"],
          title: "Make it official",
          desc: "After some months of courting & dating, JM and Vanny became official as a couple on Aug 16, 2014. They went on a date before heading to UP CURSOR’s Anniversary Party. He was asked, on stage, if they are indeed officially together. Vanny wanted to keep it to themselves for a while but then they were cornered and had to announce it. &#x1F602; #celebrity??",
        },
        {
          images: ["story/05.png"],
          title: "Road trips",
          desc: "Tagaytay has a special place in their hearts because of this core memory - their first out of town trip. This is just a start for all dinner dates, museum tours & random trips they will have.",
        },
        {
          images: [
            "story/0601.png",
            "story/0602.png",
            "story/0603.png",
            "story/0604.png",
            "story/0605.png",
          ],
          title: "Ginny &#x1F436;",
          desc: "On Nov 2015, they became dog parents to their furry baby Ginny! It was in early 2016 that JM got custody of this cutie. Definitely a bundle of joy!",
        },
        {
          images: [
            "story/0701.png",
            "story/0702.png",
            "story/0703.png",
            "story/0704.png",
            "story/0705.png",
            "story/0706.png",
          ],
          title: "Date Nights",
          desc: "Time together is usually spent on staying in & watching random shows. Pre-pandemic, they would always go on dinner & movie dates. They also love seeing concerts & exploring cool places. JM is an awesome musician and there was a time when most of their dinner dates are gig nights. Definitely tiring but so fun and awesome. &#x1F3B8;&#x1F941;",
        },
        {
          images: [
            "story/0801.png",
            "story/0802.png",
            "story/0803.png",
            "story/0804.png",
            "story/0805.png",
            "story/0806.png",
          ],
          title: "Church Family",
          desc: "JM and Vanny love weekends, most especially Sundays. They go to church together & spend quality time with their church family. The fun isn't confined on Sundays though - they've enjoyed serving in youth camps together, having fellowships & even just random trips with the gang.",
        },
        {
          images: ["story/0901.png", "story/0902.png", "story/0903.png"],
          title: "Love for travel",
          desc: "As home buddies, JM and Vanny only discovered their love for travel in 2018. Since then, they would set aside weeklong leaves and invite their closest friends to have much awaited vacation in beautiful & relaxing places.",
        },
        {
          images: ["story/1001.png"],
          title: "Singapore",
          desc: "On Oct 2019, Vanny got the opportunity to work in Singapore. Being the sweet & ever so supportive partner, JM went with Vanny to help her settle in. It was a weeklong trip that would have a bittersweet ending.",
        },
        {
          images: ["story/1101.png"],
          title: "Goodbye for now - Oct 2019",
          desc: "Vanny celebrated her 26th birthday in Singapore with JM. It was spent grocery shopping and settling Vanny in her new place. This would also be the same day that JM goes home to Manila and Vanny will be left in SG to work. ✈️",
        },
        {
          images: [
            "story/1201.png",
            "story/1202.png",
            "story/1203.png",
            "story/1204.png",
            "story/1205.png",
          ],
          title: "So near yet so far",
          desc: "JM and Vanny spent almost a year and half apart. Add in the unexpected pandemic, it was indeed a recipe for disaster. It was probably the most difficult experience but by God's love & grace, this only made the two stronger.",
        },
        {
          images: ["story/1301.png", "story/1302.png"],
          title: "Reunited - 05.2021",
          desc: "God is faithful and His timing is always perfect. By His grace, Vanny was able to return back home and is reunited with JM.",
        },
        {
          images: [
            "story/1401.png",
            "story/1402.png",
            "story/1403.png",
            "story/1405.png",
          ],
          title: "We got engaged - 07.16.2022",
          desc: "A month before their 7th anniversary, JM and Vanny, together with their most supportive friends, went to Tagaytay for a relaxing weekend staycation. With the help of their friends, JM pulled off a surprise and asked Vanny to marry her. Of course, she said yes. &#x1F48D;",
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
.story {
  padding-bottom: 144px;
}
</style>
