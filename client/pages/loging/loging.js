// pages/loging/loging.js
//获取应用实例
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
// innerAudioContext.autoplay = true
innerAudioContext.loop = true
innerAudioContext.src = 'http://img95.699pic.com/audio/378/786/5aebf68cb63ed_all.mp3'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: ''
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
    this.data.timer = setTimeout(function () {
      wx.redirectTo({
        url: '/pages/Readiness/Readiness'
      })
    },3000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  //生命周期函数--监听页面隐藏
  onHide: function () {
    
  },
    //生命周期函数--监听页面显示
    onShow: function () {
      //背景音乐
      innerAudioContext.play();
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
      innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
    },

    //生命周期函数--监听页面卸载
    onUnload: function () {
      clearTimeout(this.data.timer);//停止定时器
      innerAudioContext.stop()
      innerAudioContext.onStop(() => {
        console.log('停止播放')
      })
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