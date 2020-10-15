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
            用户账号 <el-input v-model="input" style="width: 200px;" placeholder="请输入内容"></el-input>
            用户状态 <el-select v-model="value" style="width: 200px;" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <div class="searchtn">
                <button class="btn3">查询</button>
                <button class="btn3">重置</button>
            </div>
        </div>
        <div class="from">  
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column
                type="selection"
                width="55">
              </el-table-column>
                <el-table-column prop="date" label="项目编号" width="180">
                </el-table-column>
                <el-table-column prop="name" label="项目名称" width="180">
                </el-table-column>
                <el-table-column prop="date" label="地区" width="180">
                </el-table-column>
                <el-table-column  label="操作">
                    <button class="btn2 xq" @click="tiao()">编辑角色</button><button class="btn2 ys">删除</button>  <button class="btn2 xq" @click="tiao()">修改密码</button>
                </el-table-column>
            </el-table>
        </div>
        <div class="boxs">
            <div class="boxs1">
                <p style="width: 90%;margin: 0 auto;border-bottom: 1px solid;padding-bottom: 10px;margin-top: 10px;">编辑角色</p>
                <div class="boxs1-1">
                    <p style="margin: 20px 0;">
                        用户账号<el-input v-model="input2" style="width: 220px;" placeholder="请输入内容"></el-input>
                    </p>
                   
                    <p style="margin: 20px 0;">用户角色  <el-select v-model="value" placeholder="请选择，多选/观察者，超级管理员
                        ">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select></p>
                      <p>状态  <el-select v-model="value" placeholder="请选择，开启/停用
                        ">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select></p>
                      <div style="border-top: 1px solid;width: 90%;margin: 0 auto;margin-top: 80px;">
                          <button class="btn3">取消</button>
                          <button class="btn3">保存</button>
                      </div>
                </div>
                
            </div>
            <div class="boxs1">
                <p style="width: 90%;margin: 0 auto;border-bottom: 1px solid;padding-bottom: 10px;margin-top: 10px;">修改密码</p>
                <div class="boxs1-1">
                    <p style="margin: 20px 0;">
                        原密码<el-input v-model="input2" style="width: 220px;" placeholder="请输入内容"></el-input>
                    </p>
                   
                    <p style="margin: 20px 0;">
                        新密码<el-input v-model="input2" style="width: 220px;" placeholder="请输入内容"></el-input>
                    </p>
                    <p style="margin: 20px 0;">
                        确认密码<el-input v-model="input2" style="width: 220px;" placeholder="请输入内容"></el-input>
                    </p>
                      <div style="border-top: 1px solid;width: 90%;margin: 0 auto;margin-top: 80px;">
                          <button class="btn3">取消</button>
                          <button class="btn3">保存</button>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                input2:"",
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
                input:'',
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
    .boxs1-1{
        width: 90%;
        margin: 0 auto;
    }
    .boxs1{
        width: 350px;
        height: 350px;
        border: 1px solid ;
        margin-top: 10px;
        margin-left: 10px;
    }
    .boxs{
        display: flex;
    }
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