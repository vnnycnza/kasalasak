<template>
  <div class="home">
    <div
      v-bind:class="{ hidden: showMenu }"
      id="home"
      class="container mx-auto my-auto item-center justify-center"
    >
      <Timer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Timer from "../components/Timer";

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

<style scoped>
.home {
  padding-bottom: 144px;
}
</style>
