<template>
  <div id="index">
    <div class="ixl">
<!--      轮播图-->
      <div>
        <el-carousel
          :interval="5000"
          trigger="click"
          height="225px">
          <el-carousel-item v-for="item in Carousel" :key="item.url">
            <a :href="item.url">
              <img :src="item.img" alt="">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
<!--      公告-->
      <div>
        <img src="@/assets/images/gb.png" alt="">
        <el-carousel
          height="50px"
          indicator-position="none"
          arrow="never"
          direction="vertical"
          :autoplay="true">
          <el-carousel-item v-for="item in Notice" :key="item.time">
            <a href="">
              {{ item.content }}<span>[{{ item.time }}]</span>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
<!--      排行榜-->
      <div id="Leaderboard">
<!--        个人榜-->
        <div>
          <h3>个人榜</h3>
          <el-table
            :data="Leaderboard.Personal"
            :header-cell-style="{fontSize: '2px',fontWeight: '400', color: '#000'}"
            style="width: 100%">
            <el-table-column
              prop="rank"
              label="排名"
              align="center"
              min-width="2">
            </el-table-column>
            <el-table-column
              prop="name"
              label="用户"
              min-width="4">
            </el-table-column>
            <el-table-column
              prop="minute"
              label="分数"
              min-width="3">
            </el-table-column>
          </el-table>
        </div>
<!--        战队榜-->
        <div>
          <h3>战队榜</h3>
          <el-table
            :data="Leaderboard.Personal"
            :header-cell-style="{fontSize: '2px',fontWeight: '400', color: '#000'}"
            style="width: 100%">
            <el-table-column
              prop="rank"
              label="排名"
              align="center"
              min-width="2">
            </el-table-column>
            <el-table-column
              prop="name"
              label="用户"
              min-width="4">
            </el-table-column>
            <el-table-column
              prop="minute"
              label="分数"
              min-width="3">
            </el-table-column>
          </el-table>
        </div>
      </div>
<!--      待定-->
      <div></div>
    </div>
    <div class="ixr">
<!--      签到-->
      <div>签到</div>
<!--      投稿入口-->
      <div>
        <h5>投稿入口</h5>
        <a href="">投稿题目</a><br>
        <a href="">投稿WP</a>
      </div>
<!--      最新WP-->
      <div>
        <h4>最新WP</h4>
      </div>
<!--      友情链接-->
      <div>
        <h4>友情链接</h4>
        <ul>
          <li><img src="img/unlink.png"><a>旧平台备份</a></li>
          <hr>
          <li><img src="img/favicon.ico"><a>Bugku论坛</a></li>
          <hr/>
          <li><img src="img/favicon.png"><a>CTF论剑场</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      Carousel: [
        {
          url: 'https://www.baidu.com',
          img: 'https://ctf.bugku.com/upload/20210207/4de63f01e9f90ad0155d3e4028a97b43.png'
        },
        {
          url: 'https://tianmao.com',
          img: 'https://ctf.bugku.com/upload/20210302/23bfae1b47f3934b2b6162d3036a4b14.png'
        }
      ],
      // 公告
      Notice: [
        {content: '这是第一条公告', time: '2002-11-11'},
        {content: '这是第二条公告', time: '2002-11-12'},
        {content: '这是第三条公告', time: '2002-11-13'}
      ],
      // 排行榜
      Leaderboard: {
        Personal: [
          {rank: 1, name: 'test', minute: 200},
          {rank: 2, name: 'test', minute: 200},
          {rank: 3, name: 'test', minute: 200},
          {rank: 4, name: 'test', minute: 200},
          {rank: 5, name: 'test', minute: 200},
          {rank: 6, name: 'test', minute: 200},
          {rank: 7, name: 'test', minute: 200},
          {rank: 8, name: 'test', minute: 200},
          {rank: 9, name: 'test', minute: 200},
          {rank: 10, name: 'test', minute: 200}
        ],
        Clan: []
      }
    }
  }
}
</script>

<style scoped>

</style>
