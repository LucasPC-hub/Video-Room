<template>
  <div class="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center pb-16 my-24 md:my-8">
    <div class="w-full flex flex-col items-center justify-between relative z-10">
      <p class="flex items-center font-bold text-6xl text-center md:text-4xl text-white">
        Criar Sala
      </p>
      <div class="w-full flex flex-row justify-center space-x-3.5">
        <div class="flex flex-col max-w-lg items-start text-lg mt-6 text-white">
          <p>Nome da Sala</p>
          <input class="rounded text-gray-700 w-96 mt-2" placeholder="Nome da Sala" type="text">
        </div>
        <div class="flex flex-col max-w-lg items-start text-lg mt-6 text-white">
          <p>Senha da Sala</p>
          <input class="rounded text-gray-700 w-96 mt-2" placeholder="Senha da Sala" type="password">
        </div>
      </div>
      <p class="flex items-center font-bold text-6xl my-2 text-center md:text-2xl text-white">Adicionar Video</p>
      <p class="flex items-center text-6xl my-2 text-center md:text-xl text-white">OU</p>
      <div class="w-full flex flex-row justify-center space-x-3.5">
        <div class="flex flex-col max-w-lg items-start text-lg mt-6 text-white">
          <p>Insira um link do Youtube</p>
          <textarea id="LinkYoutube" class="rounded text-gray-700 w-[500px] h-64 mt-2" placeholder="Cole seu link aqui" type="url"></textarea>
          <a href="#" class="block m-auto rounded bg-amber-100 hover:bg-gray-700 py-3 px-4 text-lg text-green-700 font-bold uppercase mt-10">
            Criar Sala
          </a>
        </div>
        <div class="vl"></div>
        <div class="flex flex-col max-w-lg items-start text-lg mt-6 text-white">
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
          <a href="#" class="block m-auto rounded bg-amber-100 hover:bg-gray-700 py-3 px-4 text-lg text-green-700 font-bold uppercase mt-10">
            Criar Sala
          </a>
        </div>
      </div>
    </div>
  </div>
  <video  :src=url controls> </video>
</template>

<script>
import {v4} from "uuid"
import {storage} from "@/firebase.js";
import {ref,uploadBytes} from "firebase/storage"


export default {
  name: "criarSala",
  data(){
    return {
      video: '',
      url:''
    }
  },
  computed:{
    fileName(){
      const video =this.video
      if (video){
        const split =video.name.split('.')
        return `${split[0]}-${v4()}.${split[1]}`
      }else return ''
    }
  },
  methods:{

      onFilePicked({target}){
      try{
        this.video = target.files[0]
        console.log(this.video)
        const videoRef = ref(storage, `video/${this.video.name}` )
        uploadBytes(videoRef,this.video).then(()=>{
          alert("Video Upado!")
        })
        console.log(this.url)
      }catch(err){
        console.error(err)
      }

    },
  }
}
</script>

<style scoped>
.vl {
  border-left: 1px solid green;
}
</style>