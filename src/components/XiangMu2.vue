<template>
    <div>
        <div class="mbx">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 20px;">
                <el-breadcrumb-item>管理列表</el-breadcrumb-item>
                <el-breadcrumb-item>项目列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="mbx">
            <p>项目列表</p>
        </div>
        <div class="search">
            名称编号 <el-input v-model="input" style="width: 200px;" placeholder="请输入内容"></el-input>
            项目经理 <el-select v-model="value" style="width: 200px;" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            项目状态 <el-select v-model="value1" style="width: 200px;" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div class="searchtn">
                <button class="btn3">查询</button>
                <button class="btn3">重置</button>
            </div>
        </div>
        <div class="from">  
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="项目编号" width="180">
                </el-table-column>
                <el-table-column prop="name" label="项目名称" width="180">
                </el-table-column>
                <el-table-column prop="date" label="地区" width="180">
                </el-table-column>
                <el-table-column prop="date" label="项目经理" width="180">
                </el-table-column>
                <el-table-column prop="date" label="劳务公司" width="180">
                </el-table-column>
                <el-table-column prop="date" label="状态" width="180">
                </el-table-column>
                <el-table-column prop="date" label="关联项目" width="180">
                </el-table-column>
                <el-table-column  label="操作">
                    <button class="btn2 xq" @click="tiao()">详情</button><button class="btn2 ys">验收</button>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{   //表单数据
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                options: [{     //项目经理
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                options1: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                value1: ''
            }
           
        },
        methods: {
                tiao(){
                    console.log(111)
                    this.$router.push({name:"XiangMu1",params: {id:'1'}})
                }
            }
    }

</script>
<style scoped>
    .btn3{
        background: black;
        color: white;
        width: 70px;
        margin: 5px 10px 0px 10px ;
        border: 1px solid;
        height: 30px;
    }
    .searchtn{
        float: right;
    }
    .btn2{
        width: 80px;
        height: 25px;
        margin: 0 10px;
        background-color: transparent ;
    }
    .xq{
        border: 1px solid #0435FF;
        color: #0435FF;
    }
    .ys{
        border: 1px solid #A46366;
        color: #A46366;
    }
    .from{
        width: 98%;
        margin: 0 auto;
    }
    .search {
        width: 98%;
        margin: 0 auto;

        margin-top: 10px;
        border-bottom: 1px solid;
        padding-bottom: 10px;
    }

    .mbx {
        padding: 10px 20px;
        border: 5px solid #E9E7E9;
        position: relative;
    }

    .btn1 {
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