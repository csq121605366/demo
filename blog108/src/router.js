import Home from './home.vue';
// import sonVue from "./son.vue";


export default [
    {
        path:'/',
        name: "home",
        component:Home,
        children:[
            // redirect
            {
                path: 'son',
                name: 'son',
                component: ()=>import("./son.vue")
            }
        ]
    }
]