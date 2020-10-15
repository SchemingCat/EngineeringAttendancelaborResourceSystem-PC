<template>
    <div>
        <div class="header">
            <div class="logo">
                <img src="../../../public/images/分类.png" style="float: left;" />
                <p class="title">项目系统</p>
            </div>
            <div class="dh">
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark aa">
                            <router-link tag="span" :to="{name:'shouye'}">首页</router-link>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark aa">
                            <router-link tag="span" :to="{name:'XiangMu'}">组织</router-link>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark aa">
                            <router-link tag="span" :to="{name:'XiangMu'}">项目</router-link>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark aa">工资</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark aa">财务</div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark aa ">考勤</div>
                    </el-col>
                    <el-col :span="3">
                        <router-link tag="span" :to="{name:'QuanXian'}">权限</router-link>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple-dark aa">项设</div>
                    </el-col>
                </el-row>
            </div>
            <div class="user">
                <div class="yidong">点击跳转移动端</div>
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small" style="background: #523C44 "><img src="../../../public//images/更多.png"
                            style="width: 50%;height: 50%;" /></el-button>
                </el-badge>
                <div class="admin">
                    <i class="el-icon-user"></i>{{user.staffName}}
                </div>
                <div style="margin-left: 30px">
                    <img src="../../../public/images/关机.png" />
                </div>
            </div>

        </div>
        <div class="back">
            <router-view :inputName="name" />
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                activeIndex: '1',
                sse: '123',
                name: "4444",
                user: {}
            }
        },
        created() {
            var that = this
            console.log(sessionStorage.getItem('token'))
            this.$axios.get('/getToken', {
                params: {
                    key: sessionStorage.getItem('token')
                }
            }).then(res => {
                console.log(res.data.data)
                that.user = res.data.data
            })
        },
        beforeRouteEnter(to, from, next) {
            if (to.name != 'index') {
                let token = sessionStorage.getItem('token');
                if (token == null) {
                    next('/index')
                } else if (token != null) {
                    next()
                } else {
                    next(false)
                }
            } else {
                next()
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>
    .back {
        background: white;
        height: 900px;
    }

    .yidong {
        color: white;
        font-size: 30px;
        cursor: pointer;
        margin-right: 10px
    }

    .yidong:hover {
        background: #523C44
    }

    .header {
        width: 100%;
        height: 100px;
        background: #5A4A4C
    }

    .title {
        color: white;
        font-size: 30px;
        padding-top: 7px;
        position: relative;
        width: 200px;
        left: 10px;
    }

    .logo {
        width: 200px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 20px;
    }

    .dh {
        clear: both;
        margin-left: 250px;
        width: 1100px;
        font-size: 30px;
        color: white;
        cursor: pointer;
        position: relative;
        top: -15px;
        text-align: center
    }

    .aa:hover {
        background: #523C44
    }

    .user {
        display: flex;
        float: right;
        margin-top: -55px;
        margin-right: 10px;
    }

    .admin {
        color: white;
        font-size: 30px;
        margin-left: 30px
    }
</style>