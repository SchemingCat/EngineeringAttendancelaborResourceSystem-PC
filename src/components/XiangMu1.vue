<template>
    <div>
        <div class="mbx">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 20px;">
                <el-breadcrumb-item>管理列表</el-breadcrumb-item>
                <el-breadcrumb-item>项目列表</el-breadcrumb-item>
                <el-breadcrumb-item>项目详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="mbx">
            <p style="    display: contents;">项目列表</p>
            <button class="btn1">创建项目</button>
        </div>
        <!-- 项目详情 -->
        <div class="xq-div">
            <h3 style="display: contents;">项目名称</h3><span style="padding-left: 20px;">进行中/已验收</span>
            <el-row style="margin-top: 10px;">
                <el-col :span="8">
                    <div class="grid-content bg-purple">项目编号：123123123</div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">启动时间：123123123</div>
                </el-col>
            </el-row>
            <el-row style="margin-top: 10px;">
                <el-col :span="8">
                    <div class="grid-content bg-purple">创建人：123123123</div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">项目地址：123123123</div>
                </el-col>
            </el-row>
            <p style="margin-top: 10px;">项目介绍：123123123</p>
            <hr />
            <!-- 上级项目 -->
            <p>上级项目：阿巴阿巴阿巴</p>
            <div class="box1">
                <p>在场人员<span>99</span></p>
                <p>班组<span>99</span></p>
                <p>项目经理<span>99</span></p>
                <p>考勤设备<span>99</span></p>
                <p>子项目<span>99</span></p>
            </div>
            <button class="btn1 btn2">项目关联码</button>
            <hr />

        </div>
        <!-- 实时考勤情况 -->
        <div class="kq-div">
            <div class="kq-time">
                <p style="margin: 10px;">实时考勤情况</p>
                <h2>11月11日 11:11:11 <span style="float: right;">星期几</span></h2>
                <div class="user">
                    <img src="../../public/images/头像.png" style="float: left;" />
                    <p>姓名:啊啊<span style="float: right;">班组:132</span></p>
                    <p style="margin-top: 5px;">打卡时间:11:11:11</p>
                </div>
                <div class="user">
                    <img src="../../public/images/头像.png" style="float: left;" />
                    <p>姓名:啊啊<span style="float: right;">班组:132</span></p>
                    <p style="margin-top: 5px;">打卡时间:11:11:11</p>
                </div>
                <div class="user">
                    <img src="../../public/images/头像.png" style="float: left;" />
                    <p>姓名:啊啊<span style="float: right;">班组:132</span></p>
                    <p style="margin-top: 5px;">打卡时间:11:11:11</p>
                </div>

            </div>
            <div class="kq-time2">
                <div id="bar_dv" ref="chart" :style="{width: '100%', height: '300px'}"></div>
                <div>
                    <template>
                        <el-table :data="tableData" border style="width: 100%" :header-cell-style="thStyleFun"
                            :cell-style="cellStyleFun">
                            <el-table-column prop="date" label="异常" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="班组" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="时间" width="180">
                            </el-table-column>
                            <el-table-column label="惭怍">
                                <button class="btn3">处理</button>
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
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
                num:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        },
        created() {
            console.log(this.$route.params.id)
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // var echarts = require('echarts');
                // var myChart = echarts.init(document.getElementById('main'));
                var that = this
                var bar_dv = this.$refs.chart;

                let myChart = this.$echarts.init(bar_dv)
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: that.num,
                        type: 'line'
                    }]
                });
            },
            thStyleFun() {
                return 'text-align:center'
            },
            cellStyleFun() {
                return 'text-align:center'
            }
        }
    }
