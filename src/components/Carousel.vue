<template>
  <div class="carousel relative overflow-hidden shadow-xl">
    <div class="carousel-inner relative overflow-hidden w-full">
      <!--Slide 1-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-1"
        name="carousel"
        aria-hidden="true"
        hidden=""
        :checked="active === 0"
      />
      <div
        class="carousel-item absolute img"
        v-bind:style="{
          'background-image': 'url(' + require(`../assets/${image1}`) + ')',
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
          'background-attachment': 'fixed',
          opacity: '0.75',
          height: '90vh',
        }"
      ></div>
      <!--Slide 2-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-2"
        name="carousel"
        aria-hidden="true"
        hidden=""
        :checked="active === 1"
      />
      <div
        id="secondImage"
        class="carousel-item absolute object-contain"
        v-bind:style="{
          'background-image': 'url(' + require(`../assets/${image2}`) + ')',
          'background-size': 'cover',
          'background-position': '70% 50%',
          'background-repeat': 'no-repeat',
          'background-attachment': 'fixed',
          opacity: '0.75',
          height: '90vh',
          'min-height': '100%',
        }"
      ></div>

      <!--Slide 3-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-3"
        name="carousel"
        aria-hidden="true"
        hidden=""
        :checked="active === 2"
      />
      <div
        class="carousel-item absolute"
        v-bind:style="{
          'background-image': 'url(' + require(`../assets/${image3}`) + ')',
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
          'background-attachment': 'fixed',
          opacity: '0.75',
          height: '90vh',
        }"
      ></div>

      <!-- Add additional indicators for each slide-->
      <ol class="flex carousel-indicators justify-center">
        <li class="inline-block mx-6">
          <label
            for="carousel-1"
            class="
              carousel-bullet
              cursor-pointer
              block
              text-4xl text-white
              hover:text-blue-700
            "
            >•</label
          >
        </li>
        <li class="inline-block mx-6">
          <label
            for="carousel-2"
            class="
              carousel-bullet
              cursor-pointer
              block
              text-4xl text-white
              hover:text-blue-700
            "
            >•</label
          >
        </li>
        <li class="inline-block mx-6">
          <label
            for="carousel-3"
            class="
              carousel-bullet
              cursor-pointer
              block
              text-4xl text-white
              hover:text-blue-700
            "
            >•</label
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      image1: "story/home01.png",
      image2: "story/home02.png",
      image3: "story/home03.png",
      check: [true, false, false],
      active: 1,
    };
  },
  mounted() {
    this.check = [true, false, false];
    document.getElementById("carousel-1").checked = true;
    setInterval(() => {
      this.rotate();
    }, 2000);
  },
  methods: {
    rotate: function () {
      const currentlyActive = this.check.indexOf(true);
      let newActive = 0;

      if (currentlyActive == this.check.length - 1) {
        this.check = [true, false, false];
      } else {
        this.check[currentlyActive] = false;
        this.check[currentlyActive + 1] = true;
        newActive = currentlyActive + 1;
      }

      this.active = newActive;
    },
  },
};
</script>

<style scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

@media only screen and (min-width: 768px) {
  /* Specific to this particular image */
  #secondImage {
    background-position: center;
  }
}
</style>
