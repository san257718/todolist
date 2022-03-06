<template>
  <div
    class="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-gray-700/75 to-blue-500/50 overflow-hidden"
  >
  <Model :opened="modalOpened" @closed="modalOpened = false" todo="第一筆資料">
    <PostCreator />
  </Model>
    <div class="h-auto w-96 border-2 rounded-lg bg-gray-200/40">
      <p class="flex text-xl m-5 font-bold">Vue Todolist</p>
      <div class="flex m-5">
        <input
          type="text"
          placeholder="填入..."
          class="w-full text-input bg-transparent border-b-2 border-black" 
          v-model="todo"
          
          
        />
        <button type="button" @click="newIndex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mx-2 bg-slate-100 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <label class="m-4 p-2 bg-white rounded-full flex items-center" v-for="(todo, del) in students" :key="del">
        <div class="mx-1 rounded-xl">
          <span>{{todo.name}}</span>
        </div>
        <span class="ml-auto mr-1" @click="delIndex(del)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg></span>
      </label>
    </div>
  </div>
  <FloatButton @click="modalOpened = true"/>
</template>

<script>
import PostCreator from './PostCreator.vue'
import FloatButton from './FloatButton.vue'
import Model from './Model.vue'
export default {
  data() {
    return {
      todo: "",
      students: [],
      content: "",
      modalOpened: false
    }
  },
  methods:{
        newIndex(){
          if(this.todo.length === 0) return

          this.students.push({
            name: this.todo

          })
        },
        delIndex(del){
          this.students.splice(del, 1)
        },

        // Postadd(){
        //   this.todo.push()
        //   this.modalOpened = false
        // }
       
  },
  
  components:{
    FloatButton,
    Model,
    PostCreator


  }
}
</script>

<style>
input::placeholder {
  color: black;
}
</style>