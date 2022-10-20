<template>
  <div class="flex items-center justify-center px-16">
    <div class="relative w-[75%]">
      <div class="m-8 relative space-y-4">
        <div v-for="doc in querySnapshot.docs" :key="doc.id" class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
          <div  class="flex-1 w-full flex justify-between items-center">
            <div class="h-10 font-bold text-3xl items-center">{{doc.data().name}}</div>
            <router-link :to="(`room/${doc.id}`)" class="w-24 h-12 rounded-lg text-white bg-green-700"><p class="my-2 text-center">Entrar</p></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import {db} from "@/firebase.js";

export default {
  name: "listaSalas",
  data(){
    return{
      querySnapshot:''
    }
  },
  methods : {
    openRoom(){
    },
    async listarSalas(){
      this.querySnapshot = await getDocs(collection(db, "roooms"));
      }
    },beforeMount() {
    this.listarSalas()
  }
}
</script>

<style scoped>

</style>