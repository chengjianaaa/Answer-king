//index.js
//获取应用实例
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
// innerAudioContext.autoplay = true
innerAudioContext.loop = true
innerAudioContext.src = 'http://img95.699pic.com/audio/404/044/5aebf68cd03d6_all.mp3'
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    music:1,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
 //生命周期函数--监听页面显示
  onShow: function () {
    //背景音乐
    innerAudioContext.play();
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    innerAudioContext.pause()
    innerAudioContext.onPause(() => {
      console.log('暂停播放')
    })
  },

  //生命周期函数--监听页面卸载
  onUnload: function () {
    innerAudioContext.stop()
    innerAudioContext.onStop(() => {
      console.log('停止播放')
    })
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
