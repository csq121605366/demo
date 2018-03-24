<template>
    <div :class="classPrefix">
        <template v-for="(item, index) in tabBtnList">
            <span v-if="index > 0" style="padding: 5px;" :key="item.id+'white'"></span>
            <span :key="item.id" 
                    :class="selectedId==item.id ? classPrefix+'_active' : classPrefix+'_normal'"
                    @click="clickTabBtn(item)">{{item.name}}</span>
        </template>
        <router-view></router-view>
    </div>
</template>
<script>
    import getBtnList from "./tabBtnList";

    export default {
        data(){
            return {
                classPrefix: "blog109-tabBtnList_",
                selectedId: "",
                tabBtnList:[]
            };
        },

        methods:{
            clickTabBtn(item){
                this.selectedId=item.id
                this.$router.push({name: "tabContent", params:{tabId: this.selectedId} });
            }
        },

        mounted(){
            this.tabBtnList = getBtnList();

            // F5 刷新
            if (this.$route.matched.some(r=>"tabContent"==r.name)) {
                this.selectedId = this.$route.params.tabId;
            } else { // 初次进入
                this.selectedId = this.tabBtnList[0].id;
                this.$router.replace({name: "tabContent", params:{tabId: this.selectedId} });
            }
        },

        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            if (this.tabBtnList.length > 0) {
                if (to.matched.some(r => "tabContent" == r.name)) {
                    this.selectedId = to.params.tabId;
                }
            }
            next();
        },
    };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .blog109-tabBtnList_{
        width: 600px;
        margin: 10px auto 0 auto;
        &_active{
            color:blue;
            padding: 0;
            margin: 0;
            border: 0;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: blue;
            cursor: pointer;
        }

        &_normal{
            color: rgb(37, 212, 139);
            padding: 0;
            margin: 0;
            border: 0;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: transparent;
            cursor: pointer;
        }
    }
</style>