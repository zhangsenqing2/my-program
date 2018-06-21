//app.js
/**
 * app()函数用来注册一个小程序。接收一个Object参数，其指定小程序的生命周期函数等。
 * App() 必须在 app.js 中注册，且不能注册多个。
      不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。
      不要在 onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
      通过 getApp() 获取实例之后，不要私自调用生命周期函数。
  onlaunch和onshow方法参数中可获取场景值(进入此小程序的入口)
 */
App({
  //生命周期函数--监听小程序初始化,当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function (val) {
    console.log("小程序初始化完成");
    console.log(val);
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户的当前设置。
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // 获取用户信息
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //生命周期函数--监听小程序显示
  onShow:function(val){
    //当小程序启动，或从后台进入前台显示，会触发 onShow
    console.log("后台进入前台");
    console.log(val);
  },
  //生命周期函数--监听小程序隐藏
  onHide:function(){
    //当小程序从前台进入后台，会触发 onHide
    console.log("前台进入后台");
  },
  //错误监听函数
  onError:function(){
    //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  },
  //页面不存在监听函数
  onPageNotFound:function(){
    //当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数
  },
  //添加全局数据
  globalData: {
    userInfo: null
  }
})