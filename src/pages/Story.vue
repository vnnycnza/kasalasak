<template>
  <div class="story">
    Story
  <div
    v-bind:class="{ hidden: showMenu }"
    id="story"
    class="container mx-auto my-auto item-center justify-center h-3/4"
  ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Story",
  components: {},
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
};
</script>

<style scoped>
.story {
  padding-bottom:144px; 
}
</style>