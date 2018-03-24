<template>
    <div :class="classPrefix">
        tabId: {{$route.params.tabId}}<br/>
        我是标签页内容。我是标签页内容。我是标签页内容。我是标签页内容。我是标签页内容。我是标签页内容。我是标签页内容。我是标签页内容。
    </div>
</template>
<script>
    import getBtnList from "./tabBtnList";

    export default {
        data(){
            return {
                classPrefix: "blog109-tabContent_",
            };
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .blog109-tabContent_{
        width: 600px;
    }
</style>