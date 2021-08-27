const axios = require('axios')
import { ElLoading,ElMessage } from 'element-plus';
import router from './router';
 const loading =ElLoading
 const Message = ElMessage
function startloading(){
  let  loadingInstance = loading.service({
    lock: true,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
    text:'拼命加载中....',

  })
}

function endloading(){
  let  loadingInstance = loading.service({})
  // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
   loadingInstance.close();
  // });
}


//请求拦截
axios.interceptors.request.use(config=>{
  //加载动画
  startloading();
  if(localStorage.eletoken){
    //设置统一的请求头
    config.headers.Authorization = localStorage.eletoken
  }
  return config;
},err=>{

  return Promise.reject(err)
})
//响应拦截
axios.interceptors.response.use(res=>{
  //结束加载动画
  endloading();

  return res;
  
},error=>{
  //错误提醒
  endloading()

  //获取错误状态码
  const { status } = error.response;

  if(status==401){
    Message.error('token失效,请重新登陆！');
    //清除token
    localStorage.removeItem('eletoken');
    //跳转到登陆页面
    // router.push('/login')
  }else{
  Message.error(error.response.data.mes);
  }
  return Promise.reject(error)
})
export default axios