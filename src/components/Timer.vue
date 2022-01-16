<template>
  <div class="m-2">
    <div class="flex justify-center">
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
              <p slot="legend-caption" v-html="daysCaption"></p>
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
              <p slot="legend-caption" v-html="hoursCaption"></p>
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
              <p slot="legend-caption" v-html="minutesCaption"></p>
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
              <p slot="legend-caption" v-html="secondsCaption"></p>
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
      weddingDate: new Date("Saturday, August 27, 2022 3:00:00 PM GMT+08:00"),
      daysCaption: "days",
      secondsCaption: "seconds",
      minutesCaption: "minutes",
      hoursCaption: "hours",
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

        this.daysCaption = days > 1 ? "days" : "day";
        this.hoursCaption = hours > 1 ? "hours" : "hour";
        this.minutesCaption = minutes > 1 ? "minutes" : "minute";
        this.secondsCaption = seconds > 1 ? "seconds" : "second";

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
