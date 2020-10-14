<template>
    <div class="XiangMu">
        <div class="left-dh">
            <router-link to="/XiangMu" tag="div">项目统计</router-link>
            <router-link to="/XiangMu2" tag="div">项目列表</router-link>
            <router-link to="/XiangMu3" tag="div">项目授权</router-link>
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