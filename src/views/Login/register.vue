<template>
    <div class="aaa">
        <div class="box">
            <div class="content">
                <p class="hello">您好，【用户名/企业名称】邀请您加入他的团队</p>
                <div style="    margin-top: 35px;">
                    <img src="images/name.png" class="img">
                    <input class="name" type="text" :value="phone" placeholder="请输入手机号" />
                </div>
                <div style=" margin-top: 15px;position: relative">
                    <p class="yzm">获取验证码</p>
                    <img src="images/yzm.png" class="img">
                    <input class="name" type="text" value="" placeholder="请输入验证码" />
                </div>
                <div style="    margin-top: 15px;">
                    <img src="images/pwd.png" class="img">
                    <input class="name" type="password" :value="pwd1" placeholder="请设置密码" />
                </div>
                <div style="    margin-top: 15px;">
                    <img src="images/pwd.png" class="img">
                    <input class="name" type="password" :value="pwd2" placeholder="请再次确认密码" />
                </div>
                <div class="cent" style="position: relative">
                    <img src="images/sd.png" class="sd">
                    <button class="btn1">注册</button>
                </div>

                <div style="margin-top: 20px">
                    <p>
                        <router-link to="index" tag="span" style="float: right;cursor: pointer">返回登录</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                phone: "",
                pwd1: "",
                pwd2: ""
            }
        },
    }
</script>
<style scoped>
    html {
        background: #373D41;
    }

    .box {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 500px;
        transform: translate(-50%, -50%);
        background: url("../../../public/images/Login.jpg") no-repeat;
        background-color: white;
        background-position: 10% 50%;
        border-radius: 3%;
        box-shadow: 5px 5px 5px #6B6F71;
    }

    .content {

        width: 50%;
        height: 500px;
        position: absolute;
        right: 90px;
    }

    .hello {
        font-size: 20px;
        margin-top: 50px;
    }

    .name {
        border: 0;
        outline: none;
        font-size: 17px;
        border-bottom: 1px solid #D2D2D2;
        padding-left: 30px;
        padding-bottom: 10px;
        width: 85%;
    }

    .img {
        width: 5%;
        position: relative;
        left: 21px;
        top: 3px;
    }

    .btn1 {
        background: #373D41;
        height: 50px;
        border-radius: 50px;
        color: white;
        width: 100%;
        margin-top: 18px;
        cursor: pointer;
    }

    .sd {
        position: absolute;
        height: 20px;
        width: 5%;
        right: 20px;
        top: 10px;
    }

    .yzm {
        width: 90px;
        background: #373D41;
        text-align: center;
        color: white;
        height: 40px;
        line-height: 40px;
        position: absolute;
        right: 16px;
        border-radius: 10px;
        top: -3px;
        cursor: pointer;
    }
</style>