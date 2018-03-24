import Home from './home.vue'

export default [{
    path:'/',
    component:resolve => {
        require.ensure([],() => {
            resolve(require("./home.vue"))
        })
    }
}]