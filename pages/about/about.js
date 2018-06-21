// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headInfo:"我是头部",
    contentInfo:"我是内容区",
    footInfo:"我是尾部",
    x:0,
    y:0
  },
  tap:function(e){
    this.setData({
      "x":30,
      "y":30
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 弹框
    // wx.showModal({
    //   title: '页面加载',
    //   duration: 1000
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.showModal({
    //   title: '页面初次渲染完成',
    //   duration: 1000
    // });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.showModal({
    //   title: '页面显示'
    // });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // wx.showModal({
    //   title: '页面隐藏'
    // });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // wx.showModal({
    //   title: '页面隐藏'
    // });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showModal({
      title: '用户下拉动作'
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})