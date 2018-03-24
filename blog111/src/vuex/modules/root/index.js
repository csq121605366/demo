import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    // 窗口改变大小的标记位。只要大小改变就加一。
    rootWindowResizeFlag: 0
}

export default {
    state,
    actions,
    getters,
    mutations
}
