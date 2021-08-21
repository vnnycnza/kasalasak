<template>
  <div v-bind:class="{ hidden: showMenu }" id="home" class="container mx-auto">
    <Timer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Timer from "./Timer.vue";

export default {
  name: "Home",
  components: {
    Timer,
  },
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
};
</script>
