<template>
  <transition class="fade">
    <div class="container mx-auto my-auto items-center justify-center">
      <div class="flex item-center justify-center">
        <div id="pagetop" class="flex animate-bounce" @click="toTop">
          <svg
            id="back-to-top"
            fill="#e9c77b"
            enable-background="new 0 0 64 64"
            height="80"
            viewBox="0 0 64 64"
            width="80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m32 8c-13.234 0-24 10.766-24 24s10.766 24 24 24 24-10.766 24-24-10.766-24-24-24zm0 44c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"
            />
            <path
              d="m34.829 33.172c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.81 1.153l-6.586 6.414c-.791.771-.808 2.037-.037 2.828.77.791 2.037.808 2.828.037l6.623-6.414 6.586 6.414c.39.38.893.568 1.396.568.521 0 1.041-.202 1.433-.604.771-.792.754-2.058-.037-2.828z"
            />
            <path
              d="m34.829 22.172c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.81 1.153l-6.586 6.414c-.791.771-.808 2.037-.037 2.828.77.791 2.037.809 2.828.037l6.623-6.414 6.586 6.414c.39.38.893.568 1.396.568.521 0 1.041-.202 1.433-.604.771-.792.754-2.058-.037-2.828z"
            />
          </svg>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Scroll",
  methods: {
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
