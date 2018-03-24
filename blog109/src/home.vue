<template>
    <div class="blog109-div">
        <a class="blog109-a">文字1</a>
        <a class="blog109-a">文字2</a>
        <a class="blog109-a">文字3</a>
        <a class="blog109-a">文字4</a>
        <div v-html="myHtml" class="blog109-myHtml"></div>
    </div>
</template>
<script>
    

    export default {
        data(){
            
            return {
                myHtml: "    sljdldfj\nlsjdflkj"
            };
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .blog109-div{
        text-align: center;
    }
    .blog109-a{
        color: white;
        background-color: red;
        padding: 0;
        margin: 0;
        border: 0;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: transparent;
        cursor: pointer;
    }
    .blog109-myHtml{
        white-space:pre-wrap
    }
</style>