<template>
  <div class="Home">
    {{ this.$store.state.showFooter }} <br>
    {{ this.$store.state.changableNum }}
    <button @click="add()">增加</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    add () {
      this.$store.state.changableNum++
    }
  }
}
</script>

<style>
</style>
