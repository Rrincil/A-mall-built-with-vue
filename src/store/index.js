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
  },
  clearCurrentState:({commit})=>{
    commit(types.SET_AUTHENTICATED,false);
    commit(types.SET_USER,null);
  },
  addcount2:({commit,count})=>{
    commit(count)
  },
  addcart2:({commit,cart})=>{
    commit(cart)
  },
}
export default createStore({
  getters,
  state: {
    count:0,
    isAuthenticated:false,
    user:{},
    cart:[],
    tempcart:[],
    isstart:[],
    star:[]
  },
  mutations: {
    addcount(state,payload){
      if(state.isAuthenticated) state.count= payload
      else state.count = 0
    },
    addcart(state,payload){
      if(state.isAuthenticated) state.cart= payload
      else state.cart = []
    },  
    // editstarcart(state,payload){
    //   // this.$set(对象, key, 数组)
    //   this.$set(state.cart,isstar,payload)
    // },
    addtempcart(state,payload){
      state.tempcart = payload
    } ,
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