</script>
<style scoped>
    .btn3 {
        border: 1px solid #710917;
        color: #710917;
        background: center;
        width: 70px;
        height: 25px;
    }

    .kq-time2 {
        width: 80%;
    }

    .user {
        border-bottom: 1px solid;
        padding-bottom: 10px;
        margin-top: 10px;
    }

    .kq-time {
        width: 20%;
        border-right: 10px solid #F3F3F3;
    }

    .kq-div {
        display: flex;
        width: 97%;
        margin: 0 auto;
    }

    .btn2 {
        position: absolute;
        right: 0;
        top: 10px;
    }

    .box1>p>span {
        border: 1px solid;
        padding: 0 10px;
    }

    .box1>p {
        border: 1px solid;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADzklEQVRoQ+2aTYhcRRDH/9W7sEcJGiUHjSDo7nS9wRVDMGLYHCIqqChuDoIQEBQixuhBIh5cLyrEGEHQgKCH3BKCEvEigksE48GNOl39FvfkR/wkIBHxkGFfSS0z+JS3s/vevJE5vL5Od/X/111V3dVvCCNqzHwngLaqeiLaCuBrVT0fYzw9iilpFEaZeQHAC0W2VfUUET0pIr/WOXftIMxsAq8GcElVF1R1kYi+d87drapPAdhhAFmWbUvT9Je6YGoFYebXAZjYz0Tk9iKR/d1S1U9jjLvHDmR2dnZrt9v9DcCfq6urNy4vL/+8nkhmPgPgXiJ6IITwfh0wte0IM88B+ATAaRF5aJA47/0hIjoG4HkReWmsQJIkeVpVXwNwRESeHSQuSZJ7VPVDIjoTQrh/3EDmVfUkgHdE5NFB4lqt1n7n3LsA3hSRJ8YKxHvfIqII4GMR2TtIXC7gH4sxvj1WICbGe/85Ee0E8KCIvFckcGZmZtvExMRPAC47527rdDrnxw4kF/Cm7S0ROZAXmQtyqOorMcbn6oAwG7Vlrb6g/5zqF1T1nHPuR1W1rHaz9bPTPca4ry6IkYCYUWa+wbIXgF0ArukJvgxgCcCCiHxUJ8TIQPIip6enr5+cnLwqy7JOmqYGM5JWm2sx87VEdIeqtgBMA7hyHcV/AbDsFgAsisgPdZANDdJut2/KssyC+hEAW0qK+h3ACQDHRWS55Nh/dR8axHt/1naiZ9VqjbNZln3rnPujSJiqTjnntquqBf7DAK6w2JmamrpraWnpYlWYoUC890eJ6Bk7CFV1v4h8UUZIq9W6joheJaJ5AB+IyH1lxuf7DgXCzBfMnVR1R4wxrSqCmS2L7SWiW0MIltlKt8ogzNy28pWIvgwh3FJ65tyAJEmOqeohAAdF5I0qtoYB6V/bLfPsqTJ5f0zuEH1RRKxMLt0akNy9qtmRxrUKIqiJkSZGCtyiSb+5RWlipImRghjJ3bX+/yuKXcGdc98BuCgi9v2jcsvdfneFEM5VMVQ5RmwyZra33jl7Fel2uwdWVlZKF0be+5eJ6HCv7K18+RwKpAejvRX8RlWP2/eQNE2/GrSq9iDhnJtzzlmF2H+V3CMii1V2w8YMDWJGvPcne1VeX8e6F8kkSfpvxGt9VXWFiB4fBqI2EDNkArMsm+8DiUjhIuUOv07v4eFEHZ/hatmRvDsw85qrbQKkcoYqcr8GZL2gbHakarrqjWtcq3Gtf/4V0WStJv2WSShN+i2zWnU+B22UtTaha+yDfa1G2QiEiPaFEE5t1G+zv/8NUCM4UUMg4WAAAAAASUVORK5CYII=) no-repeat;
        background-size: contain;
        padding-left: 25px;
        margin: 0 25px;
    }

    .box1 {
        margin-top: 10px;
        display: flex;
        padding-bottom: 25px;
    }

    .xq-div {
        width: 97%;
        margin: 0 auto;
        margin-top: 10px;
        position: relative;
    }

    .btn1 {
        float: right;
        background: black;
        color: white;
        border: 1px solid;
        width: 100px;
        height: 40px;
        margin-top: -9px;
    }

    .mbx {
        padding: 10px 20px;
        border: 5px solid #E9E7E9;
        position: relative;
    }
</style>