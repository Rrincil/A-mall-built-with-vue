import { createStore } from 'vuex'
const types={
  //判断是否认证通过
  SET_AUTHENTICATED:'SET_AUTHENTICATED',
  //配置用户
  SET_USER:'SET_USER'
}
const getters ={
  isAuthenticated : (state)=>state.isAuthenticated,
  user : (state)=>state.user
}
const actions ={
  setAuthenticated:({commit},isAuthenticated) =>{
    commit(types.SET_AUTHENTICATED,isAuthenticated)
  },
  setUser:({commit},user) =>{
    commit(types.SET_USER,user)
  }
}
export default createStore({
  getters,
  state: {
    count:0,
    isAuthenticated:false,
    user:{}
  },
  mutations: {
    addcount(state){
      state.count++
    },
    //在插件中显示参数
    [types.SET_AUTHENTICATED](state,isAuthenticated){
      if(isAuthenticated) state.isAuthenticated = isAuthenticated;
      else state.isAuthenticated = false;
    },
    [types.SET_USER](state,user){
      if(user) state.user = user;
      else state.user = {};
    }
  },
  actions,
  modules: {
  }
})
