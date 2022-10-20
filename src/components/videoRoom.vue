<template>
  <div class="container flex-col border-4 backdrop-blur-sm bg-white/20 border-opacity-10 border-black rounded-lg mx-auto w-4/5 relative z-10 flex items-center pb-16 my-24 md:my-8">
    <p class="font-bold p-5 text-5xl">{{name}}</p>
    <div v-if="uploaded"> <video controls onloadstart="this.volume=0.1"  :src=url title="Video Player"></video></div>
    <div v-if="!uploaded"> <iframe width="1280" height="720" :src=url allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe></div>
  </div>
</template>

<script>
import {db, storage} from "@/firebase.js";
import { getDoc,doc } from "firebase/firestore";
import {getDownloadURL,ref} from "firebase/storage"



export default {
  name: "videoRoom",
  data(){
    return{
      url: '',
      docSnap:'',
      name:'',
      path:'',
      uploaded:false,
      youtube:false
    }
  },props:{
    id:{
      type : String
    }
  },
  methods:{
    async getName(){
      const docRef = doc(db, "roooms", `${this.id}`);
      this.docSnap = await getDoc(docRef);
      this.name =await this.docSnap.data().name
      this.path =await this.docSnap.data().link
      await this.getUrl()
    },
    async getUrl(){
      if (await this.docSnap.data().uploaded){
        this.url = await getDownloadURL(ref(storage, `${this.path}`))
        this.uploaded = true
      }else{
          let str = await this.docSnap.data().youtubelink
          let res = str.split("=");
          this.url="https://www.youtube.com/embed/"+res[1];

      }
    }
  },beforeMount() {
    this.getName()
  }
}

</script>
<script setup>


</script>
<style scoped>
video {
  width: 1280px;
  height: 720px;
  object-fit:contain;
}
</style>