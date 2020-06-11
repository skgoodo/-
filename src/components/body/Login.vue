<template>
    <div class="login">
        <div class="login-from">
            <div class="login-top">
                <p>欢迎登陆</p>
            </div>
            <div class="login-body">
                <div class="login-con">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户" prop="username">
                            <el-input  v-model="ruleForm.username" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="ruleForm.password" type="password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                        </el-form-item>
                    </el-form>
                    <p class="login-bottom">输入任意用户名和密码均可</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            var checkuser = (rule, value, callback) => {
                if (value === '') {
                   return callback(new Error('请输入用户'));
                }else{
                    callback()
                }
            };
            var checkpassword = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('密码不能为空'));
                }else{
                    callback()
                }
            };
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { validator: checkuser, trigger: 'blur' }
                    ],
                    password: [
                        { validator: checkpassword, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push("/home")
                    } else {
                        console.log(111)
                        return false
                    }
                });
            }
        }
    }
</script>
<style>
    .login {
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/login.jpg);
        background-size: cover;
        perspective-origin: 50%;
        position: relative;
    }

    .login-from {
        position: absolute;
        width: 300px;
        height: 280px;
        top: 145px;
        right: 160px;
        background-color: white;
        border-radius: 5px;
    }

    .login-top {
        height: 22px;
        font-size: 14px;
        font-weight: 700;
        color: #17233d;
        border-bottom: 1px solid #e8eaec;
        padding: 14px 16px;
    }

    .login-top p {
        line-height: 20px;
    }

    .login-body {
        padding: 16px;
    }

    .el-form-item__label {
        text-align: left;
        width: 40px !important;
    }

    .el-form-item__content {
        margin-left: 40px !important;
    }

    .el-button--primary {
        margin-left: 50px;
    }

    .login-bottom {
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
    }
</style>