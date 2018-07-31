// pages/battles/battles.js
var battlesData = require('../../data/battles-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexs: '',//选择的选项
    times: 8,//倒计时秒数
    timer:'',//倒计时
    ttimer:'',//倒计时为零显示正确答案，定时器
    stimer:'',//选完后倒计时下一题
    render:0,//第几题
    truetype:'',//正确答案
    selected:0,
    animationData:{}
  },
  timers: function () {
    let _this = this;
    _this.setData({
      timer: setInterval(function () {
        if (_this.data.times > 0) {
          _this.data.times--
          _this.setData({
            times: _this.data.times
          })
          console.log(_this.data.times)
        } else if (_this.data.times==0){
          clearTimeout(_this.data.timer);
          _this.setData({
            indexs:5,
            truetype: 'primary'    //时间到显示正确答案
          })
          _this.optiontap()
        }
      }, 1000)
    })
  },
  optiontap: function (event){
    var _this=this;
    if (_this.data.indexs==''){
      _this.setData({
        indexs: event.currentTarget.id,
        selected: _this.data.selected++,
        truetype: 'primary'
      })
      console.log(_this.data.selected)
    }
    stimer: this.data.stimer = setTimeout(function () {
      _this.setData({
        render: ++_this.data.render,
        indexs: '',
        times:10,
        truetype: ''
      })
      _this.touch(1, 0)
      _this.timers()
    }, 2000)
    clearTimeout(this.data.timer);
    _this.touch(2, 360)
    console.log(this.data.render)
  },
  
  //答完题后动画
  touch:function(res,str){
    let animation=wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    this.animation = animation
    animation.scale(res, res).rotate(str).step()
    this.setData({
      animationData: animation.export()
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      battlesList: battlesData.battlesList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.timers()
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