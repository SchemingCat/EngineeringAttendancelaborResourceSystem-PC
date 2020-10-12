import Home from "@/views/Home/home.vue"
import shouye from "@/components/shouye.vue"

export default {
    path: '/home',
    component: Home,
    children: [
        {
            path: '/',
            component: shouye
        }
    ]
    // path:'/',
    // component:Login,
    // children:{

    // }
}