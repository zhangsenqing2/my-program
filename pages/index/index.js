//index.js
//获取应用实例
const app = getApp()//getApp() 函数可以用来获取到小程序实例。
/**
 * Page 是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把 data 数据和 index.wxml 一起渲染出最终的结构，   于是就得到了你看到的小程序的样子。
 * 在渲染完界面之后，页面实例就会收到一个 onLoad 的回调，你可以在这个回调处理你的逻辑。
 * 生命周期函数
onLoad: 页面加载

一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
onShow: 页面显示

每次打开页面都会调用一次。
onReady: 页面初次渲染完成

一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期
onHide: 页面隐藏

当navigateTo或底部tab切换时调用。
onUnload: 页面卸载

当redirectTo或navigateBack的时候调用。
 */
Page({
  data: {
    // 参与页面渲染的数据
    motto: '热门旅游',
    mottoDetail:'最新的各种热门旅游资讯的推荐！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      { img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'},
      { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'},
      { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'}
    ],
    tourList:[
      { 
        tour_image:'../../image/tour1.png',
        detail1:'曼谷-芭提雅6 日游\n',
        detail2:'包团特惠，超丰富景点',
        strong:'2864',
        manyi:'97%'
      },
      {
        tour_image: '../../image/tour1.png',
        detail1: '马尔代夫双鱼岛4 晚6 日自助游\n',
        detail2: '包团特惠，超丰富景点',
        strong: '2864',
        manyi: '97%'
      },
      {
        tour_image: '../../image/tour1.png',
        detail1: '海南双飞5 日游\n',
        detail2: '包团特惠，超丰富景点',
        strong: '2864',
        manyi: '97%'
      },
      {
        tour_image: '../../image/tour1.png',
        detail1: '海南双飞5 日游&gt\n',
        detail2: '包团特惠，超丰富景点',
        strong: '2864',
        manyi: '97%'
      },
      {
        tour_image: '../../image/tour1.png',
        detail1: '海南双飞5 日游\n',
        detail2: '包团特惠，超丰富景点',
        strong: '2864',
        manyi: '97%'
      },
      {
        tour_image: '../../image/tour1.png',
        detail1: '海南双飞5 日游&gt\n',
        detail2: '包团特惠，超丰富景点',
        strong: '2864',
        manyi: '97%'
      }
    ]
  },
  //函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goDetail:function(){
    console.log("111");
    wx.navigateTo({
      url: '../scenery/scenery'
    })
  },
  onLoad: function () {
    // 页面渲染后 执行
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
      //调用了 wx.getUserInfo 获取微信用户的头像和昵称，最后通过 setData 把获取到的信息显示到界面上
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

