<template>
    <div>
        <div class="mbx">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 20px;">
                <el-breadcrumb-item>管理列表</el-breadcrumb-item>
                <el-breadcrumb-item>项目列表</el-breadcrumb-item>
              </el-breadcrumb>
        </div>
        <div class="mbx">
            <p>项目详情</p><button class="btn1">创建项目</button>
        </div>
    </div>
</template>
<script>


</script>
<style scoped>
    .mbx{
        padding: 10px 20px;
        border: 5px solid #E9E7E9;
        position: relative;
    }
    .btn1{
        border: none;
        padding: 10px;
        width: 100px;
        background-color: black;
        color: white;
        float: right;
        position: absolute;
        right: 10px;
        top: 1px;
    }
</style>