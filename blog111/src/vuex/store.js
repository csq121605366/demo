import Vue from 'vue'
import 'babel-polyfill';
import Vuex from 'vuex'
import root from './modules/root';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        root
    },
    strict: debug
})
