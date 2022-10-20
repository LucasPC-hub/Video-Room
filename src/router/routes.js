import {createWebHistory , createRouter} from "vue-router";
import HomeView from "@/views/HomeView";
import criarSala from "@/components/criarSala";
import listaSalas from "@/components/listaSalas";
import videoRoom from "@/components/videoRoom";

const history = createWebHistory()

const  router = createRouter({
    history,
    routes:[
        {
            path: "/",
            name:"home",
            component:HomeView
        },
        {
            path: "/criarSala",
            name:"criarSala",
            component:criarSala
        },
        {
            path:"/listaSalas",
            name:"listaSalas",
            component:listaSalas
        },
        {
            path:"/room/:id",
            name: "videoRoom",
            component: videoRoom,
            props: true
        }
    ]
})

export default router;