<template>
  <vue-flux :options="options" :images="images" :transitions="transitions">
    <flux-controls slot="controls"></flux-controls>
    <flux-index slot="index"></flux-index>
  </vue-flux>
</template>

<script>
import { VueFlux, FluxIndex, Transitions, FluxControls } from "vue-flux";

export default {
  name: "GalleryView",
  components: {
    VueFlux,
    FluxIndex,
    FluxControls,
  },
  data: () => ({
    options: {
      allowFullscreen: false,
      allowToSkipTransition: true,
      autohideTime: 3000,
      autoplay: true,
      bindKeys: false,
      delay: 2500,
      enableGestures: true,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3,
    },
    images: [
      require("@/assets/gallery/gallery148.jpg"),
      require("@/assets/gallery/gallery089.jpg"),
      require("@/assets/gallery/gallery096.jpg"),
      require("@/assets/gallery/gallery001.jpg"),
      require("@/assets/gallery/gallery003.jpg"),
      require("@/assets/gallery/gallery007.jpg"),
      require("@/assets/gallery/gallery011.jpg"),
      require("@/assets/gallery/gallery014.jpg"),
      require("@/assets/gallery/gallery016.jpg"),
      require("@/assets/gallery/gallery019.jpg"),
      require("@/assets/gallery/gallery038.jpg"),
      require("@/assets/gallery/gallery049.jpg"),
      require("@/assets/gallery/gallery053.jpg"),
      require("@/assets/gallery/gallery054.jpg"),
      require("@/assets/gallery/gallery060.jpg"),
      require("@/assets/gallery/gallery067.jpg"),
      require("@/assets/gallery/gallery068.jpg"),
      require("@/assets/gallery/gallery070.jpg"),
      require("@/assets/gallery/gallery078.jpg"),
      require("@/assets/gallery/gallery080.jpg"),
      require("@/assets/gallery/gallery081.jpg"),
      require("@/assets/gallery/gallery086.jpg"),
      require("@/assets/gallery/gallery095.jpg"),
      require("@/assets/gallery/gallery098.jpg"),
      require("@/assets/gallery/gallery099.jpg"),
      require("@/assets/gallery/gallery103.jpg"),
      require("@/assets/gallery/gallery104.jpg"),
      require("@/assets/gallery/gallery107.jpg"),
      require("@/assets/gallery/gallery114.jpg"),
      require("@/assets/gallery/gallery119.jpg"),
      require("@/assets/gallery/gallery117.jpg"),
      require("@/assets/gallery/gallery120.jpg"),
      require("@/assets/gallery/gallery125.jpg"),
      require("@/assets/gallery/gallery130.jpg"),
      require("@/assets/gallery/gallery132.jpg"),
      require("@/assets/gallery/gallery138.jpg"),
      require("@/assets/gallery/gallery140.jpg"),
      require("@/assets/gallery/gallery142.jpg"),
      require("@/assets/gallery/gallery145.jpg"),
      require("@/assets/gallery/gallery173.jpg"),
      require("@/assets/gallery/gallery176.jpg"),
      require("@/assets/gallery/gallery178.jpg"),
      require("@/assets/gallery/gallery181.jpg"),
      require("@/assets/gallery/gallery184.jpg"),
      require("@/assets/gallery/gallery212.jpg"),
      require("@/assets/gallery/gallery224.jpg"),
      require("@/assets/gallery/gallery231.jpg"),
      require("@/assets/gallery/gallery241.jpg"),
      require("@/assets/gallery/gallery228.jpg"),
      require("@/assets/gallery/gallery242.jpg"),
    ],
    transitions: {
      transitionFade: Transitions.transitionFade,
    },
  }),
};
</script>
