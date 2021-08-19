<template>
  <nav class="flex items-center justify-between flex-wrap bg-theme-100 p-3">
    <div class="flex items-center flex-shrink-0 text-gray-700 px-2">
    <svg id="logo" class="mr-2" height="50" viewBox="0 0 600 600" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m377.797 238.228c-2.021-8.289-10.246-13.582-18.684-11.888-8.665 1.735-14.282 10.166-12.547 18.831.41 2.065 3.991 13.425 5.321 29.72 7.242 71.512-38.698 144.745-113.883 167.049-8.472 2.513-13.302 11.418-10.789 19.89 2.509 8.457 11.402 13.306 19.89 10.789 99.169-29.421 158.221-133.267 130.692-234.391zm.025.104c.063.258.1.445.121.554-.037-.186-.078-.37-.121-.554z" fill="#e1c3a7"/><path d="m184.344 448.318c-2.402 0-11.428-.695-22.634-2.759-118.6-23.157-174.739-170.255-86.76-265.436 71.492-77.345 193.211-66.524 251.782 21.331 4.902 7.352 14.836 9.339 22.188 4.438 7.353-4.902 9.34-14.836 4.438-22.188-51.182-76.773-141.239-102.333-216.802-79.11-65.877 20.245-116.92 75.584-132.02 142.531-22.993 101.94 43.598 208.913 151.13 229.859 7.799 1.471 21.124 3.335 28.679 3.335 8.836 0 16-7.164 16-16s-7.164-16.001-16.001-16.001z" fill="#e1c3a7"/><path d="m344.465 512.508c-92.636 0-168-75.364-168-168s75.364-168 168-168 168 75.364 168 168-75.365 168-168 168zm0-304c-74.99 0-136 61.009-136 136s61.01 136 136 136 136-61.009 136-136-61.01-136-136-136z" fill="#f3d4b7"/><path d="m512.914 62.868c0 13.87-4 26.48-10.35 37.75-23.7 42.05-80.06 65.48-83.06 66.71-3.771 1.536-8.125 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.068 57.442-80.108 99.45-51.13 41.388-28.55 99.45.455 99.45 51.13z" fill="#f79caf"/><path d="m501.574 102.328c-24.24 40.97-79.11 63.79-82.07 65-3.77 1.54-8.13 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-24.21 13.43-43.74 32.05-54.17-2.6 6.78-4.05 14.22-4.05 22.17 0 65.64 89.6 102.9 93.41 104.46 3.95 1.61 8.31 1.54 12.08 0 2.07-.85 29.471-12.24 54.07-33z" fill="#e3889b"/></g></svg>
    <span class="text-3xl tracking-tight font-caveat">jm & vanny</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center pt-2">
      <ul class="flex flex-col lg:flex-row list-none ml-auto text-xl font-body text-gray-200">
        <li class="nav-item">
          <a class="px-3 flex items-center hover:opacity-75" href="#pablo">
            <span class="ml-2">home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="px-3 flex items-center hover:opacity-75" href="#pablo">
            <span class="ml-2">event</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="px-3 flex items-center hover:opacity-75" href="#pablo">
            <span class="ml-2">faqs</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="flex items-center hover:opacity-75" href="#pablo">
            <span class="ml-2">our story</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div>
    </div> -->
  </nav>
  <!-- <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-lightBlue-500 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <svg id="Layer_1" height="50" viewBox="0 0 600 600" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m377.797 238.228c-2.021-8.289-10.246-13.582-18.684-11.888-8.665 1.735-14.282 10.166-12.547 18.831.41 2.065 3.991 13.425 5.321 29.72 7.242 71.512-38.698 144.745-113.883 167.049-8.472 2.513-13.302 11.418-10.789 19.89 2.509 8.457 11.402 13.306 19.89 10.789 99.169-29.421 158.221-133.267 130.692-234.391zm.025.104c.063.258.1.445.121.554-.037-.186-.078-.37-.121-.554z" fill="#e1c3a7"/><path d="m184.344 448.318c-2.402 0-11.428-.695-22.634-2.759-118.6-23.157-174.739-170.255-86.76-265.436 71.492-77.345 193.211-66.524 251.782 21.331 4.902 7.352 14.836 9.339 22.188 4.438 7.353-4.902 9.34-14.836 4.438-22.188-51.182-76.773-141.239-102.333-216.802-79.11-65.877 20.245-116.92 75.584-132.02 142.531-22.993 101.94 43.598 208.913 151.13 229.859 7.799 1.471 21.124 3.335 28.679 3.335 8.836 0 16-7.164 16-16s-7.164-16.001-16.001-16.001z" fill="#e1c3a7"/><path d="m344.465 512.508c-92.636 0-168-75.364-168-168s75.364-168 168-168 168 75.364 168 168-75.365 168-168 168zm0-304c-74.99 0-136 61.009-136 136s61.01 136 136 136 136-61.009 136-136-61.01-136-136-136z" fill="#f3d4b7"/><path d="m512.914 62.868c0 13.87-4 26.48-10.35 37.75-23.7 42.05-80.06 65.48-83.06 66.71-3.771 1.536-8.125 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.068 57.442-80.108 99.45-51.13 41.388-28.55 99.45.455 99.45 51.13z" fill="#f79caf"/><path d="m501.574 102.328c-24.24 40.97-79.11 63.79-82.07 65-3.77 1.54-8.13 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-24.21 13.43-43.74 32.05-54.17-2.6 6.78-4.05 14.22-4.05 22.17 0 65.64 89.6 102.9 93.41 104.46 3.95 1.61 8.31 1.54 12.08 0 2.07-.85 29.471-12.24 54.07-33z" fill="#e3889b"/></g></svg>
      <span class="text-3xl tracking-tight font-caveat">jm & vanny</span>
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
          lightBlue Color
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2">Share</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">Tweet</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>