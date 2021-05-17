<template>
  <div id="herder">
    <div class="logo">
      <a href="">
        <img :src="this.logoInfo.imgUrl" alt="">
      </a>
    </div>
    <div class="features">
      <ul>
        <router-link
          v-for="item in features"
          :key="item.name"
          to="item.view"
          tag="li">{{ item.name }}
        </router-link>
      </ul>
    </div>
    <div class="Avatar">
      <div id="Avatar1" v-show="!jwt">
        <router-link :to="{name: 'login'}" >登录</router-link>
        <router-link :to="{name: 'register'}">注册</router-link>
      </div>
      <div id="Avatar2" v-show="jwt" @click="drawer = true">
        <span>{{ this.userInfo.name }}</span>
        <span><img src="" alt=""></span>
      </div>
    </div>
<!--    用户设置抽屉     -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import {userMe} from '../../api/v1'
export default {
  name: 'heder',
  data () {
    return {
      // 抽屉
      drawer: false,
      // Jtw 头像区域
      jwt: false,
      // 用户名和头像
      userInfo: {
        name: '',
        Avatar: ''
      },
      // logo
      logoInfo: {
        url: 'https://www.baidu.com',
        imgUrl: 'https://ctf.bugku.com/upload/20201117/61f4c2f2718ee53b7ff90ef743263143.png'
      },
      // 功能
      features: [
        {
          view: '',
          name: '首页'
        },
        {
          view: '',
          name: '题目'
        },
        {
          view: '',
          name: 'AWD'
        },
        {
          view: '',
          name: '动态'
        },
        {
          view: '',
          name: '公告'
        },
        {
          view: '',
          name: 'WP库'
        },
        {
          view: '',
          name: '排行榜'
        },
        {
          view: '',
          name: '战队'
        },
        {
          view: '',
          name: '商城'
        },
        {
          view: '',
          name: '赛事中心'
        },
        {
          view: '',
          name: '更多'
        }
      ]
    }
  },
  created () {
    this.me()
  },
  methods: {
    // 检查登录
    me () {
      userMe().then(reponse => {
        console.log(reponse)
        if (reponse.code === 0) {
          this.jwt = true
          this.userInfo.name = reponse.data.username
        } else {
          localStorage.setItem('token', '')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
