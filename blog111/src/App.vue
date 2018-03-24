<template>
    <div class="blog111-app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    mounted(){
        // 窗口改变大小的事件。
        window.addEventListener("resize", ()=>{
            this.$store.dispatch("rootWindowResizeFlagAction");
        });
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .blog111-app{
        width:100%;
    }
</style>
