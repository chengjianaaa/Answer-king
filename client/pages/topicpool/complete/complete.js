// pages/topicpool/complete/complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schools:'', //选的哪个学段
    courses:'', //选的哪个学科
    address:'', //选的哪个地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this=this;
    if (window in options){
      _this.setData({
        schools: options.schools, //选的哪个学段
        courses: options.courses, //选的哪个学科
        address: options.address //选的哪个地址
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(this.data.schools)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})