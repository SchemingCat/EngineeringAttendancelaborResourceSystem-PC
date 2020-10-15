import Home from "@/views/Home/home.vue"
import shouye from "@/components/shouye.vue"
import XiangMu from "@/components/XiangMu.vue"
import QuanXian from "@/components/QuanXian.vue"

//三极路由
import XiangMu1 from "@/components/XiangMu1.vue"
import XiangMu2 from "@/components/XiangMu2.vue"
import QuanXian1 from "@/components/QuanXian1.vue"
import QuanXian2 from "@/components/QuanXian2.vue"
import QuanXian3 from "@/components/QuanXian3.vue"


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
        {
            path: '/QuanXian',
            name: 'QuanXian',
            component: QuanXian,
            redirect: '/QuanXian/',
            children:[
                {
                    path:'/',
                    name:"QuanXian1",
                    component:QuanXian1
                },
                 {
                    path:'/QuanXian2',
                    name:"QuanXian2",
                    component:QuanXian2
                },
                {
                    path:'/QuanXian3',
                    name:"QuanXian3",
                    component:QuanXian3
                }
            ]
        }

    ]
    // path:'/',
    // component:Login,
    // children:{

    // }
}