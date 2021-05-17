<template>
  <div id="login">
    <el-form ref="LoginForm" :model="LoginForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="LoginForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="LoginForm.password" placeholder="密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="验证码"></el-input>
      </el-form-item>
      <p>
        <el-checkbox v-model="LoginForm.alogin">自动登录</el-checkbox>
        <span>
          <router-link :to="{ name: 'register' }">注册</router-link>|<router-link :to="{ name: 'resetpwd' }">找回密码</router-link>
        </span>
      </p>
      <el-form-item>
        <el-button class="fgbutton" @click="submitForm('LoginForm')" type="primary" :loading="ButLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { rulesUsername, rulesPassword } from '@/assets/js/rules.js'
import {userMe, userLogin} from '../../api/v1'
// import * as API from '@/api/v1.js'
export default {
  data () {
    return {
      LoginForm: {
        username: '',
        password: '',
        alogin: true
      },
      rules: {
        username: [{ required: true, validator: rulesUsername, trigger: 'blur' }],
        password: [{ required: true, validator: rulesPassword, trigger: 'blur' }]
      },
      // 按钮状态
      ButLoading: false
    }
  },
  created () {
    // 检查JWT 成功转跳主页
    userMe().then(request => {
      if (request.code === 0) {
        this.$router.push('/home')
      }
    })
  },
  methods: {
    // 登录
    Login () {
      this.ButLoading = true
      if (this.LoginForm.alogin) {
        localStorage.setItem('autologin', true)
      } else {
        localStorage.setItem('autologin', null)
      }
      userLogin(this.LoginForm).then(response => {
        if (response.code === 0) {
          // 登录成功
          localStorage.setItem('token', response.data.token_type + ' ' + response.data.access_token)
          this.$notify({
            title: response.msg,
            message: '即将转跳到主页面',
            type: 'success'
          })
          this.ButLoading = false
          setTimeout(() => {
            this.$router.push('home')
            window.location.reload()
          }, 1000)
        } else {
          this.$notify.error({
            title: '登录失败',
            message: response.msg
          })
          this.ButLoading = false
          this.LoginForm.password = null
        }
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.Login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
