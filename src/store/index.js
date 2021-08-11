import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  mutations: {
    addcount(state){
      state.count++
      
      
    }
  },
  actions: {
  },
  modules: {
  }
})
