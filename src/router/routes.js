import {createWebHistory , createRouter} from "vue-router";
import HomeView from "@/views/HomeView";
import criarSala from "@/components/criarSala";

const history = createWebHistory()

const  router = createRouter({
    history,
    routes:[
        {
            path: "/",
            component:HomeView
        },
        {
            path: "/criarSala",
            component:criarSala
        }
    ]
})

export default router;