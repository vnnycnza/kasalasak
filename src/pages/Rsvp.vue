<template>
  <div class="rsvp">
  <div
    v-bind:class="{ hidden: showMenu }"
    id="rsvp"
    class="container mx-auto my-auto item-center justify-center"
  ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Rsvp",
  components: {},
  computed: {
    ...mapGetters({
      showMenu: "getShowMenu",
    }),
  },
};
</script>

<style scoped>
.rsvp {
  padding-bottom:144px; 
}
</style>