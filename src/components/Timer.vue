<template>
  <div class="m-2">
    <div class="flex justify-center">
      <div class="flex flex-wrap overflow-hidden md:w-1/2">
        <!-- years -->
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
              :progress="this.progress.years"
              v-bind="options"
              :legend-value="this.years"
            >
            </component>
            <div class="font-body text-base">
              <p slot="legend-caption" v-html="yearsCaption"></p>
            </div>
          </div>
        </div>

        <!-- months -->
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
              :progress="this.progress.months"
              v-bind="options"
              :legend-value="this.months"
            >
            </component>
            <div class="font-body text-base">
              <p slot="legend-caption" v-html="monthsCaption"></p>
            </div>
          </div>
        </div>

        <!-- days -->
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

        <!-- hours -->
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
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from "moment";
import "moment-precise-range-plugin";

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
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
      },
      hours: "0",
      days: "0",
      months: "0",
      years: "0",
      distance: 0,
      countdown: null,
      weddingDate: new Date("January 26, 2022 10:00:00 AM GMT+08:00"),
      yearsCaption: "years",
      hoursCaption: "hours",
      daysCaption: "days",
      monthsCaption: "months",
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
    calculateProgress: function (value, total) {
      return (value / total) * 100;
    },
    start: function () {
      this.countdown = setInterval(() => {
        const m1 = moment("2022-01-26 10:00:00.00+08:00", "YYYY-MM-DD HH:mm Z");
        const m2 = moment();
        const diff = moment.preciseDiff(m1, m2, true);

        const { years, months, days, hours } = diff;

        // Set captions
        this.yearsCaption = years > 1 ? "years" : "year";
        this.monthsCaption = months > 1 ? "months" : "month";
        this.daysCaption = days > 1 ? "days" : "day";
        this.hoursCaption = hours > 1 ? "hours" : "hour";

        // Calculate Progress
        this.progress.years = this.calculateProgress(years, 60);
        this.progress.months = this.calculateProgress(months, 12);
        this.progress.days = this.calculateProgress(days, 60);
        this.progress.hours = this.calculateProgress(hours, 60);

        // Set values
        this.years = years.toString();
        this.months = months.toString();
        this.days = days.toString();
        this.hours = hours.toString();

        // Call function every 3s
      }, 3000);
    },
  },
};
</script>
