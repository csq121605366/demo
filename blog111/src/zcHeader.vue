<template>
    <!-- 页面头部 -->
    <div :class="classPrefix">
        <div :class="classPrefix+'_center'">
            <div :class="classPrefix+'_btn'" >首页</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                classPrefix: "blog111-header_"
            };
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .blog111-header_{
        margin: 0;
        padding:0;
        border:0;
        height:40px;
        width:100%;
        background-color: black;
        display: block;
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        
        &_center{
            padding:0; border:0;
            width:1000px;
            height: 40px;
            margin: 0 auto;
        }

        &_btn {
            padding:0;
            border:0;
            margin: 0;
            font-family: "Microsoft Yahei";
            font-size: 16px;
            color: white;
            display: block;
            float: left;
            width: auto;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
        }
    }
</style>
