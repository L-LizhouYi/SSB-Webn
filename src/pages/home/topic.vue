<template>
<!--  题目页面-->
  <div class="Centered_globally" id="topic">
<!--    赛事分类-->
    <ul class="clasif">
      <span>赛事:</span>
      <li>ALL</li>
      <li>平台</li>
      <li>AWD复现</li>
      <li>CTF</li>
    </ul>
<!--    题型分类-->
    <ul class="clasif">
      <span>类型:</span>
      <li>ALL</li>
      <li>WEB</li>
      <li>MISC</li>
      <li>PWN</li>
      <li>Crypto</li>
      <li>Reverse</li>
    </ul>
<!--    题目-->
    <div id="timu">
      <div class="tmlist" v-for="i in timu" :key="i.tiele">
        <a href="">
          <h4 class="tmtit">{{ i.tiele }}</h4>
          <div class="text">
<!--            金币-->
            <div class="text1">
              <h6>{{ i.jb }}</h6>
              <span>金币</span>
            </div>
<!--            分数-->
            <div class="text2">
              <h6>{{ i.fs }}</h6>
              <span>分数</span>
            </div>
<!--            解决-->
            <div class="text3">
              <h6>{{ i.jj }}</h6>
              <span>解决</span>
            </div>
          </div>
          <div class="fenlei">
            <span>[{{ i.pt }}]</span>
            <span>[{{ i.fl }}]</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/topic.css'
export default {
  name: 'topic',
  data () {
    return {
      timu: [
        {tiele: '签到题1', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题2', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题3', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题4', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题5', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题6', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题7', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题8', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题9', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'},
        {tiele: '签到题10', jb: 20, fs: 65, jj: 365, pt: 'CTF', fl: 'WEB'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
