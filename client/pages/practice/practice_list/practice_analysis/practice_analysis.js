

Page({

  /**
   * 页面的初始数据
   */
  data: {
    an_list:'',//所有选项
    an_odds:0,
an_choicelen:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    this.setData({
      an_list:options.list.split(","),
      an_min:options.min,
      an_second: options.second,
      an_choicelen: options.choicelen
    })
    var an_list = this.data.an_list
    for (var i = 0; i < an_list.length;i++){
      if (an_list[i]=='1'){
        this.setData({
          an_odds:this.data.an_odds+1
        })
      }
    }
  },
  jiexiTap:function(){
    wx.redirectTo({
      url: '/pages/practice/practice_list/practice_Answer/practice_Answer'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    console.log(this.data.battlesList)
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