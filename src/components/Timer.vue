<template>
  <div class="mx-4 mt-8 mb-6 xl:mt-12 text-center">
    <div class="flex item-center justify-center py-4">
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
    <span
      class="text-3xl md:text-4xl tracking-tight text-gray-700 font-caveat py-4"
      >We're finally tying the knot in...</span
    >
    <div class="flex justify-center py-4">
      <div class="flex flex-wrap overflow-hidden md:w-1/2">
        <!-- Days -->
        <div
          class="
            my-3
            px-3
            w-1/2
            overflow-hidden
            sm:w-1/4
            md:w-1/2
            lg:w-1/4
            xl:w-1/4
          "
        >
          <div class="text-gray-700 text-center">
            <component
              :is="component"
              :progress="this.progress.days"
              v-bind="options"
              :legend-value="this.days"
            >
            </component>
            <div class="font-body text-base">
              <p slot="legend-caption">days</p>
            </div>
          </div>
        </div>

        <!-- Hours -->
        <div
          class="
            my-3
            px-3
            w-1/2
            overflow-hidden
            sm:w-1/4
            md:w-1/2
            lg:w-1/4
            xl:w-1/4
          "
        >
          <div class="text-gray-700 text-center">
            <component
              :is="component"
              :progress="this.progress.hours"
              v-bind="options"
              :legend-value="this.hours"
            >
            </component>
            <div class="font-body text-base">
              <p slot="legend-caption">hours</p>
            </div>
          </div>
        </div>

        <!-- Minutes -->
        <div
          class="
            my-3
            px-3
            w-1/2
            overflow-hidden
            sm:w-1/4
            md:w-1/2
            lg:w-1/4
            xl:w-1/4
          "
        >
          <div class="text-gray-700 text-center">
            <component
              :is="component"
              :progress="this.progress.minutes"
              v-bind="options"
              :legend-value="this.minutes"
            >
            </component>
            <div class="font-body text-base">
              <p slot="legend-caption">minutes</p>
            </div>
          </div>
        </div>

        <!-- Seconds -->
        <div
          class="
            my-3
            px-3
            w-1/2
            overflow-hidden
            sm:w-1/4
            md:w-1/2
            lg:w-1/4
            xl:w-1/4
          "
        >
          <div class="text-gray-700 text-center">
            <component
              :is="component"
              :progress="this.progress.seconds"
              v-bind="options"
              :legend-value="this.seconds"
            >
            </component>
            <div class="font-body text-base">
              <p slot="legend-caption">seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      component: "vue-ellipse-progress",
      options: {
        color: "#9ab5d4",
        "empty-color": "#e9c77b",
        size: 120,
        thickness: 7,
        "empty-thickness": 4,
        "line-mode": "out 5",
        animation: "reverse 1000 700",
        legendClass: "font-body text-gray-700 text-4xl",
      },
      progress: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      seconds: "0",
      minutes: "0",
      hours: "0",
      days: "0",
      distance: 0,
      countdown: null,
      weddingDate: new Date("01/16/2022"),
    };
  },
  computed: {
    myFormatter({ currentValue }) {
      return !currentValue ? "0" : currentValue;
    },
  },
  mounted() {
    this.start();
  },
  methods: {
    calculateProgress: function (value, factor) {
      return (factor - value) * (100 / factor);
    },
    start: function () {
      this.countdown = setInterval(() => {
        // get total seconds between the times
        const now = new Date();
        let distance =
          Math.abs(this.weddingDate.getTime() - now.getTime()) / 1000;

        // calculate (and subtract) whole days
        const days = Math.floor(distance / 86400);
        distance -= days * 86400;

        // calculate (and subtract) whole hours
        const hours = Math.floor(distance / 3600) % 24;
        distance -= hours * 3600;

        // calculate (and subtract) whole minutes
        const minutes = Math.floor(distance / 60) % 60;
        distance -= minutes * 60;

        // what's left
        const seconds = Math.floor(distance % 60);

        // Calculate Progress
        this.progress.days = this.calculateProgress(days, 365);
        this.progress.hours = this.calculateProgress(hours, 24);
        this.progress.minutes = this.calculateProgress(minutes, 60);
        this.progress.seconds = this.calculateProgress(seconds, 60);

        // Set Times
        this.days = days.toString();
        this.hours = hours.toString();
        this.minutes = minutes.toString();
        this.seconds = seconds.toString();
        this.distance = distance.toString();

        // Stop
        if (this.distance < 0) {
          clearInterval(this.countdown);
          this.days = "0";
          this.hours = "0";
          this.minutes = "0";
          this.seconds = "0";
        }
        // Call function every second
      }, 1000);
    },
  },
};
</script>
