export default {

    // 项目根组件 App.vue 上，窗口改变大小
    rootWindowResizeFlagAction(context) {
        context.commit("rootWindowResizeFlagMutation");
    }
}
