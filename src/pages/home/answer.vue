<template>
  <div id="answer" class="Centered_globally">
<!--    返回按钮-->
    <div id="return">
      <router-link :to="{name: 'topic'}" tag="p">&lt; 返回</router-link>
<!--      <p> &lt; 返回</p>-->
    </div>
<!--    答题区域-->
    <div id="dtqy">
      <div class="dtleft">
<!--        详细题目-->
        <div class="tmxx">
          <div class="dttit">
            <div>
              <h4>签到题</h4>
              <span>MISC</span>
              <span>未解决</span>
            </div>
            <div>
              <span>分数: <span>5</span></span>
              <span>金币: <span>10</span></span>
            </div>
          </div>
          <div><span>题目作者</span>:<a href="">test</a></div>
          <div><span>一血</span>:<a href="">test</a></div>
          <div><span>一血奖励</span>:<span>0金币</span></div>
          <div><span>解决</span>:<span>5564</span></div>
          <div><span>提示</span>:<span>这里是提示</span></div>
          <div><span>描述</span>:<p>这里是描述</p></div>
          <!--      提交flag-->
          <div id="tFlag">启动场景</div>
          <div id="form">
            <el-form :inline="true" class="demo-form-inline ">
              <el-form-item id="forms">
                <el-input placeholder="请输入Flag"></el-input>
                <el-button type="primary" >提交</el-button>
              </el-form-item>
            </el-form>
          </div>

        </div>
      </div>
      <div class="dtright"></div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/answer.css'
export default {
  name: 'answer'
}
</script>

<style scoped>

</style>
