<template>
  <div class="flex flex-col items-center container m-auto bg-amber-100 w-full">
    <p class="font-extrabold text-4xl">{{name}}</p>
    <iframe width="1120" height="630" :src=url title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      uploaded:false
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
        console.log(this.url)
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

</style>