const innerAudioContext = wx.createInnerAudioContext()
// innerAudioContext.autoplay = true
innerAudioContext.loop = true
innerAudioContext.src = 'http://ovhvevt35.bkt.clouddn.com/photo/%E5%A5%BD%E5%A6%B9%E5%A6%B9%E4%B9%90%E9%98%9F%20-%20%E4%B8%8D%E8%AF%B4%E5%86%8D%E8%A7%81.mp3'
Page({
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
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    innerAudioContext.stop()
    innerAudioContext.onStop(() => {
      console.log('停止播放')
    })
  },
  //生命周期函数--监听页面卸载
  onUnload: function () {
    innerAudioContext.stop()
    innerAudioContext.onStop(() => {
      console.log('停止播放')
    })
  },
})