<template>
    <div class="aaa">
        <div class="box">
            <div class="content">
                <p class="hello">您好，【用户名/企业名称】邀请您加入他的团队</p>
                <div style="    margin-top: 70px;">
                    <img src="images/name.png" class="img">
                    <input class="name" type="text" v-model="name" placeholder="请输入手机号" />
                </div>
                <div style="    margin-top: 70px;">
                    <img src="images/pwd.png" class="img">
                    <input class="name" type="password" v-model="pwd" placeholder="请输入密码" @keyup.enter="submit"/>
                </div>
                <div class="cent" style="position: relative">
                    <img src="images/sd.png" class="sd1">
                    <button class="btn" @click="login">登录并加入团队</button>
                </div>

                <div style="margin-top: 20px">
                    <p>
                        <router-link to="register" tag="span" style="cursor: pointer">前往注册</router-link><span style="float: right">忘记密码</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                name:"",
                pwd:""      
            }
        },
        methods: {
            submit:function(){
                  this.login()
            },
            login:function(){
                let that = this;
                this.$axios.get('/login',{
                     params:{
                        staffPhone:that.name,
                        password : that.pwd,
                    }
                }
                ).then(res =>{
                    console.log(res.data)
                    if(res.data.code){
                        sessionStorage.setItem('token',res.data.data)
                        that.$router.push("/home")
                    }
                    
                })
            },
        }
    }
</script>
<style>
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

    .btn {
        background: #373D41;
        height: 50px;
        border-radius: 50px;
        color: white;
        width: 100%;
        margin-top: 37px;
        cursor: pointer;
    }

    .sd1 {
        position: absolute;
        height: 35px;
        width: 5%;
        right: 20px;
        top: 18px;
    }
</style>