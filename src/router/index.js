import Vue from "vue";
import VueRouter from "vue-router"

// 一级路由
import goodList from "@/views/goodList";
import homePage from "@/views/homePage";
import my from "@/views/my";
// 二级路由
import personalInfo from "@/views/PersonalInfo";
import tradeHistory from "@/views/TradeHistory";
import goodsContent from "@/views/goodsContent";


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: "/",
            component: homePage
        },
        {
            path: '/goodList',
            component: goodList
        },
        {
            path: "/my",
            component:my,
            children:[
                {
                    path:"personalInfo",
                    component:personalInfo
                },
                {
                    path:"tradeHistory",
                    component:tradeHistory
                }
            ]

        },
        {
            path: "/goodsContent",
            component: goodsContent
        }
    ]
})