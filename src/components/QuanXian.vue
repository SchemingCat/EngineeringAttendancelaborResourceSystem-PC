<template>
    <div class="XiangMu">
        <div class="left-dh">
            <router-link to="/QuanXian" tag="div">用户列表</router-link>
            <router-link to="/QuanXian2" tag="div">角色管理</router-link>
            <router-link to="/XiangMu3" tag="div">菜单管理</router-link>
            <router-link to="/XiangMu2" tag="div">字典管理</router-link>
            <router-link to="/XiangMu3" tag="div">登录日志</router-link>
        </div>
        <div style="width: 100%;">
            <router-view />
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
    .XiangMu {
        display: flex;

    }
    .left-dh {
        width: 8%;
        text-align: center;
        color: white;
        height: 900px;
        background-color: #5A4A4C;
        margin-top: 10px;
    }
    .left-dh>div{
        margin: 50px 0;
        font-size: 25px;
        cursor: pointer;
    }
</style>