import Home from './home.vue';
// import sonVue from "./son.vue";


export default [
    {
        path:'/',
        name: "home",
        component:Home
    },
    {
        path: "/tabBtnList",
        name: "tabBtnList",
        component: ()=>import("./tabBtnList.vue"),
        children:[
            {
                path: "tabContent/:tabId",
                name: "tabContent",
                component: ()=>import("./tabContent.vue")
            }
        ]
    }
]