<template>
  <form @submit.prevent="createRoom">
  <div class="container border-4 border-opacity-10 border-black rounded-lg mx-auto w-4/5 relative z-10 flex items-center pb-16 my-24 md:my-8">
    <div class="w-full flex flex-col items-center justify-between relative z-10">
      <p class="flex items-center mt-2 font-bold text-6xl text-center md:text-4xl text-black">
        Criar Sala
      </p>

      <div class="w-full flex flex-row justify-center space-x-3.5">
        <div class="flex flex-col max-w-lg items-center text-lg mt-6 text-black">
          <p>Nome da Sala</p>
          <input v-model="roomName" class="rounded border-black border-2 text-gray-700 w-96 mt-2" placeholder="Nome da Sala" type="text" required>
        </div>
      </div>
      <p class="flex items-center font-bold text-6xl my-2 text-center md:text-2xl text-black">Adicionar Video</p>
      <p class="flex items-center text-6xl my-2 text-center md:text-xl text-black">OU</p>
      <div class="w-full flex flex-row justify-center space-x-3.5">
        <div class="flex flex-col max-w-lg items-start text-lg mt-6 text-black">
          <p>Insira um link do Youtube</p>
          <textarea id="LinkYoutube" class="rounded border-black border-2 text-gray-700 w-[500px] h-64 mt-2" placeholder="Cole seu link aqui" type="url"></textarea>
          <button type="submit" class="block m-auto rounded bg-amber-100 hover:bg-gray-700 py-3 px-4 text-lg text-green-700 font-bold uppercase mt-10">
            Criar Sala
          </button>
        </div>
        <div class="vl"></div>
        <div class="flex flex-col max-w-lg items-start text-lg mt-6 text-black">
          <p>Suba seu próprio video</p>
          <div class="mt-2 flex justify-center items-center w-full">
            <label for="dropzone-file" class="flex flex-col justify-center items-center w-[500px] h-64 bg-white rounded-lg border-2 border-gray-300 cursor-pointer dark:hover:bg-bray-800 dark:bg-white hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
              <span class="flex  flex-col justify-center items-center pt-5 pb-6">
                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <span class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Clique para selecionar um video</span> ou arraste e solte aqui!</span>
              </span>
              <input id="dropzone-file" type="file" accept="video/*" @change="onFilePicked" class="hidden">
            </label>
          </div>
          <button type="submit" class="block m-auto rounded bg-amber-100 hover:bg-gray-700 py-3 px-4 text-lg text-green-700 font-bold uppercase mt-10">
            Criar Sala
          </button>
        </div>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
import {storage,db} from "@/firebase.js";
import {ref,uploadBytes} from "firebase/storage"
import { collection, addDoc } from "firebase/firestore";
import {v1} from "uuid"


export default {
  name: "criarSala",
  data(){
    return {
      roomName: '',
      roomID:'',
      video: '',
      path:'',
      uploaded: false
    }
  },
  methods:{
    createID(){
      this.roomID=v1()
    },
      async onFilePicked({target}) {
          this.video = target.files[0]
          console.log(this.video)
          const videoRef = ref(storage, `video/${this.video.name}`)
          uploadBytes(videoRef, this.video).then(async () => {
            alert("Video Upado!")
            this.uploaded = true
            this.path =`video/${this.video.name}`
            console.log(this.path)
            this.createID()
          })
      },
    async createRoom(){
      await addDoc(collection(db, "roooms"), {
        name: this.roomName,
        id: this.roomID,
        link: this.path,
        uploaded:this.uploaded
      });
    }
  }
}
</script>

<style scoped>
.vl {
  border-left: 1px solid green;
}
</style>