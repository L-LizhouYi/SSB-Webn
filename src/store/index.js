import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  showFooter: true,
  changableNum: 0
}
// const getters = {
//   upNum (changableNum) {
//     return state.changableNum
//   }
// }
const store = new Vuex.Store({
  state
  // getters
})

export default store
