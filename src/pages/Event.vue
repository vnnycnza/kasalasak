<template>
  <div id="event-page" class="event-page" v-bind:class="{ hidden: showMenu }">
    <section id="venue-details">
      <div class="container mx-auto my-auto item-center justify-center">
        <div class="mx-4 mt-8 mb-6 xl:mt-12">
          <!-- Icon -->
          <div class="flex item-center justify-center py-4">
            <svg
              id="Layer_1"
              enable-background="new 0 0 512 512"
              height="80"
              viewBox="0 0 512 512"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m432 40v432c0 8.84-7.16 16-16 16h-320c-8.84 0-16-7.16-16-16v-432c0-8.84 7.16-16 16-16h320c8.84 0 16 7.16 16 16z"
                  fill="#e2e0e0"
                />
                <path
                  d="m360.03 192.14c-20.51 54.5-94.37 85.2-97.99 86.68-3.771 1.536-8.125 1.61-12.08 0-4.21-1.72-103.23-42.89-103.23-115 0-55.304 63.937-87.381 109.27-54.85 53.513-38.401 130.388 13.07 104.03 83.17z"
                  fill="#f79caf"
                />
                <path
                  d="m432 440v32c0 8.84-7.16 16-16 16h-320c-8.84 0-16-7.16-16-16v-432c0-8.84 7.16-16 16-16h32v320c0 53.02 42.98 96 96 96z"
                  fill="#cecccc"
                />
                <path
                  d="m464 0c-8.837 0-16 7.164-16 16v8h-384v-8c0-8.836-7.163-16-16-16s-16 7.164-16 16v48c0 8.836 7.163 16 16 16s16-7.164 16-16v-8h384v8c0 8.836 7.163 16 16 16s16-7.164 16-16v-48c0-8.836-7.163-16-16-16z"
                  fill="#a18b76"
                />
                <path
                  d="m464 432c-8.837 0-16 7.164-16 16v8h-384v-8c0-8.836-7.163-16-16-16s-16 7.164-16 16v48c0 8.836 7.163 16 16 16s16-7.164 16-16v-8h384v8c0 8.836 7.163 16 16 16s16-7.164 16-16v-48c0-8.836-7.163-16-16-16z"
                  fill="#a18b76"
                />
                <path
                  d="m360.03 192.14c-20.51 54.5-94.37 85.2-97.99 86.68-3.77 1.54-8.13 1.61-12.08 0-4.21-1.72-103.23-42.89-103.23-115 0-23.66 11.7-43.06 28.64-54.98-1.07 4.76-1.64 9.77-1.64 14.98 0 72.11 99.02 113.28 103.23 115 3.95 1.61 8.31 1.54 12.08 0 2.61-1.07 41.68-17.3 70.99-46.68z"
                  fill="#e3889b"
                />
                <g fill="#98d7ce">
                  <path
                    d="m344 352h-176c-8.837 0-16-7.164-16-16s7.163-16 16-16h176c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
                  />
                  <path
                    d="m344 416h-176c-8.837 0-16-7.164-16-16s7.163-16 16-16h176c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
                  />
                </g>
              </g>
            </svg>
          </div>

          <!-- Event Details -->
          <div class="flex item-center justify-center">
            <span class="text-3xl md:text-4xl text-gray-700 font-caveat">
              Event Details
            </span>
          </div>

          <!-- HR -->
          <hr
            class="border-gray text-center text-2xl mt-2"
            style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
          />

          <!-- Event Date -->
          <div class="flex item-center justify-center py-4">
            <span class="text-xl md:text-2xl text-gray-700 font-body">
              Wedding Date | 01. 16. 2022
            </span>
          </div>

          <!-- Timer -->
          <Timer />

          <!-- Venue -->
          <div class="flex justify-center items-center">
            <div class="flex flex-wrap -mx-2 overflow-hidden pb-6 items-right">
              <div
                class="
                  my-2
                  px-2
                  w-full
                  overflow-hidden
                  sm:w-1/2
                  md:w-full
                  lg:w-1/2
                  xl:w-1/2
                "
              >
                <div
                  class="flex-row p-4 w-full h-full mx-auto my-auto space-y-4"
                >
                  <!-- Venue Details -->
                  <div class="flex space-x-4 py-2">
                    <div class="w-12">
                      <svg
                        id="Layer_1"
                        enable-background="new 0 0 512.041 512.041"
                        height="50"
                        viewBox="0 0 512.041 512.041"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="m496.02 512.025c-1.292 0-2.594-.157-3.88-.478l-123.844-30.961-107.88 30.823c-2.873.821-5.918.821-8.791 0l-107.88-30.823-123.844 30.961c-5.63 1.408-11.585-.345-15.554-4.581-3.97-4.236-5.334-10.289-3.565-15.818l64-200c1.688-5.275 5.985-9.303 11.359-10.646l86.86-21.71c1.269-.317 2.572-.478 3.88-.478h178.28c1.308 0 2.611.16 3.88.478l86.86 21.71c5.374 1.343 9.671 5.371 11.359 10.646l64 200c1.77 5.529.405 11.583-3.565 15.818-3.064 3.268-7.309 5.059-11.675 5.059z"
                            fill="#acebe2"
                          />
                          <g fill="#98d7ce">
                            <path
                              d="m272.021 376.024v132.07c-18.576 5.291-13.623 5.234-32 0v-132.07c0-8.84 7.16-16 16-16s16 7.16 16 16z"
                            />
                            <path
                              d="m194.521 258.314c-6.73 40.35-35.85 215.19-37.66 226.02l-13.12-3.75-19.52 4.88c28.96-173.77 35.47-212.87 37.73-226.39 4.14-.97 3.84-.76 4.93-.76z"
                            />
                            <path
                              d="m387.811 485.464-19.51-4.88-13.11 3.75c-28-168.01-34.81-208.86-37.68-226.06 32.86.01 29.92.11 31.53.52.32.08.67.17 1.04.26 3.31 19.86 11.24 67.45 37.73 226.41z"
                            />
                            <path
                              d="m403.091 272.304c-29.187 51.008-76.649 105.51-115.29 139.7-18.296 16.116-45.477 15.924-63.53.03-39.974-35.403-86.619-89.571-115.32-139.73 1.632-.408 52.408-13.103 54.05-13.51 2.817-.71-8.634-.48 182.16-.48 2.799 0-.867-.706 57.93 13.99z"
                            />
                          </g>
                          <path
                            d="m408.021 152.024c0 109.96-135.64 230.9-141.41 236-6.009 5.295-15.084 5.372-21.18 0-5.77-5.1-141.41-126.04-141.41-236 0-83.81 68.19-152 152-152s152 68.19 152 152z"
                            fill="#f79caf"
                          />
                          <path
                            d="m408.021 152.024c0 109.96-135.64 230.9-141.41 236-3.03 2.67-6.81 4-10.59 4-7.231 0-10.731-4.038-16-8.93 26.26-24.37 136-132.16 136-231.07 0-78.41-59.68-143.14-136-151.16 89.5-9.528 168 60.951 168 151.16z"
                            fill="#e3889b"
                          />
                          <circle
                            cx="256.021"
                            cy="152.024"
                            fill="#e2e0e0"
                            r="88"
                          />
                          <path
                            d="m344.021 152.024c0 54.991-50.071 96.516-104 86.54 40.91-7.54 72-43.48 72-86.54s-31.09-79-72-86.54c53.855-9.961 104 31.48 104 86.54z"
                            fill="#cecccc"
                          />
                          <path
                            d=""
                            style="
                              fill: none;
                              stroke: #000;
                              stroke-width: 32;
                              stroke-linecap: round;
                              stroke-linejoin: round;
                              stroke-miterlimit: 10;
                            "
                          />
                          <path
                            d=""
                            style="
                              fill: none;
                              stroke: #000;
                              stroke-width: 32;
                              stroke-linecap: round;
                              stroke-linejoin: round;
                              stroke-miterlimit: 10;
                            "
                          />
                        </g>
                      </svg>
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="text-lg text-left text-blue-800 font-body">
                        The Emerald Events Place
                      </div>
                      <div class="text-xs text-gray-700 font-body">
                        Cabrera Rd, Antipolo, Rizal
                      </div>
                      <div class="text-xs text-gray-700 font-body">
                        <a
                          class="focus:underline hover:text-theme-300"
                          target="_blank"
                          href="https://www.waze.com/en/live-map/directions/the-emerald-events-place-marigman-rd-1-antipolo?place=w.79429778.794035633.18752926"
                        >
                          Waze ·
                        </a>
                        <a
                          class="focus:underline hover:text-theme-300"
                          target="_blank"
                          href="https://g.page/Emeraldeventsplace?share"
                        >
                          Google
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Ceremony -->
                  <div class="flex space-x-4 py-2">
                    <div class="w-12">
                      <svg
                        id="Layer_1"
                        enable-background="new 0 0 512 512"
                        height="50"
                        viewBox="0 0 512 512"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="m256 512c-35.29 0-64-28.71-64-64 0-15.784 5.794-30.941 16.315-42.679 5.897-6.581 16.013-7.133 22.594-1.235 6.58 5.898 43.601 5.898 50.181 0 6.579-5.898 16.695-5.346 22.594 1.234 10.521 11.739 16.316 26.896 16.316 42.68 0 35.29-28.71 64-64 64z"
                            fill="#f3d4b7"
                          />
                          <path
                            d="m256 96c-26.467 0-48-21.533-48-48s21.533-48 48-48c26.468 0 48 21.533 48 48s-21.532 48-48 48zm0-64c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                            fill="#e1c3a7"
                          />
                          <path
                            d="m472 416c0 8.84-7.16 16-16 16h-400c-8.84 0-16-7.16-16-16s7.16-16 16-16h17.07c14.83-16.99 22.93-38.5 22.93-61.25v-114.75c0-88.572 72.15-160 160-160 88.22 0 160 71.78 160 160v114.75c0 23.347 8.518 44.746 22.93 61.25h17.07c8.84 0 16 7.16 16 16z"
                            fill="#f3d4b7"
                          />
                          <path
                            d="m472 416c0 8.84-7.16 16-16 16h-400c-8.84 0-16-7.16-16-16s7.16-16 16-16h17.07c14.83-16.99 22.93-38.5 22.93-61.25v-114.75c0-40.57 15.14-77.55 40-105.71v108.71c0 86.71 70.29 157 157 157h134.67c3.18 5.72 6.96 11.08 11.26 16h17.07c8.84 0 16 7.16 16 16z"
                            fill="#e1c3a7"
                          />
                          <path
                            d="m355.45 230.36c0 16.12-5.4 30.53-13.62 43.11-25.21 38.68-76.92 60.17-79.79 61.35-3.765 1.533-8.117 1.613-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.234 57.575-80.016 99.45-51.13 41.388-28.55 99.45.455 99.45 51.13z"
                            fill="#f79caf"
                          />
                          <path
                            d="m345.73 266.96c-1.21 2.22-2.52 4.39-3.9 6.51-25.21 38.68-76.92 60.17-79.79 61.35-3.76 1.53-8.12 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-26.95 16.58-48.02 38.42-57.29-1.57 5.42-2.42 11.2-2.42 17.29 0 65.64 89.6 102.9 93.41 104.46 3.96 1.61 8.32 1.53 12.08 0 1.89-.78 24.96-10.36 47.69-27.86z"
                            fill="#e3889b"
                          />
                        </g>
                      </svg>
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="text-lg text-left text-blue-800 font-body">
                        Ceremony starts at 3pm
                      </div>
                      <div class="text-xs text-gray-700 font-body">
                        Photos & cocktails follow
                      </div>
                    </div>
                  </div>

                  <!-- Reception -->
                  <div class="flex space-x-4 py-2">
                    <div class="w-12">
                      <svg
                        id="Layer_1"
                        enable-background="new 0 0 512.102 512.102"
                        height="50"
                        viewBox="0 0 512.102 512.102"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="m256.051 208.102c-8.836 0-16-7.164-16-16v-40c0-8.836 7.164-16 16-16s16 7.164 16 16v40c0 8.837-7.163 16-16 16z"
                            fill="#cecccc"
                          />
                          <path
                            d="m416.051 192.102v152c0 8.84-7.16 16-16 16h-288c-8.84 0-16-7.16-16-16v-152c0-8.84 7.16-16 16-16h288c8.84 0 16 7.16 16 16z"
                            fill="#e2e0e0"
                          />
                          <path
                            d="m416.051 304.102v40c0 8.84-7.16 16-16 16h-288c-8.84 0-16-7.16-16-16v-152c0-8.84 7.16-16 16-16h32v8c0 66.27 53.73 120 120 120z"
                            fill="#cecccc"
                          />
                          <path
                            d="m464.051 344.102v152c0 8.84-7.16 16-16 16h-384c-8.84 0-16-7.16-16-16v-152c0-8.84 7.16-16 16-16h384c8.84 0 16 7.16 16 16z"
                            fill="#e2e0e0"
                          />
                          <path
                            d="m464.051 472.102v24c0 8.84-7.16 16-16 16h-384c-8.84 0-16-7.16-16-16v-152c0-8.84 7.16-16 16-16h24v4c0 77.32 62.68 140 140 140z"
                            fill="#cecccc"
                          />
                          <path
                            d="m400.051 176.102c-8.836 0-16 7.164-16 16 0 26.019-14.654 48-32 48s-32-21.981-32-48c0-8.836-7.164-16-16-16s-16 7.164-16 16c0 26.019-14.654 48-32 48s-32-21.981-32-48c0-8.836-7.164-16-16-16s-16 7.164-16 16c0 26.019-14.654 48-32 48s-32-21.981-32-48c0-8.836-7.164-16-16-16s-16 7.164-16 16c0 20.534 6.129 40.016 17.259 54.855 25.409 33.879 69.685 33.687 94.741-1.76 25.308 35.803 70.627 35.89 96 0 25.035 35.411 69.302 35.679 94.741 1.76 11.129-14.839 17.259-34.321 17.259-54.855 0-8.836-7.163-16-16-16z"
                            fill="#f79caf"
                          />
                          <path
                            d="m448.051 328.102c-8.836 0-16 7.164-16 16 0 26.019-14.654 48-32 48s-32-21.981-32-48c0-8.836-7.164-16-16-16s-16 7.164-16 16c0 26.019-14.654 48-32 48s-32-21.981-32-48c0-8.836-7.164-16-16-16s-16 7.164-16 16c0 26.019-14.654 48-32 48s-32-21.981-32-48c0-8.836-7.164-16-16-16s-16 7.164-16 16c0 26.019-14.654 48-32 48s-32-21.981-32-48c0-8.836-7.164-16-16-16s-16 7.164-16 16c0 20.534 6.129 40.016 17.259 54.855 25.415 33.887 69.687 33.676 94.741-1.76 25.316 35.807 70.628 35.885 96 0 25.327 35.817 70.626 35.883 96 0 25.039 35.409 69.301 35.681 94.741 1.76 11.129-14.839 17.259-34.321 17.259-54.855 0-8.836-7.163-16-16-16z"
                            fill="#f79caf"
                          />
                          <path
                            d="m496.051 512.102h-480c-8.836 0-16-7.164-16-16s7.164-16 16-16h480c8.836 0 16 7.164 16 16s-7.163 16-16 16z"
                            fill="#a18b76"
                          />
                          <path
                            d="m355.501 62.462c0 13.87-4 26.48-10.35 37.75-23.7 42.05-80.06 65.48-83.06 66.71-3.771 1.536-8.125 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.068 57.442-80.108 99.45-51.13 41.388-28.55 99.45.455 99.45 51.13z"
                            fill="#f79caf"
                          />
                          <path
                            d="m344.161 101.922c-24.24 40.97-79.11 63.79-82.07 65-3.77 1.54-8.13 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-24.21 13.43-43.74 32.05-54.17-2.6 6.78-4.05 14.22-4.05 22.17 0 65.64 89.6 102.9 93.41 104.46 3.95 1.61 8.31 1.54 12.08 0 2.07-.85 29.47-12.24 54.07-33z"
                            fill="#e3889b"
                          />
                        </g>
                      </svg>
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="text-lg text-left text-blue-800 font-body">
                        Reception at 5pm
                      </div>
                      <div class="text-xs text-gray-700 font-body">
                        Dinner Party
                      </div>
                    </div>
                  </div>

                  <!-- RSVP -->
                  <div class="flex space-x-4 py-2">
                    <div class="w-12">
                      <svg
                        id="Layer_1"
                        enable-background="new 0 0 512 512"
                        height="50"
                        viewBox="0 0 512 512"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            d="m506.24 204.29-96 80c-10.398 8.659-26.24 1.268-26.24-12.29v-160c0-13.606 15.889-20.927 26.24-12.29l96 80c7.671 6.389 7.68 18.183 0 24.58z"
                            fill="#e1c3a7"
                          />
                          <path
                            d="m128 112v160c0 13.614-15.915 20.924-26.24 12.29l-96-80c-7.671-6.389-7.68-18.183 0-24.58l96-80c10.363-8.647 26.24-1.299 26.24 12.29z"
                            fill="#e1c3a7"
                          />
                          <path
                            d="m416 16v256c0 4.75-2.11 9.25-5.76 12.29l-144 120c-5.923 4.943-14.548 4.95-20.48 0l-144-120c-3.65-3.04-5.76-7.54-5.76-12.29v-256c0-8.84 7.16-16 16-16h288c8.84 0 16 7.16 16 16z"
                            fill="#e2e0e0"
                          />
                          <path
                            d="m355.45 142.36c0 13.87-4 26.48-10.35 37.75-23.7 42.05-80.06 65.48-83.06 66.71-3.771 1.536-8.125 1.611-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.068 57.442-80.108 99.45-51.13 41.388-28.55 99.45.455 99.45 51.13z"
                            fill="#f79caf"
                          />
                          <path
                            d="m416 192v80c0 4.75-2.11 9.25-5.76 12.29l-144 120c-5.92 4.94-14.55 4.95-20.48 0l-144-120c-3.65-3.04-5.76-7.54-5.76-12.29v-80c0 4.75 2.11 9.25 5.76 12.29l144 120c5.93 4.95 14.56 4.94 20.48 0l144-120c3.65-3.04 5.76-7.54 5.76-12.29z"
                            fill="#cecccc"
                          />
                          <path
                            d="m512 192v304c0 8.84-7.16 16-16 16h-480c-8.84 0-16-7.16-16-16v-304c0-13.606 15.889-20.927 26.24-12.29 21.519 17.938 173.574 144.641 229.76 191.46l229.76-191.46c10.363-8.647 26.24-1.299 26.24 12.29z"
                            fill="#f3d4b7"
                          />
                          <path
                            d="m512 472v24c0 8.84-7.16 16-16 16h-480c-8.84 0-16-7.16-16-16v-304c0-13.61 15.89-20.93 26.24-12.29 2.69 2.24 7.42 6.19 13.76 11.47v264.82c0 8.84 7.16 16 16 16z"
                            fill="#e1c3a7"
                          />
                          <path
                            d="m344.11 181.82c-24.24 40.97-79.11 63.79-82.07 65-3.77 1.54-8.13 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-24.21 13.43-43.74 32.05-54.17-2.6 6.78-4.05 14.22-4.05 22.17 0 65.64 89.6 102.9 93.41 104.46 3.95 1.61 8.31 1.54 12.08 0 2.07-.85 29.47-12.24 54.07-33z"
                            fill="#e3889b"
                          />
                        </g>
                      </svg>
                    </div>
                    <div class="flex-1 space-y-1">
                      <div class="text-lg text-left text-blue-800 font-body">
                        RSVP
                      </div>
                      <div
                        class="text-xs text-gray-700 font-body -mx-2 underline"
                      >
                        <router-link
                          to="/rsvp"
                          class="py-4 px-2 hover:text-blue"
                          >Click here to RSVP</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="
                  my-2
                  px-2
                  w-full
                  overflow-hidden
                  sm:w-1/2
                  md:w-full
                  lg:w-1/2
                  xl:w-1/2
                "
              >
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    rounded-md
                    w-full
                    mx-auto
                    space-y-4
                    h-1/2
                  "
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5201496679833!2d121.16254504940478!3d14.569411281698642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7fb8fce5735%3A0xc84901512d88bd1e!2sThe%20Emerald%20Events%20Place!5e0!3m2!1sen!2sph!4v1630261165373!5m2!1sen!2sph"
                    width="450"
                    height="450"
                    style="border: 0; display: block"
                    allowfullscreen=""
                    loading="lazy"
                    class="item-center"
                  ></iframe>
                  <!-- <img class="object-contain md:object-scale-down ..." src="../assets/map.png"> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="theme-and-attire" class="bg-blue-100 py-4">
      <div class="container mx-auto my-auto item-center justify-center">
        <div class="mx-4">
          <!-- Icon -->
          <div class="flex item-center justify-center py-4">
            <svg
              id="attire"
              enable-background="new 0 0 512.01 512.01"
              height="80"
              viewBox="0 0 512.01 512.01"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m512.005 105.97v358.04c0 26.47-21.53 48-48 48h-416c-26.47 0-48-21.53-48-48v-358.04c0-22.56 16.03-42.32 38.11-46.97 22.959-4.838 5.086-1.075 102.59-21.6 2.56-.517-11.812-.34 227.3-.34 2.416 0-6.017-1.622 105.89 21.94 22.08 4.65 38.11 24.41 38.11 46.97z"
                  fill="#b59f89"
                />
                <path
                  d="m509.945 477.95c-5.99 19.69-24.32 34.06-45.94 34.06h-416c-26.47 0-48-21.53-48-48v-358.04c0-21.17 14.12-39.88 34.1-45.94-1.37 4.44-2.1 9.12-2.1 13.94v358.04c0 26.47 21.53 48 48 48h416c4.85 0 9.53-.72 13.94-2.06z"
                  fill="#a18b76"
                />
                <path
                  d="m340.435 129.9-68.7 366.04c-1.41 7.58-8.02 13.07-15.73 13.07s-14.32-5.49-15.73-13.07l-68.7-366.04c-1.55-8.34 3.67-16.44 11.9-18.47 2.9-.71 5.62-2.13 7.87-4.1l24.04-21.02c6.642-5.83 16.784-5.126 22.57 1.51 9.565 10.907 26.525 10.919 36.1 0 5.773-6.622 15.913-7.353 22.57-1.51 26.044 22.774 26.028 23.679 31.88 25.12 8.25 2.01 13.48 10.12 11.93 18.47z"
                  fill="#cecccc"
                />
                <path
                  d="m256.005 512.01c-.011 0-.021.001-.033 0-.011 0-.02 0-.027 0-.008 0-.017 0-.024 0h-.001c-3.463-.019-6.703-1.146-9.343-3.073-.003-.002-.006-.004-.009-.006-.556-.406-1.087-.848-1.589-1.326-.569-.541-1.1-1.125-1.585-1.746l-159.883-199.854c-4.558-5.698-4.684-13.758-.306-19.595l40.106-53.475-63.199-70.221c-5.67-6.3-5.443-15.929.517-21.955l72-72.8c3.091-3.125 7.33-4.829 11.724-4.745 4.394.095 8.555 1.994 11.506 5.25l43.3 47.76c1.991 2.197 3.334 4.903 3.876 7.818l52.971 284.544 52.971-284.544c.542-2.915 1.885-5.622 3.876-7.818l43.3-47.76c2.951-3.256 7.112-5.154 11.506-5.25 4.375-.093 8.633 1.62 11.724 4.745l72 72.8c5.96 6.026 6.187 15.654.517 21.955l-63.199 70.221 40.106 53.475c4.378 5.837 4.252 13.897-.306 19.595l-159.884 199.853c-.485.621-1.016 1.205-1.585 1.746-.502.478-1.033.92-1.589 1.326-.003.002-.006.004-.009.006-2.64 1.927-5.88 3.055-9.343 3.073h-.001c-.01 0-.021.001-.032 0-.008 0-.019-.001-.026 0-.009.001-.018.001-.027.001z"
                  fill="#a18b76"
                />
                <path
                  d="m236.455 110.39-24.04 21.03c-32.689 28.564-84.41 5.457-84.41-38.3v-42.22c0-43.843 51.741-66.808 84.4-38.31 23.614 20.655 19.372 16.943 24.05 21.04 4.29 3.752 6.084 9.373 5.28 14.38-1.188 8.157-6.238 8.238-8.82 17.48-2.213 7.784-.332 16.192 5.03 22.31 5.823 6.654 5.171 16.764-1.49 22.59z"
                  fill="#f79caf"
                />
                <path
                  d="m384.005 50.9v42.22c0 35.481-35.634 60.135-68.75 47.65-11.206-4.183-14.512-8.344-39.7-30.38-6.651-5.817-7.323-15.924-1.49-22.59 5.355-6.11 7.246-14.516 5.03-22.31-2.521-9.022-7.657-9.496-8.82-17.48-.804-5.002.987-10.625 5.28-14.38 4.823-4.224-.106.089 24.04-21.03 32.765-28.639 84.41-5.304 84.41 38.3z"
                  fill="#f79caf"
                />
                <path
                  d="m236.455 110.39-24.04 21.03c-32.69 28.56-84.41 5.46-84.41-38.3v-40c0 43.76 51.72 66.86 84.41 38.3l19.69-17.23c.45 4.96 2.45 9.74 5.84 13.61 5.82 6.65 5.17 16.76-1.49 22.59z"
                  fill="#e3889b"
                />
                <path
                  d="m384.005 53.12v40c0 35.48-35.63 60.13-68.75 47.65-11.21-4.18-14.51-8.34-39.7-30.38-6.65-5.82-7.32-15.92-1.49-22.59 3.38-3.85 5.38-8.63 5.83-13.59 21.28 18.72 24.83 22.63 35.36 26.56 33.12 12.48 68.75-12.17 68.75-47.65z"
                  fill="#e3889b"
                />
                <path
                  d="m256.005 128.01c-48.135 0-73.604-56.977-42.12-92.89 22.285-25.475 61.971-25.465 84.25.02 31.45 35.88 6.043 92.87-42.13 92.87z"
                  fill="#f79caf"
                />
                <path
                  d="m256.005 128.01c-41.19 0-65.79-41.74-52.28-76.29 7.7 20.34 26.81 36.29 52.28 36.29 25.48 0 44.59-15.95 52.29-36.28 13.5 34.53-11.06 76.28-52.29 76.28z"
                  fill="#e3889b"
                />
              </g>
            </svg>
          </div>

          <!-- Attire -->
          <div class="flex item-center justify-center">
            <span class="text-3xl md:text-4xl text-gray-700 font-caveat">
              Theme & Attire
            </span>
          </div>

          <!-- HR -->
          <hr
            class="border-gray text-center text-2xl mt-2"
            style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
          />

          <!-- Colors -->
          <div
            class="flex items-center justify-center px-14 sm:px-12 pt-2 mx-6"
          >
            <div class="flex flex-wrap overflow-hidden md:w-1/2">
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
                <div
                  class="
                    mx-auto
                    rounded-full
                    h-20
                    w-20
                    items-center
                    justify-center
                    bg-theme-300
                  "
                ></div>
              </div>

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
                <div
                  class="
                    mx-auto
                    rounded-full
                    h-20
                    w-20
                    flex
                    items-center
                    justify-center
                    bg-theme-50
                  "
                ></div>
              </div>

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
                <div
                  class="
                    mx-auto
                    rounded-full
                    h-20
                    w-20
                    flex
                    items-center
                    justify-center
                    bg-theme-100
                  "
                ></div>
              </div>

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
                <div
                  class="
                    mx-auto
                    rounded-full
                    h-20
                    w-20
                    flex
                    items-center
                    justify-center
                    bg-theme-200
                  "
                ></div>
              </div>
            </div>
          </div>

          <!-- Attire -->
          <div
            class="flex-col item-center justify-center items-center text-center"
          >
            <div class="my-3 px-2 py-3 w-full overflow-hidden">
              <div class="flex-1 space-y-1 px-4">
                <div class="text-2xl md:text-3xl text-gray-700 font-caveat">
                  Principal Sponsors
                </div>
                <div class="text-base text-gray-600 font-body">
                  Ninongs, kindly wear black suit with a yellow necktie.
                  Ninangs, come in a gown or formal dress in yellow.
                </div>
              </div>
            </div>

            <div class="my-3 px-2 py-3 w-full overflow-hidden">
              <div class="flex-1 space-y-1 px-4">
                <div class="text-2xl md:text-3xl text-gray-700 font-caveat">
                  Groom's and Bride's Squad
                </div>
                <div class="text-base text-gray-600 mx-10 font-body">
                  We'll let you know what we'd expect you to wear. Don't worry,
                  you'll look good in it.
                </div>
              </div>
            </div>

            <div class="my-3 px-2 py-3 w-full overflow-hidden">
              <div class="flex-1 space-y-1 px-4">
                <div class="text-2xl md:text-3xl text-gray-700 font-caveat">
                  Guests
                </div>
                <div class="text-base text-gray-600 font-body">
                  Dress comfortably but look good while you're at it. If you
                  can, we'd love to see you wearing our colors.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="gifts" class="py-4">
      <div class="container mx-auto my-auto item-center justify-center">
        <div class="mx-4">
          <!-- Icon -->
          <div class="flex item-center justify-center py-4">
            <svg
              id="gifts"
              enable-background="new 0 0 512.129 512.129"
              height="80"
              viewBox="0 0 512.129 512.129"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m464.064 248.129v248c0 8.84-7.16 16-16 16h-384c-8.84 0-16-7.16-16-16v-248c0-8.84 7.16-16 16-16h384c8.841 0 16 7.16 16 16z"
                  fill="#f79caf"
                />
                <path
                  d="m464.064 464.129v32c0 8.84-7.16 16-16 16h-384c-8.84 0-16-7.16-16-16v-248c0-8.84 7.16-16 16-16h32v216c0 8.84 7.16 16 16 16z"
                  fill="#e3889b"
                />
                <path
                  d="m480.064 152.129v96c0 8.84-7.16 16-16 16h-416c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h416c8.841 0 16 7.16 16 16z"
                  fill="#f79caf"
                />
                <path
                  d="m480.064 216.129v32c0 8.84-7.16 16-16 16h-416c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h40v64c0 8.84 7.16 16 16 16z"
                  fill="#e3889b"
                />
                <path
                  d="m304.064 248.129v248c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16v-248c0-8.84 7.16-16 16-16h64c8.841 0 16 7.16 16 16z"
                  fill="#acebe2"
                />
                <path
                  d="m304.064 472.129v24c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16v-248c0-8.84 7.16-16 16-16h24v224c0 8.84 7.16 16 16 16z"
                  fill="#98d7ce"
                />
                <path
                  d="m320.064 152.129v96c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h96c8.841 0 16 7.16 16 16z"
                  fill="#acebe2"
                />
                <path
                  d="m320.064 232.129v16c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h24v80c0 8.84 7.16 16 16 16z"
                  fill="#98d7ce"
                />
                <path
                  d="m350.264 89.579c-19.24 48.74-84.91 76.04-88.16 77.37-3.772 1.536-8.125 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-50.125 57.492-80.073 99.45-51.13 49.696-34.281 119.496 14.028 94.2 78.22z"
                  fill="#f79caf"
                />
                <path
                  d="m350.974 87.709c-.23.62-.46 1.24-.71 1.87-19.24 48.74-84.91 76.04-88.16 77.37-3.77 1.54-8.12 1.61-12.08 0-3.81-1.56-93.41-38.82-93.41-104.46 0-19.51 8.71-35.96 21.82-47.07-1.19 4.77-1.82 9.81-1.82 15.07 0 65.64 89.6 102.9 93.41 104.46 3.96 1.61 8.31 1.54 12.08 0 2.5-1.02 42.051-17.46 68.87-47.24z"
                  fill="#e3889b"
                />
              </g>
            </svg>
          </div>

          <!-- Attire -->
          <div class="flex item-center justify-center">
            <span class="text-3xl md:text-4xl text-gray-700 font-caveat">
              A Note on Gifts
            </span>
          </div>

          <!-- HR -->
          <hr
            class="border-gray text-center text-2xl mt-2"
            style="--bg: white; --p: 0 10px; --trans-x: -50%; --trans-y: -50%"
          />

          <!-- Gifts -->
          <div
            class="flex-col item-center justify-center items-center text-center"
          >
            <div class="my-3 px-6 py-4 w-full overflow-hidden">
              <div class="flex-1 space-y-1">
                <div class="text-2xl md:text-3xl text-gray-700 font-caveat">
                  We are grateful for you
                </div>
                <div class="mx-auto text-base text-gray-600 font-body">
                  You're part of this celebration because you have a huge part
                  in our life. <br />
                  For that, we want to let you know that we appreciate you.
                  <br />
                </div>
              </div>
              <div class="flex-1 space-y-1 mt-6">
                <div class="text-2xl md:text-3xl text-gray-700 font-caveat">
                  Thank you
                </div>
                <div class="mx-auto text-base text-gray-600 font-body">
                  Your presence and prayers are the best gifts you can bless us
                  with. <br />
                  But if you desire to give nonetheless, a monetary gift is what
                  we suggest. <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Timer from "../components/Timer";

export default {
  name: "Event",
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
.event-page {
  padding-bottom: 144px;
}

hr::after {
  background-color: var(--bg);
  content: attr(data-hr-content);
  padding: var(--p);
  position: absolute;
  transform: translate(var(--trans-x), var(--trans-y));
}

.car-svg {
  transform: scale(-1, 1);
}

.bg-venue {
  background-image: linear-gradient(
    90deg,
    rgba(252, 252, 252, 1) 0%,
    rgba(177, 212, 224, 1) 100%
  );
  width: 100%;
}
</style>
