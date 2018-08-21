var practiceData = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    time:"",
    min:0,
    second:0,
    answer: '', //答案
    current: 0, //第几题
    optionId: '', //选择某一个
    select: '', //选中项
    list: ['', '', '', '', '', '', '', '', '', ''] //是否已打
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    this.setData({
      battlesList:practiceData.battlesList.concat(practiceData.battlesList)
    })
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    this.times();
  },
  times:function(){
    var _this=this;
    _this.setData({
      time:setInterval(function(){
        if (_this.data.second<59){
          _this.setData({
            second: _this.data.second + 1
          })
          
        }else{
          _this.setData({
            min: _this.data.min + 1,
            second: 0
          })
        }
        
      }, 1000)
    })
    
  },
  //显示答案
  tapjie: function(event) {
    var eve = event.currentTarget.dataset.id;
    if (this.data.answer != eve) {
      this.setData({
        answer: eve
      })
    } else {
      this.setData({
        answer: 0
      })
    }
  },
  //选择
  nextTap: function(event) {
    var _this = this;
    var price = 'list[' + (event.currentTarget.dataset.index - 1) + ']';
    _this.setData({
      current: event.currentTarget.dataset.index,
      [price]: event.currentTarget.dataset.dyc?1:0,
      select: event.currentTarget.dataset.id,
      optionId: event.currentTarget.dataset.index - 1
    })
  },
  //菜单
  menutap: function() {
    this.setData({
      current: this.data.battlesList.length
    })
  },
  //菜单按钮
  btnTap: function(eve) {
    this.setData({
      current: eve.currentTarget.id
    })
  },
  //提交答案
  subTap:function(){
    clearTimeout(this.data.time);
      wx.redirectTo({
        url: '/pages/practice/practice_list/practice_analysis/practice_analysis?list=' + this.data.list + '&&min=' + this.data.min + '&&second=' + this.data.second
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
    // var battlesList = this.data.battlesList;
    // module.exports =function() {
    //   battlesList:'11',
    //   wx.request(battlesList)
    // }
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