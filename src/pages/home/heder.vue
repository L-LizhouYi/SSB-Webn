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
      test
    </div>
  </div>
</template>

<script>
export default {
  name: 'heder',
  data () {
    return {
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
  }
}
</script>

<style scoped>

</style>
