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
            <div class="searchtn">
                <button class="btn3">查询</button>
            </div>
        </div>
        <div class="search">
            角色名单 <el-input v-model="input" style="width: 200px;" placeholder="请输入内容"></el-input>
            管理单位 <el-select v-model="value" style="width: 200px;" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            角色备注 <el-input v-model="input" style="width: 200px;" placeholder="请输入内容"></el-input>
        </div>
        <div style="width: 95%;margin: 0 auto;">
            <p>菜单权限</p>
            <el-tree :data="data" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current
                :props="defaultProps">
            </el-tree>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: [{
          id: 1,
          label: '权限配置',
          children: [{
            id: 4,
            label: '用户列表',
            children: [{
              id: 9,
              label: '增加'
            }, {
              id: 10,
              label: '删除'
            },
            {
              id: 11,
              label: '修改'
            },
            {
              id: 12,
              label: '查询'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
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
                input: '',
                value: '',
                value1: ''
            }

        },
        methods: {
            tiao() {
                console.log(111)
                this.$router.push({ name: "XiangMu1", params: { id: '1' } })
            }
        }
    }

</script>
<style scoped>
    .btn3 {
        background: black;
        color: white;
        width: 70px;
        margin: 5px 10px 0px 10px;
        border: 1px solid;
        height: 30px;
    }

    .searchtn {
        float: right;
        margin-top: -30px;
    }

    .btn2 {
        width: 80px;
        height: 25px;
        margin: 0 10px;
        background-color: transparent;
    }

    .xq {
        border: 1px solid #0435FF;
        color: #0435FF;
    }

    .ys {
        border: 1px solid #A46366;
        color: #A46366;
    }

    .from {
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