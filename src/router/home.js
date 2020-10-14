import Home from "@/views/Home/home.vue"
import shouye from "@/components/shouye.vue"
import XiangMu from "@/components/XiangMu.vue"

//三极路由
import XiangMu1 from "@/components/XiangMu1.vue"
import XiangMu2 from "@/components/XiangMu2.vue"

export default {
    path: '/home',
    component: Home,
    meta: { requireAuth: true },
    children: [
        {
            path: '/',
            name: 'shouye',
            component: shouye,

        },
        {
            path: '/XiangMu',
            name: 'XiangMu',
            component: XiangMu,
            redirect: '/XiangMu/',
            children: [
                {
                    path: '/',
                    name:'XiangMu1',
                    component: XiangMu1,
                },
                {
                    path: '/XiangMu2',
                    name:'XiangMu2',
                    component: XiangMu2,
                }

            ]

        },

    ]
    // path:'/',
    // component:Login,
    // children:{

    // }
}