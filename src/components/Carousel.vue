<template>
  <vue-flux :options="options" :images="images" :transitions="transitions">
    <flux-pagination slot="pagination"></flux-pagination>
  </vue-flux>
</template>

<script>
import { VueFlux, FluxPagination, Transitions } from "vue-flux";

export default {
  name: "Carousel",
  components: {
    VueFlux,
    FluxPagination,
  },
  data: () => ({
    options: {
      allowFullscreen: false,
      allowToSkipTransition: true,
      autohideTime: 2500,
      autoplay: true,
      bindKeys: false,
      delay: 3000,
      enableGestures: true,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3,
    },
    images: [
      require("@/assets/story/home01.jpg"),
      require("@/assets/story/home02.jpg"),
      require("@/assets/story/home03.jpg"),
      require("@/assets/story/home04.jpg"),
      require("@/assets/story/home05.jpg"),
    ],
    transitions: {
      transitionFade: Transitions.transitionFade,
    },
  }),
};
</script>
