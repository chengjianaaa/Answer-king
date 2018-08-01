// pages/battles/battles.js
var battlesData = require('../../data/battles-data.js')
Page({

  // 页面的初始数据(傻子不知道)
  data: {
    indexs: '',//选择的选项
    times: 30,//倒计时秒数
    timer:'',//倒计时
    ttimer:'',//倒计时为零显示正确答案，定时器
    stimer:'',//选完后倒计时下一题
    render:0,//第几题
    truetype:'',//正确答案
    end:0,//是否已答题
    myintegral:0,//我的分数
    selected:0,//为1说明人家答了，为0说明人家没答
    animationData:{}//初始化动画
  },
  //30秒倒计时
  timers: function () {
    let _this = this;
    _this.setData({
      timer: setInterval(function () {
        if (_this.data.times > 0) {
          _this.data.times--
          _this.setData({
            times: _this.data.times,
            end: 0
          })
        } else if (_this.data.times==0){
          clearTimeout(_this.data.timer);
          _this.setData({
            indexs:5,
            truetype: 'primary'    //时间到显示正确答案
          })
          console.log('时间到了还尼玛不选')
          _this.optiontap()
        }
      }, 1000)
    })
  },
  //点击事件我擦
  optiontap: function (event){
    var _this = this,
      times = _this.data.times;
    if (!_this.data.end) {
      _this.setData({
        end: 1
      })
      console.log(this.data.render<5?'第' + (this.data.render + 1) + '题':'答题结束')
      //把答案id传进去
    if (_this.data.indexs==''){
      _this.setData({
        indexs: event.currentTarget.id,
        selected: _this.data.selected++,
        truetype: event.currentTarget.dataset.type? '' : 'primary',
        myintegral: event.currentTarget.dataset.type ? _this.data.myintegral + 100 + (times > 25 ? 80 : times > 20 ? 50 : times > 10 ? 30 : -10) : _this.data.myintegral
      })
      console.log(event.currentTarget.dataset.type?"真聪明选对了！":"傻逼，不是这个")
      console.log(_this.data.selected ? "他选对没" :"等会人家还没选呢！")
    }
    //第几道题了
    if (_this.data.render < 5) {
      stimer: this.data.stimer = setTimeout(function () {
        _this.setData({
          render: ++_this.data.render,
          indexs: '',
          times:30,
          truetype: '',
        })
      
          _this.touch(1, 0)
          _this.timers()
        
    }, 2000)
    clearTimeout(this.data.timer);
    _this.touch(2, 360)
    }
    }
  },
  
  //答完题后倒计时旋转动画
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
    //获取题库
    this.setData({
      battlesList: battlesData.battlesList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //初始化开始倒计时
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