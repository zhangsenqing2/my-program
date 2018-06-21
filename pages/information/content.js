// pages/information/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottom:'0rpx',
    inputContent:'',
    commentList:[
      {
        name:'春江大叔叔',
        praise:'26',
        time:'29',
        content:"为什么我这里播放不了？我还是没有看明白啊。看I啊手机卡时间"
      },
      {
        name: '张三',
        praise: '52',
        time: '41',
        content: "为什么我这里播放不了？"
      },
      {
        name: '李四',
        praise: '99+',
        time: '45',
        content: "为什么我这里播放不了？我还是没有看明白啊。看I啊手机卡时间"
      }
      
    ]
  },
  //存在焦点
  showInput:function(){
    console.log("焦点在input");
    this.setData({
      bottom:"600rpx"
    });
  },
  //焦点离开
  defaultInput: function () {
    console.log("离开input");  
    this.setData({
      bottom: '0rpx'
    });
  },
  //键盘输入事件
  initContent:function(e){
    console.log(e.detail.value);
    this.setData({
      inputContent: e.detail.value
    });
    console.log(this.data.inputContent);
  },
  // 发送留言
  sendText:function(){
    console.log(this.data.inputContent);
    var content = {
      name: '春江大叔叔',
      praise: '26',
      time: '29',
      content: this.data.inputContent
    }
    var list = this.data.commentList;
    list.push(content);
    this.setData({
      commentList: list,
      inputContent:''
    });
  },
  //点赞
  toPraise(e){
    console.log(e.target.dataset.sub);
    var sub = e.target.dataset.sub;
    var list = this.data.commentList;
    list[sub].praise ++;
    this.setData({
      commentList:list
    });
  },
  //点击播放按钮
  startPlay: function () {
    console.log("点击播放");
  },
  closePlay: function () {
    console.log("关闭播放");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.closePlay();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
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
  
  }
})