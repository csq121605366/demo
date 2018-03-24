import index from './index.vue';

export default [
    {
        path:'/',
        name: "index",
        component:index,
        children: [
            {
                path:"home",
                name: "home",
                component: ()=>import("./home.vue")
            }
        ]
    }
]