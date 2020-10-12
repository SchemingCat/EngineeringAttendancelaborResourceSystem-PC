<template>
    <div>
        <div class="f1">
            <div class="gs">
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">Hk控股股份有限公司(企业团队名称)暂未认证,马上认证
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="7">
                        <div class="grid-content bg-purple-light">
                            <el-button type="info" size="mini">大数据指挥中心</el-button>
                            <el-button type="info" size="mini">企业中心</el-button>
                            <el-button type="info" size="mini">切换/创建企业</el-button>
                        </div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 15px">
                    <el-col :span="6">
                        <div class="grid-content bg-purple" style="display: flex">
                            <div class="tb">
                                <img src="../../public//images/地图.png" style="    margin-top: 45px;" />
                            </div>
                            <div class="nr">
                                <p style="    margin-top: 40px;"><span style="font-size: 40px">9</span>(个)</p>
                                <p>建设项目中</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light" style="display: flex">
                            <div class="tb">
                                <img src="../../public//images/地图.png" style="    margin-top: 45px;" />
                            </div>
                            <div class="nr">
                                <p style="    margin-top: 40px;"><span style="font-size: 40px">100.00</span>(元)</p>
                                <p>待发放工资</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple" style="display: flex">
                            <div class="tb">
                                <img src="../../public//images/地图.png" style="    margin-top: 45px;" />
                            </div>
                            <div class="nr">
                                <p style="    margin-top: 40px;"><span style="font-size: 40px">100</span>(人)</p>
                                <p>在场中劳动</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light" style="display: flex">
                            <div class="tb">
                                <img src="../../public//images/地图.png" style="    margin-top: 45px;" />
                            </div>
                            <div class="nr">
                                <p style="    margin-top: 40px;"><span style="font-size: 40px">100</span>(人)</p>
                                <p>异常中考勤</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div>
            <div class="search">
                <div style="float: right;margin-right: 20px">
                    <el-input placeholder="请输入项目名称" v-model="input2" style="width: 200px">
                    </el-input>
                    <el-button style="background: #363C40;color: white" icon="el-icon-search">搜索</el-button>

                </div>


            </div>
            <div class="gsbox">
                <div class="xm">
                    <div class="xq">
                            <i style="    font-size: 155px; " class="
                            el-icon-plus"></i>
                    </div>

                </div>

                <div class="xm">
                        <div class="xq">
                                <p>项目名称</p>
                                <p>在场人数:99人</p>
                                <p>项目状态:进行中</p>
                                <p>nanana</p>
                            </div>
                </div>

                <div class="xm">
                        <div class="xq">
                                <p>项目名称</p>
                                <p>在场人数:99人</p>
                                <p>项目状态:进行中</p>
                                <p>nanana</p>
                            </div>
                </div>

                <div class="xm">
                        <div class="xq">
                                <p>项目名称</p>
                                <p>在场人数:99人</p>
                                <p>项目状态:进行中</p>
                                <p>nanana</p>
                            </div>
                </div>

                <div class="xm">
                        <div class="xq">
                                <p>项目名称</p>
                                <p>在场人数:99人</p>
                                <p>项目状态:进行中</p>
                                <p>nanana</p>
                            </div>
                </div>
                <div class="xm">
                        <div class="xq">
                                <p>项目名称</p>
                                <p>在场人数:99人</p>
                                <p>项目状态:进行中</p>
                                <p>nanana</p>
                            </div>
                </div>

                <div class="xm">
                        <div class="xq">
                                <p>项目名称</p>
                                <p>在场人数:99人</p>
                                <p>项目状态:进行中</p>
                                <p>nanana</p>
                            </div>
                </div>
                <div class="xm">

                </div>
                <div class="xm">

                </div>
                <div class="xm">

                </div>


                <div class="xm">

                </div>
                <div class="xm">

                </div>
                <div class="xm">

                </div>




            </div>
        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                input2: ""
            }
        }
    }
</script>
<style scoped>
    .xq>p{
     
        margin: 5px 10px;
    }
    .xq>p:nth-of-type(1){
        padding: 5px 0px;
    border-bottom: 1px solid;
    margin: 0 10px;
    }
    .xq {
        width: 170px;
        height: 150px;
        border: 1px solid;
    }

    .xm {
        width: 19%;
        height: 150px;
       
        margin: 10px 8px;
    }

    .gsbox {
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .search {
        width: 95%;
        margin: 0 auto;
        height: 40px;
        border-bottom: 1px solid #363C40;
        padding: 10px 0;
    }

    .tb {
        background: #363C40;
        height: 140px;
        width: 100px;
        text-align: center
    }

    .nr {
        background: white;
        height: 140px;
        width: 300px;
        text-align: center;
    }

    .gs {
        background: white;
        height: 30px;
        line-height: 30px;
        padding-left: 30px
    }

    .f1 {
        height: 200px;
        background: #E9E7E9;
    }
</style>