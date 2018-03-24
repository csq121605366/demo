<template>
    <!-- 页面底部 -->
    <div :class="classPrefix">
        <div :class="classPrefix+'_center'">
            &copy;XX公司
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                classPrefix: "blog111-zcFooter_"
            };
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .blog111-zcFooter_{
        margin: 0;
        padding:0;
        border:0;
        height:40px;
        width:100%;
        background-color: black;
        display: block;
        z-index: 0;
        
        &_center{
            padding:0; border:0;
            width:1000px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin: 0 auto;
            color: white;
        }

        
    }
</style>
