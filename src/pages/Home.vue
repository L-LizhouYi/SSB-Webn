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
  methods: {},
  components: {
    Header
  }
}
</script>

<style>
</style>
