<template>
  <div>
    <h5 class="title">找回密码</h5>
    <el-form ref="RePwd" :model="RePwd" :rules="rules">
      <el-form-item prop="email">
        <el-input v-model="RePwd.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="fgbutton" type="primary" @click="submitForm('RePwd')">重置</el-button>
      </el-form-item>
    </el-form>
    <span class="linklg">
      <hr>
      <router-link :to="{ name: 'home' }">返回首页</router-link>
    </span>
  </div>
</template>

<script>
import { rulesEmail } from '@/assets/js/rules.js'
import {userVreg} from '../../api/v1'
export default {
  data () {
    var rulesRegEmail = (rule, value, callback) => {
      userVreg({email: value}).then(response => {
        if (response.code !== 40005) {
          callback(new Error('当前邮箱未注册'))
        } else {
          callback()
        }
      })
    }
    return {
      RePwd: {
        email: ''
      },
      rules: {
        email: [{ required: true, validator: rulesEmail, trigger: 'blur' }, {validator: rulesRegEmail, trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>
