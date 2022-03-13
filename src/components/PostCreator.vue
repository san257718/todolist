<template>
  <div class="w-[300px]">
    <div class="w-full">
      <input class="w-full p-3 outline-none" placeholder="輸入標題..." v-model= "todos"/>
    </div>
    <div class="px-3">
      <textarea
        placeholder="輸入記事"
        class="resize-none w-full h-[300px]"
        v-model="content"
      ></textarea>
    </div>
    <div class="h-16 w-full flex justify-end flex-none border-t px-1 pb-4 py-2">
      <button
        :class="[
          'flex py-2 px-4 bg-gray-600/70 text-white rounded-md active:bg-gray-800',
        ]"
        :disabled ="content.length === 0"
        @click="add()">
        新增
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        todos:"",
        content: "",
    };
  },
  methods:{
      add(){
          this.$emit("add",{
              todos: this.todos,
              content: this.content
          })
      }
  }
};
</script>

<style>
</style>