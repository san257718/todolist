<template>
  <div
    class="absolute t-10 z-10 flex h-screen w-screen items-center justify-self-center"
    :class="!opened && 'pointer-events-none '"
  >
    <!--Overlay-->
    <div
      :class="[
        'h-full w-full flex justify-center items-center bg-black/50 ',
        opened ? 'opacity-100' : 'opacity-0',
      ]"
      @clcik="closing()"
    >
      <!--Window-->
      <div
        :class="[
          'absolute min-w-[300px] h-[50vh] rounded-md transition-all bg-white',
          opened ? 'scale-100' : 'scale-0',
        ]"
      >
        <div class="h-10 border-b">
          <div class="flex h-full w-full items-center justify-center font-bold">
            {{ todo }}
          </div>
          <div class="p-1 flex justify-center">
             <PostCreator />

            <div class="absolute right-0 top-0 h-10 p-1">
              <div
                class="flex aspect-square h-full items-center justify-center rounded-lg border text-gray-100 hover:bg-gray-700 active:bg-gray-200"
                @click="closing()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCreator from "./PostCreator.vue";
export default {
  props: {
    todo: {
      default: "",
    },
    content: {
      default: "",
    },
    opened: {
      default: true,
    },
  },

  methods: {
    closing() {
      this.$emit("closed");
    },
  },
  components: {
    PostCreator,
  },
};
</script>

<style>
</style>