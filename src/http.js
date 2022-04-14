const axios = require('axios')
import { ElLoading,ElMessage } from 'element-plus';
import router from './router';
import  "./assets/loading.css"
 const loading =ElLoading
 const Message = ElMessage
 let  Loading
export function startloading(showLoadingTime){
  
/*开启遮罩*/
  showLoadingTime=showLoadingTime||"2"

    Loading = loading.service({
    customClass:"axios-loading"+showLoadingTime,
    lock: true,  
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
    text:'拼命加载中....',
    timeout:5000
  })
}

/*关闭遮罩*/
export function endloading(){
  if( Loading)
   Loading.close();
  // });
}
//




// showFullScreenLoading() tryHideFullScreenLoading() 将同一时刻的请求合并
// 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1
let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startloading
    // console.log(needLoadingRequestCount);
  }
  needLoadingRequestCount += 1;
}
// 调用 tryHideFullScreenLoading()方法，needLoadingRequestCount-1。needLoadingRequestCount为 0时，结束 loading
export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount -= 1;
  if (needLoadingRequestCount === 0) {
    endloading()
  }
  // console.log(needLoadingRequestCount);

}








let starTimestamp = (new Date()).valueOf();
let endTimestamp = (new Date()).valueOf();
/*showLoadingTime请求几秒未返回值显示Loading*/
//请求拦截
axios.interceptors.request.use(config=>{

// request拦截器中调用 showFullScreenLoading()
showFullScreenLoading();

  //加载动画
/*开启遮罩*/
starTimestamp = (new Date()).valueOf();
startloading(config.showLoadingTime);

  /*接口请求时间长的时候有个遮罩层*/

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
// response拦截器中调用 tryHideFullScreenLoading()
tryHideFullScreenLoading();
  //结束加载动画
  endloading();
  return res;
},error=>{
// 所以还是统一在回调中关闭 loading，而不仅仅在 response对应的拦截函数中
tryHideFullScreenLoading();

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