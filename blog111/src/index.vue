<template>
    <div :class="classPrefix">
        <zcHeader></zcHeader>
        <!-- 为了避免头部遮挡，而加的空白 -->
        <div :class="classPrefix+'_white'"></div>
        <div :style="contentStyle">
            <router-view></router-view>
        </div>
        <zcFooter></zcFooter>
    </div>
</template>

<script>
    import zcHeader from "./zcHeader.vue";
    import zcFooter from "./zcFooter.vue";

    export default {
        data(){
            return {
                classPrefix: "blog111-index_",
                
            };
        },

        mounted(){
            // 浏览器地址是/，就默认跳转到 home 首页。
            if ("index" == this.$route.name) {
                this.$router.replace({name:"home"});
            }
        },

        components:{
            zcHeader, zcFooter
        },

        computed:{
            // 控制中间内容区域的最小高度。如果内容太少，而浏览器窗口太高，
            // 就设置：中间内容区域最小高度 = 窗口高度 - 头部高度 - 底部高度 .
            // 本例子中，头部高度是40px，底部高度是40px，所以减80。
            contentStyle(){
                return {
                    padding:0,
                    margin: 0,
                    border: 0,
                    width: "100%",
                    height: "auto",
                    minHeight: this.$store.getters.rootWindowResizeFlag > -1 ? window.innerHeight - 80 + "px" : 0 
                }
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .blog111-index_{
        margin:0;
        padding:0;
        border:0;

        &_white{
            margin:0;
            padding:0;
            border:0;
            width: 100%;
            height: 40px;
        }
    }
</style>
