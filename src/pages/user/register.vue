<template>
  <div id="register">
    <h5 class="title">注册账号</h5>
    <el-form ref="RegForm" :model="RegForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="RegForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="RegForm.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password1">
        <el-input v-model="RegForm.password1" placeholder="密码" show-password></el-input>
      </el-form-item>
      <el-form-item prop="password2">
        <el-input v-model="RegForm.password2" placeholder="确认密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="fgbutton" type="primary" :loading="ButLoading" @click="submitForm('RegForm')">注册</el-button>
      </el-form-item>
    </el-form>
   <span class="linklg">
      <hr>
      <p>已有账号</p>
      <router-link :to="{name: 'login'}">登录</router-link>
    </span>
  </div>
</template>

<script>
import { rulesUsername, rulesPassword, rulesEmail } from '@/assets/js/rules.js'
import {userRegister, userVreg} from '../../api/v1'
export default {
  data () {
    var rulesPassword2 = (rule, value, callback) => {
      if (this.RegForm.password2 === '') {
        callback(new Error('请再次输入密码'))
      } else if (this.RegForm.password2 !== this.RegForm.password1) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    // 验证用户名
    var rulesRegUser = (rule, value, callback) => {
      userVreg({username: value}).then(response => {
        if (response.code === 40005) {
          callback(new Error(response.msg))
        } else {
          callback()
        }
      })
    }
    // 验证邮箱
    var rulesRegEmail = (rule, value, callback) => {
      userVreg({email: value}).then(response => {
        console.log(response)
        if (response.code === 40005) {
          callback(new Error(response.msg))
        } else {
          callback()
        }
      })
    }
    return {
      RegForm: {
        username: '',
        password1: '',
        password2: '',
        email: ''
      },
      rules: {
        username: [{ required: true, validator: rulesUsername, trigger: 'blur' }, {validator: rulesRegUser, trigger: 'blur'}],
        password1: [{ required: true, validator: rulesPassword, trigger: 'blur' }],
        password2: [{ required: true, validator: rulesPassword2, trigger: 'blur' }],
        email: [{ required: true, validator: rulesEmail, trigger: 'blur' }, {validator: rulesRegEmail, trigger: 'blur'}]
      },
      ButLoading: false
    }
  },
  methods: {
    // 注册用户
    regUser () {
      this.ButLoading = true
      let form = {
        username: this.RegForm.username,
        password: this.RegForm.password1,
        email: this.RegForm.email
      }
      userRegister(form).then(response => {
        if (response.code === 0) {
          this.$notify({
            title: response.msg,
            message: '即将转跳到登录页面',
            type: 'success'
          })
          this.ButLoading = false
          setTimeout(() => {
            this.$router.push('user')
            // window.location.reload()
          }, 1000)
        } else {
          this.$notify.error({
            title: '错误',
            message: response.msg
          })
          this.ButLoading = false
        }
      })
    },
    submitForm (formName) {
      this.ButLoading = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.regUser()
        } else {
          console.log('error submit!!')
          this.ButLoading = false
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>
