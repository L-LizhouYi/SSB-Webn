<template>
  <div class="Home">
    <div>
      <Header></Header>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/Home.css'
import Header from './home/heder'
export default {
  data () {
    return {
    }
  },
  created () {
    console.log('  _________ ___________________          _______________________________\n' +
      ' /   _____//   _____/\\______   \\         \\_   ___ \\__    ___/\\_   _____/\n' +
      ' \\_____  \\ \\_____  \\  |    |  _/  ______ /    \\  \\/ |    |    |    __)  \n' +
      ' /        \\/        \\ |    |   \\ /_____/ \\     \\____|    |    |     \\   \n' +
      '/_______  /_______  / |______  /          \\______  /|____|    \\___  /   \n' +
      '        \\/        \\/         \\/                  \\/               \\/    ')
  },
  methods: {
    // 判断用户是否登录, 更改显示区域, 加载榜单等信息 完成后 显示页面
    loging () {}
  },
  components: {
    Header
  }
}
</script>

<style>
</style>
