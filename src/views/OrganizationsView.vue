<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
            style="border-radius: 20px"
            router
    >
        <el-menu-item index="/Home">
            <div class="demo-fit">
                <div class="block">
                    <el-avatar shape="square" :size="50" :src="src" />
                </div>
            </div>
        </el-menu-item>
        <div style="flex-grow: 1;" />
        <el-menu-item index="/Home">首页</el-menu-item>
        <el-menu-item index="/Task">我的任务</el-menu-item>
        <el-menu-item index="/Organizations">我的社团</el-menu-item>
        <el-menu-item index="/Lab">社团管理</el-menu-item>
        <el-menu-item index="/Person">个人信息</el-menu-item>
    </el-menu>
    OrganizationsView
</template>

<script>
    import src from "@/assets/logo.png";

    export default {
        name: "OrganizationsView",
        data(){
            return{
                activeIndex:'/Organizations',
                src:src
            }
        },
        methods:{
            handleSelect(key,keypath){
                console.log(key)
                console.log(keypath)
            }
        }
    }
</script>

<style scoped>
    .el-menu--horizontal > .el-menu-item.is-active {
        border-bottom: none;
    }
</style>